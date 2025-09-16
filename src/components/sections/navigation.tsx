"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/", section: "home" },
    { name: "Our Team", href: "/team", section: "team" },
    { name: "Services", href: "/services", section: "services" },
    { name: "College Admissions", href: "/college-admissions", section: "admissions" },
    { name: "Blog", href: "/blog", section: "blog" },
    { name: "Contact Us", href: "/contact", section: "contact" },
  ];

  // Handle smooth scrolling for homepage sections
  const handleSectionClick = (sectionId: string) => {
    if (pathname === "/" && sectionId !== "home") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(sectionId);
      }
    }
    setIsOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "programme", "services", "results", "testimonials", "faq"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-display font-bold text-2xl text-foreground">
              WellPrepped+
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => {
                const isActive = pathname === item.href || (pathname === "/" && activeSection === item.section);
                
                // Handle homepage section navigation vs regular page navigation
                if (pathname === "/" && item.href === "/" && item.section) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleSectionClick(item.section)}
                      className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full relative overflow-hidden group ${
                        isActive
                          ? "text-accent bg-accent/10 shadow-lg"
                          : "text-foreground hover:text-accent hover:bg-foreground/5"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className={`absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive ? "opacity-30" : ""}`} />
                    </button>
                  );
                }
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full relative overflow-hidden group ${
                      isActive
                        ? "text-accent bg-accent/10 shadow-lg"
                        : "text-foreground hover:text-accent hover:bg-foreground/5"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive ? "opacity-30" : ""}`} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <div className="px-4 pt-4 pb-6 space-y-2 bg-background/98 backdrop-blur-md border-t border-foreground/20 shadow-xl">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || (pathname === "/" && activeSection === item.section);
              
              // Handle homepage section navigation vs regular page navigation
              if (pathname === "/" && item.href === "/" && item.section) {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleSectionClick(item.section)}
                    className={`block w-full text-left px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      isActive
                        ? "text-accent bg-accent/15 shadow-lg border-l-4 border-accent"
                        : "text-foreground hover:text-accent hover:bg-foreground/10"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? "text-accent bg-accent/15 shadow-lg border-l-4 border-accent"
                      : "text-foreground hover:text-accent hover:bg-foreground/10"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            {/* Mobile CTA Button */}
            <div className="pt-4">
              <button 
                className="w-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 px-6 py-4 rounded-xl text-base font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
