"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, FileDown, Code2 } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiMedium,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import FloatingCube from "./3D/FloatingCube";
import Image from "next/image";

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/nimashag", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nimashagamage",
      label: "LinkedIn",
    },
    {
      icon: SiMedium,
      href: "https://medium.com/@nimashagamage",
      label: "Medium",
    },
    { icon: Mail, href: "mailto:nimasha.piyumini@gmail.com", label: "Email" },
  ];

  // Main technologies for floating display
  const technologies = [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "Java", Icon: FaJava, color: "#007396" },
  ];

  // Tech stack for orbiting icons
  const techStack = [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  ];

  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "6", label: "Months Internship" },
    { value: "15+", label: "Technologies" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <FloatingCube />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent z-10" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)",
          }}
        />
      </div>

      {/* Floating Tech Icons - Desktop Only */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        {technologies.map((tech, index) => {
          // Create a balanced spread pattern
          const positions = [
            { top: "12%", left: "8%" },
            { top: "22%", right: "10%" },
            { top: "50%", left: "5%" },
            { top: "65%", right: "15%" },
            { top: "38%", left: "10%" },
            { top: "82%", right: "8%" },
            { top: "28%", left: "3%" },
            { top: "72%", right: "5%" },
          ];

          return (
            <motion.div
              key={index}
              className="absolute"
              style={positions[index]}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 0.4,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="relative group pointer-events-auto"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ backgroundColor: tech.color }}
                />

                {/* Icon container */}
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-3 group-hover:border-primary-400/50 transition-all duration-300">
                  <tech.Icon
                    className="text-2xl transition-all duration-300 group-hover:scale-125"
                    style={{ color: tech.color }}
                  />
                </div>

                {/* Tech name on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-gray-300 bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {tech.name}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Tech Icons - Mobile View */}
      <div className="absolute inset-0 z-10 pointer-events-none lg:hidden">
        {technologies.slice(0, 6).map((tech, index) => {
          // Mobile-optimized positions - fewer icons, better spacing
          const mobilePositions = [
            { top: "15%", left: "5%" },
            { top: "20%", right: "5%" },
            { top: "45%", left: "3%" },
            { top: "50%", right: "3%" },
            { top: "75%", left: "5%" },
            { top: "80%", right: "5%" },
          ];

          return (
            <motion.div
              key={`mobile-${index}`}
              className="absolute"
              style={mobilePositions[index]}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 0.3,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 3 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="relative pointer-events-none"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg blur-lg opacity-30"
                  style={{ backgroundColor: tech.color }}
                />

                {/* Icon container */}
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-2">
                  <tech.Icon
                    className="text-lg"
                    style={{ color: tech.color }}
                  />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:hidden flex justify-center mb-12"
        >
          <div className="relative w-40 h-40 sm:w-48 sm:h-48">
            {/* Animated Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 p-[3px]"
            >
              <div className="w-full h-full rounded-full bg-black" />
            </motion.div>

            {/* Profile Image */}
            <div className="absolute inset-[3px] rounded-full overflow-hidden border-4 border-primary-500/40 shadow-2xl shadow-primary-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-purple-600/20" />
              <Image
                src="/assets/img/profile2.png"
                alt="Nimasha Gamage"
                fill
                className="object-cover scale-110"
                sizes="192px"
                priority
              />
              {/* Shine effect */}
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />
            </div>

            {/* Glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-purple-500/20 to-primary-500/30 rounded-full blur-2xl -z-10"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              <div>Hello!</div>
              <div>
                I&apos;m{" "}
                <span className="gradient-text inline-block">Nimasha</span>
              </div>
            </motion.h1>

            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 min-h-[60px] sm:min-h-[80px] flex items-center justify-center lg:justify-start">
              <Code2
                className="text-primary-400 mr-2 sm:mr-3 flex-shrink-0"
                size={24}
              />
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Software Engineer",
                  2000,
                  "Mobile Developer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xs sm:text-sm md:text-sm text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
            >
              Passionate Software Engineering student at SLIIT, specializing in
              building scalable web and mobile applications with modern
              technologies. Turning ideas into elegant solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-2 sm:p-3 md:p-4 rounded-xl text-center"
                >
                  <div className="text-sm sm:text-lg md:text-xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 px-2 sm:px-0"
            >
              <motion.a
                href="/assets/cv/CV - Nimasha Gamage - Software Engineering Intern.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(14, 165, 233, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 rounded-xl text-white text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-primary-600/30"
              >
                <FileDown size={18} className="flex-shrink-0" />
                <span>Download CV</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(14, 165, 233, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 rounded-xl text-white text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-primary-600/30"
              >
                <span>Get In Touch</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 glass hover:bg-primary-600/20 rounded-xl transition-all duration-200 border border-transparent hover:border-primary-500/50"
                  aria-label={social.label}
                >
                  <social.icon
                    size={22}
                    className="text-gray-300 group-hover:text-primary-400"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Decorative Elements */}
            <div className="relative w-96 h-96">
              {/* Outer Rotating Ring with Gradient */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, rgba(14, 165, 233, 0.3) 25%, transparent 50%, rgba(139, 92, 246, 0.3) 75%, transparent 100%)",
                }}
              />

              {/* Inner Ring */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-primary-500/20"
              />

              {/* Middle Pulsing Circle */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-8 rounded-full border border-primary-400/30"
              />

              {/* Orbital Dots */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-primary-400 to-purple-400"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    rotate: 360,
                    x: -6,
                    y: -6,
                  }}
                  transition={{
                    rotate: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.3,
                    },
                  }}
                >
                  <motion.div
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180) * 180,
                      y: Math.sin((angle * Math.PI) / 180) * 180,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.3,
                    }}
                    className="w-full h-full rounded-full shadow-lg shadow-primary-500/50"
                  />
                </motion.div>
              ))}

              {/* Subtle Grid Lines */}
              <div className="absolute inset-12 rounded-full opacity-20">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-400 to-transparent" />
              </div>

              {/* Ambient Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-16 bg-gradient-to-br from-primary-500/20 via-purple-500/10 to-primary-500/20 rounded-full blur-xl"
              />

              {/* Profile Image Container with Modern Border */}
              <div className="absolute inset-16 flex items-center justify-center">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(14, 165, 233, 0.3)",
                      "0 0 40px rgba(14, 165, 233, 0.5)",
                      "0 0 20px rgba(14, 165, 233, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-500/40 bg-gradient-to-br from-primary-900/60 via-purple-900/60 to-primary-900/60 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-700/15 via-purple-700/15 to-primary-700/15" />
                  <Image
                    src="/assets/img/profile2.png"
                    alt="Nimasha Gamage"
                    fill
                    className="object-cover scale-110"
                    sizes="256px"
                    priority
                  />
                  {/* Shine effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                  />
                </motion.div>
              </div>

              {/* Tech Stack Orbits */}
              {techStack.map((tech, index) => {
                const angle = (index / 4) * Math.PI * 2;
                const radius = 180;
                return (
                  <motion.div
                    key={index}
                    className="absolute w-14 h-14 glass rounded-lg flex items-center justify-center border border-primary-500/30 backdrop-blur-md group"
                    style={{
                      left: `calc(50% + ${
                        Math.cos(angle) * radius
                      }px - 1.75rem)`,
                      top: `calc(50% + ${
                        Math.sin(angle) * radius
                      }px - 1.75rem)`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2 + index * 0.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      borderColor: tech.color,
                    }}
                  >
                    <tech.Icon
                      className="text-2xl group-hover:scale-110 transition-transform"
                      style={{ color: tech.color }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-gray-400 text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
