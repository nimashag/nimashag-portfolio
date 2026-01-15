"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      degree:
        "BSc (Hons) in Information Technology Specializing in Software Engineering",
      period: "Currently in 3rd Year, 2nd Semester",
      logo: "/assets/img/uni.png",
      color: "from-blue-500 to-cyan-500",
    },
    {
      institution: "Yasodara Devi Balika M.V. Gampaha",
      degree:
        "G.C.E Ordinary Level (O/L) & Advanced Level (A/L) - Physical Science",
      period: "2012 - 2021",
      logo: "/assets/img/schoool-N.png",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="education"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8 sm:mb-12" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                    {/* Logo */}
                    <div className="relative flex-shrink-0">
                      <div className="relative group">
                        {/* Subtle glow effect */}
                        <div
                          className={`absolute -inset-1 bg-gradient-to-r ${edu.color} opacity-20 rounded-2xl blur-md group-hover:opacity-70 transition duration-300`}
                        ></div>

                        {/* Logo container */}
                        <div
                          className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center p-4 border ${
                            index === 0
                              ? "border-blue-500/20 group-hover:border-blue-500/40"
                              : "border-purple-500/20 group-hover:border-purple-500/40"
                          } transition-all duration-300`}
                        >
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            width={96}
                            height={96}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-2">
                        {edu.institution}
                      </h3>
                      <p className="text-primary-400 text-xs sm:text-sm md:text-base mb-2">
                        {edu.degree}
                      </p>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 text-xs sm:text-sm">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    {/* Timeline Indicator */}
                    <div className="hidden lg:block">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-4 h-4 bg-primary-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Connecting Line (except for last item) */}
                {index < education.length - 1 && (
                  <div
                    className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-primary-500 to-transparent"
                    style={{ top: "100%" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
