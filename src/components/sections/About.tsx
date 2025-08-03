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

const About: React.FC = () => {
              return (
                            <section
                                          id="about"
                                          className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-20 md:py-32 text-center overflow-hidden"
                            >
                                          {/* Animated Space Gradient BG */}
                                          <div className="absolute inset-0 -z-20 animate-bg-gradient" />
                                          {/* Stars Canvas */}
                                          <StarsBackground />
                                          <div className="max-w-2xl mx-auto animate-fade-in">
                                                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg transition-all duration-500">
                                                                      Hi, I&apos;m <span className="bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent">{personalInfo.name}</span>
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
                                                                                                                              ? "px-6 py-2 rounded-full font-semibold bg-indigo-700 text-white shadow-lg hover:bg-indigo-800 hover:scale-105 active:scale-95 transition-all duration-200"
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
                                          {/* Scroll Down Animation */}
                                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center select-none pointer-events-none pb-2">
                                                        <div className="animate-bounce-slow">
                                                                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                                                    <path d="M24 10v28M24 38l-9-9M24 38l9-9" stroke="#b6e3ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                                                      </svg>
                                                        </div>
                                          </div>
                                          <style jsx global>{`
        .animate-bg-gradient {
          background: linear-gradient(120deg, #0a1026 0%, #1a1333 50%, #2d1a4d 100%);
          background-size: 200% 200%;
          animation: bg-gradient-move 18s ease-in-out infinite;
        }
        @keyframes bg-gradient-move {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fade-in {
          animation: fadeInUp 1.2s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
      `}</style>
                            </section>
              );
};

