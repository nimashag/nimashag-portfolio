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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8 sm:mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-sm sm:max-w-md mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 opacity-20 blur-3xl"
                />
                <div className="relative glass-card rounded-2xl p-4 sm:p-6 md:p-8 h-full flex flex-col items-center justify-center">
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-primary-500/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-purple-600/30" />
                    <Image
                      src="/assets/img/profile2.png"
                      alt="Nimasha Gamage"
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-2 sm:mb-4">
                      3+
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300">
                      Years of Experience
                    </p>
                    <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-8">
                      <div className="glass-card p-2 sm:p-3 md:p-4 rounded-lg">
                        <div className="text-2xl sm:text-3xl font-bold text-primary-400">
                          10+
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400">
                          Projects
                        </p>
                      </div>
                      <div className="glass-card p-2 sm:p-3 md:p-4 rounded-lg">
                        <div className="text-2xl sm:text-3xl font-bold text-primary-400">
                          8+
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400">
                          Technologies
                        </p>
                      </div>
                    </div>
                  </div>
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
                I'm{" "}
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
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
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
