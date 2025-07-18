import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const BUTTONS = [
              {
                            label: "View My Work",
                            href: "#projects",
                            primary: true,
              },
              {
                            label: "Download CV",
                            href: "/BetulOranCV.pdf",
                            primary: false,
                            download: true,
              },
];

const SOCIALS = [
              {
                            icon: <FaGithub size={22} />, link: "https://github.com/betuloran", label: "GitHub"
              },
              {
                            icon: <FaLinkedin size={22} />, link: "https://www.linkedin.com/in/betüloran/", label: "LinkedIn"
              },
              {
                            icon: <FaEnvelope size={22} />, link: "mailto:betul.oran2@gmail.com", label: "Mail"
              },
];

const Hero: React.FC = () => {
              return (
                            <section
                                          id="home"
                                          className="relative flex flex-col items-center justify-center min-h-[80vh] w-full px-4 py-20 md:py-32 text-center overflow-hidden"
                            >
                                          {/* Gradient BG */}
                                          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-200/60 via-purple-200/40 to-pink-200/60 dark:from-indigo-900/60 dark:via-purple-900/40 dark:to-pink-900/60" />
                                          <div className="max-w-2xl mx-auto animate-fade-in">
                                                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 transition-all duration-500">
                                                                      Hi, I&apos;m Betül Oran
                                                        </h1>
                                                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mb-4 transition-all duration-500">
                                                                      Frontend Developer & Computer Engineer
                                                        </h2>
                                                        <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-8 transition-all duration-500">
                                                                      I create user-friendly, scalable interfaces and enjoy solving complex problems with clean code.
                                                        </p>
                                                        {/* CTA Buttons */}
                                                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                                                      {BUTTONS.map((btn) => (
                                                                                    <a
                                                                                                  key={btn.label}
                                                                                                  href={btn.href}
                                                                                                  download={btn.download}
                                                                                                  className={
                                                                                                                btn.primary
                                                                                                                              ? "px-6 py-2 rounded-full font-semibold bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors duration-200"
                                                                                                                              : "px-6 py-2 rounded-full font-semibold border border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-white/80 dark:bg-black/40 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors duration-200"
                                                                                                  }
                                                                                    >
                                                                                                  {btn.label}
                                                                                    </a>
                                                                      ))}
                                                        </div>
                                                        {/* Social Icons */}
                                                        <div className="flex flex-row gap-5 justify-center items-center">
                                                                      {SOCIALS.map((social) => (
                                                                                    <a
                                                                                                  key={social.label}
                                                                                                  href={social.link}
                                                                                                  target="_blank"
                                                                                                  rel="noopener noreferrer"
                                                                                                  aria-label={social.label}
                                                                                                  className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors duration-200"
                                                                                    >
                                                                                                  {social.icon}
                                                                                    </a>
                                                                      ))}
                                                        </div>
                                          </div>
                            </section>
              );
};

export default Hero; 