// Space stars background with shooting stars
const StarsBackground: React.FC = () => {
              const canvasRef = React.useRef<HTMLCanvasElement>(null);
              // Patlama animasyonları için state
              const [explosions, setExplosions] = React.useState<{ x: number, y: number, t: number }[]>([]);

              React.useEffect(() => {
                            const canvas = canvasRef.current;
                            if (!canvas) return;
                            const ctx = canvas.getContext("2d");
                            if (!ctx) return;
                            let width = window.innerWidth;
                            let height = window.innerHeight;
                            canvas.width = width;
                            canvas.height = height;

                            // Star and shooting star data
                            const STAR_COUNT = 120;
                            const SHOOTING_STAR_COUNT = 1;
                            type ShootingStar = {
                                          x: number;
                                          y: number;
                                          len: number;
                                          speed: number;
                                          angle: number;
                                          active: boolean;
                                          trail: number;
                                          timer: number;
                            };
                            type Star = {
                                          x: number;
                                          y: number;
                                          r: number;
                                          alpha: number;
                                          twinkle: number;
                                          twinkleDir: number;
                            };
                            let stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
                                          x: Math.random() * width,
                                          y: Math.random() * height,
                                          r: Math.random() * 1.1 + 0.3,
                                          alpha: Math.random() * 0.5 + 0.5,
                                          twinkle: Math.random() * 0.008 + 0.004, // daha yavaş parıldama
                                          twinkleDir: Math.random() > 0.5 ? 1 : -1,
                            }));
                            const shootingStars: ShootingStar[] = Array.from({ length: SHOOTING_STAR_COUNT }, () => ({
                                          x: Math.random() * width * 0.7 + width * 0.15,
                                          y: Math.random() * height * 0.3 + height * 0.05,
                                          len: Math.random() * 120 + 120, // kuyruk uzunluğu artırıldı
                                          speed: Math.random() * 1.1 + 0.5, // daha yavaş hareket
                                          angle: (Math.random() * 30 - 15) * (Math.PI / 180), // -15° to +15°
                                          active: false,
                                          trail: 0,
                                          timer: Math.random() * 600 + 500, // daha uzun bekleme
                            }));

                            function drawStars() {
                                          if (!ctx) return;
                                          for (const star of stars) {
                                                        ctx.save();
                                                        ctx.globalAlpha = star.alpha;
                                                        ctx.beginPath();
                                                        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
                                                        ctx.fillStyle = "#fff";
                                                        ctx.shadowColor = "#fff";
                                                        ctx.shadowBlur = 8;
                                                        ctx.fill();
                                                        ctx.restore();
                                                        // Twinkle (daha belirgin ve yumuşak)
                                                        star.alpha += star.twinkle * star.twinkleDir;
                                                        if (star.alpha > 1) {
                                                                      star.alpha = 1;
                                                                      star.twinkleDir = -1;
                                                        }
                                                        if (star.alpha < 0.15) {
                                                                      star.alpha = 0.15;
                                                                      star.twinkleDir = 1;
                                                        }
                                          }
                            }

                            function drawShootingStars() {
                                          if (!ctx) return;
                                          for (const s of shootingStars) {
                                                        if (!s.active) {
                                                                      s.timer--;
                                                                      if (s.timer <= 0) {
                                                                                    s.x = Math.random() * width * 0.7 + width * 0.15;
                                                                                    s.y = Math.random() * height * 0.3 + height * 0.05;
                                                                                    s.len = Math.random() * 120 + 120;
                                                                                    s.speed = Math.random() * 1.1 + 0.5;
                                                                                    s.angle = (Math.random() * 30 - 15) * (Math.PI / 180);
                                                                                    s.active = true;
                                                                                    s.trail = 0;
                                                                                    s.timer = Math.random() * 600 + 500;
                                                                      }
                                                        } else {
                                                                      // Tail effect
                                                                      for (let i = 0; i < s.len; i += 2) { // daha fazla adım, daha yumuşak
                                                                                    const tailX = s.x - Math.sin(s.angle) * i;
                                                                                    const tailY = s.y + Math.cos(s.angle) * i;
                                                                                    ctx.save();
                                                                                    ctx.globalAlpha = Math.max(0, 0.25 - i / (s.len * 1.2)); // daha soluk
                                                                                    ctx.beginPath();
                                                                                    ctx.arc(tailX, tailY, Math.max(1, 2 - i / s.len), 0, 2 * Math.PI);
                                                                                    ctx.fillStyle = i < 10 ? '#fff' : 'rgba(180,190,255,0.5)';
                                                                                    ctx.shadowColor = '#fff';
                                                                                    ctx.shadowBlur = i < 10 ? 8 : 1;
                                                                                    ctx.fill();
                                                                                    ctx.restore();
                                                                      }
                                                                      // Move star
                                                                      s.x += Math.sin(s.angle) * s.speed;
                                                                      s.y -= Math.cos(s.angle) * s.speed;
                                                                      s.trail += s.speed;
                                                                      if (
                                                                                    s.trail > s.len * 1.2 ||
                                                                                    s.x < -100 || s.x > width + 100 ||
                                                                                    s.y < -100 || s.y > height + 100
                                                                      ) {
                                                                                    s.active = false;
                                                                                    s.trail = 0;
                                                                      }
                                                        }
                                          }
                            }

                            function animate() {
                                          if (!ctx) return;
                                          ctx.clearRect(0, 0, width, height);
                                          drawStars();
                                          drawShootingStars();
                                          requestAnimationFrame(animate);
                            }
                            animate();

                            function handleResize() {
                                          width = window.innerWidth;
                                          height = window.innerHeight;
                                          if (!canvas) return;
                                          canvas.width = width;
                                          canvas.height = height;
                                          // Reposition stars
                                          stars = Array.from({ length: STAR_COUNT }, () => ({
                                                        x: Math.random() * width,
                                                        y: Math.random() * height,
                                                        r: Math.random() * 1.1 + 0.3,
                                                        alpha: Math.random() * 0.5 + 0.5,
                                                        twinkle: Math.random() * 0.008 + 0.004, // daha yavaş parıldama
                                                        twinkleDir: Math.random() > 0.5 ? 1 : -1,
                                          }));
                            }
                            window.addEventListener("resize", handleResize);
                            return () => {
                                          window.removeEventListener("resize", handleResize);
                            };
              }, []);

              return (
                            <canvas
                                          ref={canvasRef}
                                          className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
                                          style={{ display: "block" }}
                                          aria-hidden="true"
                            />
              );
};

export default About; 