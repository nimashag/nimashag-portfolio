"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const skillsData = {
  "Programming Languages": [
    { name: "TypeScript", level: 85 },
    { name: "Java", level: 70 },
    { name: "C", level: 75 },
    { name: "JavaScript", level: 65 },
    { name: "C++", level: 60 },
    { name: "PHP", level: 70 },
    { name: "Python", level: 50 },
  ],
  "Frontend Development": [
    { name: "ReactJS", level: 70 },
    { name: "HTML5", level: 85 },
    { name: "CSS3", level: 76 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Bootstrap", level: 75 },
  ],
  "Backend Development": [
    { name: "NodeJS", level: 85 },
    { name: "Spring Boot", level: 65 },
  ],
  Databases: [
    { name: "MySQL", level: 90 },
    { name: "MongoDB", level: 80 },
  ],
  "Mobile Development": [
    { name: "React Native", level: 75 },
    { name: "Kotlin", level: 60 },
  ],
  "Soft Skills": [
    { name: "Problem Solving", level: 90 },
    { name: "Team Collaboration", level: 85 },
    { name: "Time Management", level: 80 },
    { name: "Analytical Thinking", level: 85 },
    { name: "Fast-learner", level: 90 },
    { name: "Communication", level: 80 },
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="gradient-text">Exposure</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-12" />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
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
            className="grid md:grid-cols-2 gap-6"
          >
            {skillsData[activeCategory as keyof typeof skillsData].map(
              (skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-semibold text-white">
                      {skill.name}
                    </span>
                    <span className="text-primary-400 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-dark-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        delay: 0.2 + index * 0.1,
                        duration: 1,
                        ease: "easeOut",
                      }}
                      className="h-full bg-gradient-to-r from-primary-600 to-purple-600 rounded-full relative"
                    >
                      <motion.div
                        animate={{ x: [0, 100, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
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
