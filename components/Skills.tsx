"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiPhp,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiKotlin,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import {
  Brain,
  Users,
  Clock,
  LineChart,
  Zap,
  MessageCircle,
} from "lucide-react";

// Custom Ballerina Icon Component
const BallerinaIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div className={className} style={style}>
    <Image
      src="/assets/img/ballerina-logo.png"
      alt="Ballerina"
      width={32}
      height={32}
      className="object-contain"
    />
  </div>
);

const skillsData = {
  "Programming Languages": [
    { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
    { name: "Java", level: 70, icon: FaJava, color: "#007396" },
    { name: "Ballerina", level: 68, icon: BallerinaIcon, color: "#20b6b0" },
    { name: "C", level: 75, icon: TbBrandCpp, color: "#A8B9CC" },
    { name: "JavaScript", level: 65, icon: SiJavascript, color: "#F7DF1E" },
    { name: "C++", level: 60, icon: SiCplusplus, color: "#00599C" },
    { name: "PHP", level: 70, icon: SiPhp, color: "#777BB4" },
    { name: "Python", level: 50, icon: SiPython, color: "#3776AB" },
  ],
  "Frontend Development": [
    { name: "ReactJS", level: 70, icon: SiReact, color: "#61DAFB" },
    { name: "HTML5", level: 85, icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", level: 76, icon: SiCss3, color: "#1572B6" },
    { name: "Tailwind CSS", level: 80, icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", level: 75, icon: SiBootstrap, color: "#7952B3" },
  ],
  "Backend Development": [
    { name: "NodeJS", level: 85, icon: SiNodedotjs, color: "#339933" },
    { name: "Spring Boot", level: 65, icon: SiSpringboot, color: "#6DB33F" },
  ],
  Databases: [
    { name: "MySQL", level: 90, icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", level: 80, icon: SiMongodb, color: "#47A248" },
  ],
  "Mobile Development": [
    { name: "React Native", level: 75, icon: SiReact, color: "#61DAFB" },
    { name: "Kotlin", level: 60, icon: SiKotlin, color: "#7F52FF" },
  ],
  "Soft Skills": [
    { name: "Problem Solving", level: 90, icon: Brain, color: "#0ea5e9" },
    {
      name: "Team Collaboration",
      level: 85,
      icon: Users,
      color: "#8b5cf6",
    },
    { name: "Time Management", level: 80, icon: Clock, color: "#10b981" },
    {
      name: "Analytical Thinking",
      level: 85,
      icon: LineChart,
      color: "#f59e0b",
    },
    { name: "Fast-learner", level: 90, icon: Zap, color: "#ef4444" },
    {
      name: "Communication",
      level: 80,
      icon: MessageCircle,
      color: "#ec4899",
    },
  ],
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState("Programming Languages");
  const categories = Object.keys(skillsData);

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="gradient-text">Exposure</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8 sm:mb-12" />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/50"
                    : "glass text-gray-300 hover:bg-white/10"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Skills Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {skillsData[activeCategory as keyof typeof skillsData].map(
              (skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-3 sm:p-4 rounded-2xl transition-all duration-300 border border-white/5 hover:border-white/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {/* Icon */}
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${skill.color}20`,
                        border: `1px solid ${skill.color}30`,
                      }}
                    >
                      <skill.icon
                        className="text-xl sm:text-2xl"
                        style={{ color: skill.color }}
                      />
                    </div>

                    {/* Name and Percentage */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm sm:text-base font-semibold text-white truncate">
                          {skill.name}
                        </span>
                        <span
                          className="font-bold text-sm sm:text-base ml-2"
                          style={{ color: skill.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-dark-800/50 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            delay: 0.2 + index * 0.1,
                            duration: 1,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full relative"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          }}
                        >
                          {/* Shine effect */}
                          <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              repeatDelay: 1,
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
