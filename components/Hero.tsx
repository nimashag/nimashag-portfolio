"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  Code2,
  Sparkles,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiSpringboot,
  SiMysql,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiKotlin,
  SiPhp,
  SiC,
  SiCplusplus,
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
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Technologies" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <FloatingCube />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/50 to-dark-900 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent z-10" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-10 opacity-20">
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

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-10">
        {technologies.map((tech, index) => {
          const positions = [
            { top: "15%", left: "10%" },
            { top: "25%", right: "15%" },
            { top: "60%", left: "8%" },
            { top: "70%", right: "12%" },
            { top: "40%", left: "15%" },
            { top: "45%", right: "18%" },
            { top: "35%", left: "5%" },
            { top: "55%", right: "8%" },
          ];

          return (
            <motion.div
              key={index}
              className="absolute hidden lg:block"
              style={positions[index]}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              <motion.div
                className="glass-card p-4 rounded-xl backdrop-blur-md border border-primary-500/30 hover:border-primary-500/60 transition-all group cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <tech.Icon
                  className="text-3xl group-hover:scale-110 transition-transform"
                  style={{ color: tech.color }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="text-primary-400" size={16} />
              <span className="text-sm text-gray-300">
                Available for Internship
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              <div>Hello!</div>
              <div>
                I'm <span className="gradient-text inline-block">Nimasha</span>
              </div>
            </motion.h1>

            <div className="text-xl md:text-3xl text-gray-300 mb-6 h-20 flex items-center justify-center lg:justify-start">
              <Code2 className="text-primary-400 mr-3" size={28} />
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
              className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
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
              className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl text-center"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="/assets/cv/CV - Nimasha Gamage - Software Engineering Intern.pdf"
                download
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(14, 165, 233, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 rounded-xl text-white font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-primary-600/30"
              >
                <FileDown size={20} />
                <span>Download CV</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(14, 165, 233, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 rounded-xl text-white font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-primary-600/30"
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
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-primary-500/20 border-dashed"
              />

              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border-2 border-purple-500/20 border-dashed"
              />

              {/* Center Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-16 rounded-full bg-gradient-to-r from-primary-500/20 to-purple-500/20 blur-3xl"
              />

              {/* Profile Image or Icon */}
              <div className="absolute inset-20 rounded-full glass flex items-center justify-center overflow-hidden border-2 border-primary-500/30">
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/img/profile2.png"
                    alt="Nimasha Gamage"
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>
              </div>

              {/* Tech Stack Orbits */}
              {techStack.map((tech, index) => {
                const angle = (index / 4) * Math.PI * 2;
                const radius = 180;
                return (
                  <motion.div
                    key={index}
                    className="absolute w-20 h-20 glass rounded-xl flex items-center justify-center border-2 border-primary-500/30 backdrop-blur-md group"
                    style={{
                      left: `calc(50% + ${
                        Math.cos(angle) * radius
                      }px - 2.5rem)`,
                      top: `calc(50% + ${Math.sin(angle) * radius}px - 2.5rem)`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 2 + index * 0.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                      borderColor: tech.color,
                    }}
                  >
                    <tech.Icon
                      className="text-4xl group-hover:scale-110 transition-transform"
                      style={{ color: tech.color }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
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
