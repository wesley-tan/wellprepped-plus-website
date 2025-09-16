// src/lib/notion.js
import { Client } from '@notionhq/client';

// Initialize Notion client only if environment variables are available
let notion = null;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

try {
  if (process.env.NOTION_TOKEN && process.env.NOTION_DATABASE_ID) {
    notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });
  }
} catch (error) {
  console.warn('Notion client could not be initialized:', error.message);
}

/**
 * Fetch all published blog posts from Notion database
 */
export async function getPosts() {
  // Return empty array if Notion is not configured
  if (!notion || !NOTION_DATABASE_ID) {
    console.warn('Notion not configured - using fallback data');
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published'
        }
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending'
        }
      ]
    });

    return response.results.map(formatPost);
  } catch (error) {
    console.error('Error fetching posts from Notion:', error);
    // Return empty array instead of throwing error during build
    return [];
  }
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug) {
  // Return null if Notion is not configured
  if (!notion || !NOTION_DATABASE_ID) {
    console.warn('Notion not configured - cannot fetch post');
    return null;
  }

  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Status',
            select: {
              equals: 'Published'
            }
          },
          {
            property: 'Slug',
            rich_text: {
              equals: slug
            }
          }
        ]
      }
    });

    if (response.results.length === 0) {
      return null;
    }

    const post = formatPost(response.results[0]);
    
    // Fetch the page content
    const content = await getPageContent(post.id);
    
    return {
      ...post,
      content
    };
  } catch (error) {
    console.error('Error fetching post by slug from Notion:', error);
    // Return null instead of throwing error during build
    return null;
  }
}

/**
 * Fetch page content (blocks) from Notion
 */
export async function getPageContent(pageId) {
  // Return empty array if Notion is not configured
  if (!notion) {
    console.warn('Notion not configured - cannot fetch page content');
    return [];
  }

  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100
    });

    return response.results.map(formatBlock);
  } catch (error) {
    console.error('Error fetching page content from Notion:', error);
    // Return empty array instead of throwing error during build
    return [];
  }
}

/**
 * Format a Notion page into our blog post structure
 */
function formatPost(page) {
  const properties = page.properties;
  
  return {
    id: page.id,
    title: getPlainText(properties.Title?.title || properties.Name?.title || []),
    slug: getPlainText(properties.Slug?.rich_text || []),
    excerpt: getPlainText(properties.Excerpt?.rich_text || []),
    date: properties.Date?.date?.start || page.created_time,
    category: properties.Category?.select?.name || 'Uncategorized',
    tags: properties.Tags?.multi_select?.map(tag => tag.name) || [],
    cover: page.cover?.external?.url || page.cover?.file?.url || null,
    readTime: properties['Read Time']?.number || calculateReadTime(properties.Content?.rich_text || [])
  };
}

/**
 * Format Notion blocks into readable content
 */
function formatBlock(block) {
  const { type } = block;
  
  switch (type) {
    case 'paragraph':
      return {
        type: 'paragraph',
        content: getPlainText(block.paragraph.rich_text)
      };
    case 'heading_1':
      return {
        type: 'h1',
        content: getPlainText(block.heading_1.rich_text)
      };
    case 'heading_2':
      return {
        type: 'h2',
        content: getPlainText(block.heading_2.rich_text)
      };
    case 'heading_3':
      return {
        type: 'h3',
        content: getPlainText(block.heading_3.rich_text)
      };
    case 'bulleted_list_item':
      return {
        type: 'li',
        content: getPlainText(block.bulleted_list_item.rich_text)
      };
    case 'numbered_list_item':
      return {
        type: 'oli',
        content: getPlainText(block.numbered_list_item.rich_text)
      };
    case 'image':
      return {
        type: 'image',
        url: block.image.external?.url || block.image.file?.url,
        caption: getPlainText(block.image.caption || [])
      };
    case 'code':
      return {
        type: 'code',
        content: getPlainText(block.code.rich_text),
        language: block.code.language
      };
    case 'quote':
      return {
        type: 'quote',
        content: getPlainText(block.quote.rich_text)
      };
    default:
      return {
        type: 'paragraph',
        content: ''
      };
  }
}

/**
 * Extract plain text from Notion rich text array
 */
function getPlainText(richTextArray) {
  return richTextArray.map(text => text.plain_text).join('');
}

/**
 * Calculate estimated read time
 */
function calculateReadTime(richTextArray) {
  const wordsPerMinute = 200;
  const wordCount = getPlainText(richTextArray).split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Get unique categories from posts
 */
export async function getCategories() {
  // Return default categories if Notion is not configured
  if (!notion || !NOTION_DATABASE_ID) {
    console.warn('Notion not configured - using default categories');
    return ['All', 'IB Strategy', 'Admissions', 'University Guide'];
  }

  try {
    const posts = await getPosts();
    const categories = [...new Set(posts.map(post => post.category))];
    return ['All', ...categories];
  } catch (error) {
    console.error('Error fetching categories from Notion:', error);
    // Return default categories instead of throwing error during build
    return ['All', 'IB Strategy', 'Admissions', 'University Guide'];
  }
}

/**
 * Format date for display
 */
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
