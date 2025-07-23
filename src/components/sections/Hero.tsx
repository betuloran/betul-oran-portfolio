"use client";
import React from "react";
import { personalInfo } from "../../lib/data";
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
                            icon: <FaGithub size={22} />, link: personalInfo.github, label: "GitHub"
              },
              {
                            icon: <FaLinkedin size={22} />, link: personalInfo.linkedin, label: "LinkedIn"
              },
              {
                            icon: <FaEnvelope size={22} />, link: `mailto:${personalInfo.email}`, label: "Mail"
              },
];

const Hero: React.FC = () => {
              return (
                            <section
                                          id="home"
                                          className="relative flex flex-col items-center justify-center min-h-[80vh] w-full px-4 py-20 md:py-32 text-center overflow-hidden"
                            >
                                          {/* Animated Gradient BG */}
                                          <div className="absolute inset-0 -z-10 animate-gradient-move bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900 to-pink-900 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950" />
                                          {/* Glow shapes */}
                                          <div className="absolute top-10 left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl animate-float" />
                                          <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-float2" />
                                          <div className="max-w-2xl mx-auto animate-fade-in">
                                                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg transition-all duration-500">
                                                                      Hi, I&apos;m <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{personalInfo.name}</span>
                                                        </h1>
                                                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-200 mb-4 transition-all duration-500 drop-shadow">
                                                                      {personalInfo.title}
                                                        </h2>
                                                        <p className="text-base md:text-lg text-gray-200 mb-8 transition-all duration-500 drop-shadow">
                                                                      {personalInfo.about}
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
                                                                                                                              ? "px-6 py-2 rounded-full font-semibold bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all duration-200"
                                                                                                                              : "px-6 py-2 rounded-full font-semibold border border-indigo-400 text-indigo-200 bg-white/10 hover:bg-indigo-900/30 hover:scale-105 active:scale-95 transition-all duration-200"
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
                                                                                                  className="text-gray-200 hover:text-indigo-400 transition-colors duration-200 hover:scale-125 focus:scale-110"
                                                                                    >
                                                                                                  {social.icon}
                                                                                    </a>
                                                                      ))}
                                                        </div>
                                          </div>
                                          <style jsx global>{`
                                                        .animate-gradient-move {
                                                                      background: linear-gradient(120deg, #312e81 0%, #6d28d9 50%, #db2777 100%);
                                                                      background-size: 200% 200%;
                                                                      animation: gradient-move 8s ease-in-out infinite;
                                                        }
                                                        @keyframes gradient-move {
                                                                      0%, 100% { background-position: 0% 50%; }
                                                                      50% { background-position: 100% 50%; }
                                                        }
                                                        .animate-float {
                                                                      animation: float 6s ease-in-out infinite;
                                                        }
                                                        .animate-float2 {
                                                                      animation: float2 7s ease-in-out infinite;
                                                        }
                                                        @keyframes float {
                                                                      0%, 100% { transform: translateY(0px); }
                                                                      50% { transform: translateY(-30px); }
                                                        }
                                                        @keyframes float2 {
                                                                      0%, 100% { transform: translateY(0px); }
                                                                      50% { transform: translateY(30px); }
                                                        }
                                                        .animate-fade-in {
                                                                      animation: fadeInUp 1.2s cubic-bezier(.39,.575,.565,1) both;
                                                        }
                                                        @keyframes fadeInUp {
                                                                      0% { opacity: 0; transform: translateY(40px); }
                                                                      100% { opacity: 1; transform: translateY(0); }
                                                        }
                                          `}</style>
                            </section>
              );
};

export default Hero; 