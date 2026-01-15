"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: "WSO2",
      position: "Software Engineering Intern",
      period: "6 Months",
      location: "Colombo, Sri Lanka",
      logo: "/assets/img/wso2-logo.png",
      description:
        "Contributed to enterprise-grade software solutions, working with cutting-edge technologies and collaborating with experienced engineers.",
      achievements: [
        "Developed and maintained enterprise software components",
        "Collaborated with cross-functional teams",
        "Participated in code reviews and agile ceremonies",
        "Gained hands-on experience with industry best practices",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="experience"
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8 sm:mb-12" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10">
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                    {/* Left side - Company Logo & Info */}
                    <div className="flex flex-col items-center gap-6 lg:w-1/3">
                      {/* Logo */}
                      <div className="relative group">
                        {/* Subtle glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-md group-hover:opacity-100 opacity-70 transition duration-300"></div>

                        {/* Logo container */}
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center p-6 border border-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={160}
                            height={160}
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Quick Info Cards */}
                      <div className="w-full space-y-3">
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 p-3 glass rounded-lg"
                        >
                          <div className="p-2 bg-orange-600/20 rounded-lg">
                            <Calendar className="text-orange-400" size={18} />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Duration</p>
                            <p className="text-sm text-white font-semibold">
                              {exp.period}
                            </p>
                          </div>
                        </motion.div>

                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 p-3 glass rounded-lg"
                        >
                          <div className="p-2 bg-orange-600/20 rounded-lg">
                            <MapPin className="text-orange-400" size={18} />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Location</p>
                            <p className="text-sm text-white font-semibold">
                              {exp.location}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Right side - Experience Details */}
                    <div className="flex-1 space-y-6">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-lg sm:text-xl font-bold text-white">
                            {exp.company}
                          </h3>
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="p-2 bg-primary-600/20 rounded-lg"
                          >
                            <Briefcase className="text-primary-400" size={24} />
                          </motion.div>
                        </div>
                        <p className="text-base sm:text-lg text-primary-400 font-semibold">
                          {exp.position}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-base font-semibold text-white flex items-center gap-2">
                          <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-purple-500 rounded-full" />
                          Key Achievements
                        </h4>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                delay: 0.4 + i * 0.1,
                                duration: 0.5,
                              }}
                              className="flex items-start gap-3 p-3 glass rounded-lg hover:bg-white/10 transition-all duration-300"
                            >
                              <CheckCircle2
                                className="text-primary-400 flex-shrink-0 mt-0.5"
                                size={18}
                              />
                              <p className="text-gray-300 text-xs">
                                {achievement}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
