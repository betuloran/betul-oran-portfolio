"use client";

import React, { useState, useEffect, useRef } from "react";
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
              const [activeSection, setActiveSection] = useState<string>("#home");
              const [scrolled, setScrolled] = useState(false);
              const [menuOpen, setMenuOpen] = useState(false);
              const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

              useEffect(() => {
                            const handleScroll = () => {
                                          setScrolled(window.scrollY > 10);
                            };
                            window.addEventListener("scroll", handleScroll);
                            return () => window.removeEventListener("scroll", handleScroll);
              }, []);

              useEffect(() => {
                            const observer = new window.IntersectionObserver(
                                          (entries) => {
                                                        const visibleSections = entries.filter((entry) => entry.isIntersecting);
                                                        if (visibleSections.length > 0) {
                                                                      // En üstteki intersecting section'ı bul
                                                                      const topSection = visibleSections.reduce((prev, curr) =>
                                                                                    prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
                                                                      );
                                                                      setActiveSection(`#${topSection.target.id}`);
                                                        }
                                          },
                                          {
                                                        root: null,
                                                        rootMargin: "-30% 0px -60% 0px", // üstteki section daha erken aktif olsun
                                                        threshold: 0.2,
                                          }
                            );
                            NAV_LINKS.forEach((link) => {
                                          const id = link.href.replace("#", "");
                                          const el = document.getElementById(id);
                                          if (el) {
                                                        sectionRefs.current[link.href] = el;
                                                        observer.observe(el);
                                          }
                            });
                            return () => {
                                          NAV_LINKS.forEach((link) => {
                                                        const el = sectionRefs.current[link.href];
                                                        if (el) observer.unobserve(el);
                                          });
                            };
              }, []);

              const handleNavClick = (href: string, e?: React.MouseEvent) => {
                            if (e) e.preventDefault();
                            setMenuOpen(false);
                            setActiveSection(href);
                            const el = document.querySelector(href);
                            if (el) el.scrollIntoView({ behavior: "smooth" });
              };

              return (
                            <header
                                          className={classNames(
                                                        "fixed top-0 left-0 w-full z-50 border-b border-slate-100/70 bg-white/80 dark:bg-black/70 backdrop-blur-xl transition-all duration-300 flex items-center",
                                                        scrolled ? "shadow-md" : "shadow-none"
                                          )}
                                          style={{ WebkitBackdropFilter: "blur(16px)" }}
                            >
                                          <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
                                                        {/* Logo */}
                                                        <div className="font-bold text-lg md:text-xl tracking-tight select-none cursor-pointer text-indigo-700 dark:text-indigo-300 flex items-center h-12">
                                                                      Betül Oran
                                                        </div>
                                                        {/* Navbar */}
                                                        <nav className="flex items-center flex-1 justify-center h-12">
                                                                      <ul className="hidden md:flex gap-2 lg:gap-6 items-center h-12">
                                                                                    {NAV_LINKS.map((link) => (
                                                                                                  <li key={link.href}>
                                                                                                                <a
                                                                                                                              href={link.href}
                                                                                                                              onClick={(e) => handleNavClick(link.href, e)}
                                                                                                                              className={classNames(
                                                                                                                                            "px-3 py-1 rounded transition-colors duration-200 font-medium text-base relative",
                                                                                                                                            activeSection === link.href
                                                                                                                                                          ? "text-indigo-700 dark:text-indigo-300"
                                                                                                                                                          : "text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
                                                                                                                              )}
                                                                                                                >
                                                                                                                              {link.label}
                                                                                                                              {/* Animated underline */}
                                                                                                                              <span className={classNames(
                                                                                                                                            "block h-0.5 mt-1 rounded transition-all duration-300",
                                                                                                                                            activeSection === link.href
                                                                                                                                                          ? "w-full bg-gradient-to-r from-indigo-500 to-pink-400"
                                                                                                                                                          : "w-0"
                                                                                                                              )} />
                                                                                                                </a>
                                                                                                  </li>
                                                                                    ))}
                                                                      </ul>
                                                        </nav>
                                                        {/* Right: Dark mode toggle & Hamburger */}
                                                        <div className="flex items-center gap-2 flex-1 justify-end">
                                                                      {/* Dark mode toggle */}
                                                                      <button
                                                                                    aria-label="Toggle dark mode"
                                                                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                                                                    className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                                                      >
                                                                                    <span className="block transition-transform duration-300" style={{ transform: theme === "dark" ? "rotate(-40deg)" : "rotate(0deg)" }}>
                                                                                                  {theme === "dark" ? (
                                                                                                                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-400">
                                                                                                                              <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
                                                                                                                              <path strokeWidth="1.5" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41" />
                                                                                                                </svg>
                                                                                                  ) : (
                                                                                                                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-800 dark:text-gray-200">
                                                                                                                              <path strokeWidth="1.5" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                                                                                                                </svg>
                                                                                                  )}
                                                                                    </span>
                                                                      </button>
                                                                      {/* Hamburger menu (mobile) */}
                                                                      <button
                                                                                    className="md:hidden p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                                                                                    aria-label="Open menu"
                                                                                    onClick={() => setMenuOpen((v) => !v)}
                                                                      >
                                                                                    <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                  <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                                                                                    </svg>
                                                                      </button>
                                                        </div>
                                          </div>
                                          {/* Mobile Menu */}
                                          <div
                                                        className={`overflow-hidden md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-lg border-b border-white/20 dark:border-black/30 transition-all duration-300 ${menuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}
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