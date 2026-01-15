"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Heart, Target } from "lucide-react";
import Image from "next/image";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code,
      title: "Innovative Solutions",
      description:
        "Crafting innovative software solutions with cutting-edge technologies",
    },
    {
      icon: Heart,
      title: "Passionate Developer",
      description:
        "Deeply passionate about problem-solving and creating impactful applications",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "Focused on becoming a versatile developer making positive societal impact",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8 sm:mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative px-4 sm:px-0"
            >
              <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                {/* Animated Background Elements */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-primary-500/10 blur-2xl"
                />

                {/* Main Card */}
                <div className="relative glass-card rounded-3xl p-4 sm:p-6 md:p-8 border-2 border-primary-500/20">
                  {/* Profile Image Container */}
                  <div className="relative mx-auto mb-4 sm:mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto"
                    >
                      {/* Animated Ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 p-[2px]"
                      >
                        <div className="w-full h-full rounded-full bg-black" />
                      </motion.div>

                      {/* Image */}
                      <div className="absolute inset-[2px] rounded-full overflow-hidden border-4 border-primary-500/30">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-purple-600/20" />
                        <Image
                          src="/assets/img/profile2.png"
                          alt="Nimasha Gamage"
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                          sizes="192px"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Name and Title */}
                  <div className="text-center mb-6">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                      Nimasha Gamage
                    </h3>
                    <p className="text-sm sm:text-base text-primary-400">
                      Software Engineering Student
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="glass-card p-2 sm:p-3 md:p-4 rounded-xl text-center border border-primary-500/10 hover:border-primary-500/30 transition-all"
                    >
                      <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mb-1">
                        10+
                      </div>
                      <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 leading-tight">
                        Projects
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -5 }}
                      className="glass-card p-2 sm:p-3 md:p-4 rounded-xl text-center border border-purple-500/10 hover:border-purple-500/30 transition-all"
                    >
                      <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mb-1">
                        6
                      </div>
                      <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 leading-tight">
                        Months Intern
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -5 }}
                      className="glass-card p-2 sm:p-3 md:p-4 rounded-xl text-center border border-primary-500/10 hover:border-primary-500/30 transition-all"
                    >
                      <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mb-1">
                        15+
                      </div>
                      <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 leading-tight">
                        Technologies
                      </p>
                    </motion.div>
                  </div>

                  {/* Decorative Corners */}
                  <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-primary-500/40 rounded-tl-xl" />
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary-500/40 rounded-tr-xl" />
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-purple-500/40 rounded-bl-xl" />
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-purple-500/40 rounded-br-xl" />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                I&apos;m{" "}
                <span className="text-primary-400 font-semibold">
                  Nimasha Gamage
                </span>
                , an undergraduate at SLIIT, pursuing a BSc (Hons) in
                Information Technology with a specialization in Software
                Engineering. I am deeply passionate about crafting innovative
                software solutions and continuously advancing my skills in
                coding, problem-solving, and project management.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Currently, I am seeking an internship where I can contribute to
                meaningful projects, collaborate with talented professionals,
                and gain hands-on experience in the tech industry. I am eager to
                refine my technical expertise while immersing myself in dynamic,
                team-oriented environments that foster growth and innovation.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                My long-term goal is to become a versatile developer who creates
                solutions that not only drive technological innovation but also
                make a positive impact on society. With a mindset grounded in
                dedication, curiosity, and lifelong learning, I aspire to leave
                a lasting legacy in the ever-evolving world of technology.
              </p>

              {/* Features */}
              <div className="grid gap-4 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 glass-card p-4 rounded-lg transition-colors duration-200"
                  >
                    <div className="p-2 bg-primary-600/20 rounded-lg">
                      <feature.icon className="text-primary-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-xs">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
