"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const NAV_LINKS = [
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
];

function classNames(...classes: string[]) {
              return classes.filter(Boolean).join(" ");
}

const Header: React.FC = () => {
              const { theme, setTheme } = useTheme();
              const [menuOpen, setMenuOpen] = useState(false);
              const [activeSection, setActiveSection] = useState<string>("#home");

              // Smooth scroll and active section highlight
              useEffect(() => {
                            const handleScroll = () => {
                                          const offsets = NAV_LINKS.map((link) => {
                                                        const el = document.querySelector(link.href);
                                                        return el ? (el as HTMLElement).offsetTop : 0;
                                          });
                                          const scrollPosition = window.scrollY + 100;
                                          for (let i = offsets.length - 1; i >= 0; i--) {
                                                        if (scrollPosition >= offsets[i]) {
                                                                      setActiveSection(NAV_LINKS[i].href);
                                                                      break;
                                                        }
                                          }
                            };
                            window.addEventListener("scroll", handleScroll);
                            return () => window.removeEventListener("scroll", handleScroll);
              }, []);

              const handleNavClick = (href: string, e?: React.MouseEvent) => {
                            if (e) e.preventDefault();
                            if (menuOpen) {
                                          setMenuOpen(false);
                                          setTimeout(() => {
                                                        const el = document.querySelector(href);
                                                        if (el) {
                                                                      el.scrollIntoView({ behavior: "smooth" });
                                                        }
                                          }, 200); // Menü animasyonu için kısa gecikme
                            } else {
                                          const el = document.querySelector(href);
                                          if (el) {
                                                        el.scrollIntoView({ behavior: "smooth" });
                                          }
                            }
              };

              return (
                            <header
                                          className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/60 dark:bg-black/40 border-b border-white/20 dark:border-black/30 shadow-sm transition-all duration-500"
                                          style={{ WebkitBackdropFilter: "blur(16px)" }}
                            >
                                          <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
                                                        {/* Logo */}
                                                        <div className="font-bold text-lg md:text-xl tracking-tight select-none cursor-pointer">
                                                                      Betül Oran
                                                        </div>
                                                        {/* Desktop Menu */}
                                                        <ul className="hidden md:flex gap-2 lg:gap-6 items-center justify-center flex-1">
                                                                      {NAV_LINKS.map((link) => (
                                                                                    <li key={link.href}>
                                                                                                  <a
                                                                                                                href={link.href}
                                                                                                                onClick={(e) => handleNavClick(link.href, e)}
                                                                                                                className={classNames(
                                                                                                                              "px-3 py-1 rounded transition-colors duration-200 font-medium text-base",
                                                                                                                              activeSection === link.href
                                                                                                                                            ? "bg-black/10 dark:bg-white/10 text-black dark:text-white"
                                                                                                                                            : "text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
                                                                                                                )}
                                                                                                  >
                                                                                                                {link.label}
                                                                                                  </a>
                                                                                    </li>
                                                                      ))}
                                                        </ul>
                                                        {/* Right: Dark mode toggle & Hamburger */}
                                                        <div className="flex items-center gap-2">
                                                                      {/* Dark mode toggle */}
                                                                      <button
                                                                                    aria-label="Toggle dark mode"
                                                                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                                                                    className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                                                                      >
                                                                                    {theme === "dark" ? (
                                                                                                  // Sun Icon
                                                                                                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-400">
                                                                                                                <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
                                                                                                                <path strokeWidth="1.5" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41" />
                                                                                                  </svg>
                                                                                    ) : (
                                                                                                  // Moon Icon
                                                                                                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-800 dark:text-gray-200">
                                                                                                                <path strokeWidth="1.5" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                                                                                                  </svg>
                                                                                    )}
                                                                      </button>
                                                                      {/* Hamburger menu (mobile) */}
                                                                      <button
                                                                                    className="md:hidden p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                                                                                    aria-label="Open menu"
                                                                                    onClick={() => setMenuOpen((v) => !v)}
                                                                      >
                                                                                    {/* Hamburger Icon */}
                                                                                    <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                  <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                                                                                    </svg>
                                                                      </button>
                                                        </div>
                                          </nav>
                                          {/* Mobile Menu */}
                                          <div
                                                        className={`overflow-hidden md:hidden bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-white/20 dark:border-black/30 transition-all duration-300 ${menuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}
                                          >
                                                        <ul className="flex flex-col gap-1 px-4 pb-3">
                                                                      {NAV_LINKS.map((link) => (
                                                                                    <li key={link.href}>
                                                                                                  <a
                                                                                                                href={link.href}
                                                                                                                onClick={(e) => handleNavClick(link.href, e)}
                                                                                                                className={classNames(
                                                                                                                              "w-full text-left px-3 py-2 rounded transition-colors duration-200 font-medium text-base",
                                                                                                                              activeSection === link.href
                                                                                                                                            ? "bg-black/10 dark:bg-white/10 text-black dark:text-white"
                                                                                                                                            : "text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
                                                                                                                )}
                                                                                                  >
                                                                                                                {link.label}
                                                                                                  </a>
                                                                                    </li>
                                                                      ))}
                                                        </ul>
                                          </div>
                            </header>
              );
};

export default Header; 