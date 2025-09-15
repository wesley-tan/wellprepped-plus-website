# 📝 Notion Blog Setup Guide

## 🎯 **Why Notion?**

Your team can now edit blog posts like **Google Docs** - no coding required! Here's what makes Notion perfect for your needs:

- ✅ **Super Easy** - Anyone can write blog posts
- ✅ **Rich Content** - Images, tables, code blocks, embeds
- ✅ **Team Collaboration** - Multiple people can edit together  
- ✅ **Instant Publishing** - Blog updates automatically
- ✅ **Free to Start** - No monthly fees for basic usage

---

## 🚀 **Step-by-Step Setup**

### **Step 1: Create Notion Integration**

1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click **"+ New integration"**
3. Fill out the form:
   - **Name**: `WellPrepped Blog`
   - **Associated workspace**: Select your workspace
   - **Capability**: Check "Read content", "Update content", "Insert content"
4. Click **"Submit"**
5. **Copy the "Internal Integration Token"** (starts with `secret_`)

### **Step 2: Create Blog Database**

1. In Notion, create a new page called **"Blog Posts"**
2. Add a **Database** (type `/database` and select "Database - Full page")
3. Set up these **exact** properties (case-sensitive):

| Property Name | Type | Description |
|---------------|------|-------------|
| **Title** | Title | Blog post title |
| **Slug** | Text | URL slug (e.g., "my-first-post") |
| **Excerpt** | Text | Short description |
| **Date** | Date | Publication date |
| **Category** | Select | Post category |
| **Tags** | Multi-select | Post tags |
| **Status** | Select | Draft, Published |
| **Read Time** | Number | Reading time in minutes |

4. For **Status** property, add these options:
   - `Draft` (for work-in-progress)
   - `Published` (for live posts)

5. For **Category** property, add these options:
   - `IB Strategy`
   - `University Guide` 
   - `Admissions`
   - `Study Tips`

### **Step 3: Connect Database to Integration**

1. In your **Blog Posts** database, click the **three dots** (⋯) menu
2. Select **"Add connections"**
3. Find and select **"WellPrepped Blog"** integration
4. Click **"Confirm"**

### **Step 4: Get Database ID**

1. In your **Blog Posts** database, click **"Share"** button
2. Copy the database URL (looks like: `https://notion.so/yourworkspace/a1b2c3d4...`)
3. The **Database ID** is the 32-character string at the end
4. Example: `https://notion.so/workspace/a1b2c3d4e5f67890a1b2c3d4e5f67890` → Database ID is `a1b2c3d4e5f67890a1b2c3d4e5f67890`

### **Step 5: Configure Your Website**

1. Copy `env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Edit `.env.local` with your values:
   ```bash
   NOTION_TOKEN=secret_your_integration_token_here
   NOTION_DATABASE_ID=your_database_id_here
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

---

## ✍️ **How to Write Blog Posts**

### **Creating a New Post**

1. Open your **Blog Posts** database in Notion
2. Click **"+ New"** to add a row
3. Fill out the properties:
   - **Title**: "How to Score 45 Points in IB"
   - **Slug**: "how-to-score-45-points-ib"
   - **Excerpt**: "Discover proven strategies..."
   - **Date**: Select publication date
   - **Category**: "IB Strategy"
   - **Tags**: "IB", "Study Tips"
   - **Status**: "Draft" (while writing)

4. Click on the **Title** to open the full page
5. Write your content using Notion's rich editor

### **Content Writing Tips**

- **Headers**: Use `/h1`, `/h2`, `/h3` for structure
- **Images**: Upload directly or paste image URLs
- **Lists**: Use bullet points and numbered lists
- **Code**: Use `/code` for code blocks
- **Quotes**: Use `/quote` for blockquotes
- **Tables**: Create data tables easily

### **Publishing a Post**

1. When ready to publish, change **Status** to "Published"
2. Your website will automatically show the new post!
3. The blog list updates in **real-time**

---

## 🎨 **Content Examples**

### **Sample Blog Post Structure**

```
# How to Score 45 Points in the IB Diploma

The IB Diploma Programme is challenging, but with the right strategies, you can achieve a perfect score.

## Understanding the IB System

The IB uses a points system where...

### Subject Selection Strategy

Choose subjects that align with your strengths...

## Study Techniques That Work

1. **Active recall** - Test yourself regularly
2. **Spaced repetition** - Review at intervals
3. **Practice papers** - Simulate exam conditions

> "Success is where preparation and opportunity meet." - Bobby Unser

## Conclusion

Remember, consistency beats perfection...
```

---

## 🔧 **Troubleshooting**

### **Posts Not Showing Up?**

1. Check **Status** is set to "Published"
2. Verify **Slug** field is filled
3. Restart development server: `npm run dev`

### **Images Not Loading?**

1. Use **public image URLs** (Unsplash, your website, etc.)
2. Or upload images directly to Notion

### **Database Connection Issues?**

1. Verify integration has access to the database
2. Check **Database ID** is correct (32 characters)
3. Ensure **NOTION_TOKEN** starts with `secret_`

---

## 👥 **Team Workflow**

### **For Content Writers**

1. **Create Draft**: Set Status to "Draft"
2. **Write Content**: Use Notion's editor
3. **Review**: Share with team for feedback
4. **Publish**: Change Status to "Published"

### **For Editors**

1. **Review Drafts**: Check posts with "Draft" status
2. **Edit Content**: Make changes directly in Notion
3. **Approve**: Change Status to "Published"

### **For Managers**

1. **Content Calendar**: Use Date field to plan posts
2. **Categories**: Organize by Category and Tags
3. **Analytics**: Track which content performs best

---

## 🎉 **You're All Set!**

Your team can now:
- ✅ Write blog posts in Notion (like Google Docs)
- ✅ Collaborate in real-time
- ✅ Publish instantly without code
- ✅ Add rich media and formatting
- ✅ Manage content with ease

**Need help?** The Notion interface is intuitive, but here are some resources:
- [Notion Help Center](https://www.notion.so/help)
- [Notion Templates](https://www.notion.so/templates)

---

**Happy blogging! 🚀**
