"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, ExternalLink } from "lucide-react";

const articles = [
  {
    title: "My Journey into Linux: From Curiosity to Practical Confidence",
    description:
      "Linux has become a foundational technology in modern software development, cloud computing, and DevOps environments. Exploring the journey from curiosity to practical confidence with Linux.",
    link: "https://medium.com/@NimashaGamage",
    category: "Linux",
  },
  {
    title: "DevSecOps for Beginners: How Security Fits into a CI/CD Pipeline",
    description:
      "When I first learned about DevOps, everything felt focused on speed — faster builds, faster deployments, faster releases. But very quickly, I realized security needs to be integrated into every step of the pipeline.",
    link: "https://medium.com/@NimashaGamage",
    category: "DevSecOps",
  },
  {
    title:
      "AWS IAM for Beginners — A Simple, Visual Guide to Securing Your AWS Account",
    description:
      "Security in AWS doesn't start with firewalls or encryption — it starts with IAM. A comprehensive guide to understanding and implementing AWS Identity and Access Management.",
    link: "https://medium.com/@NimashaGamage",
    category: "AWS",
  },
  {
    title:
      "WSO2 Ballerina Integration with Google Calendar — Creating an OAuth Client",
    description:
      "To enable Ballerina to interact with Google Calendar, we first need to activate the Google Calendar API provided by Google's developer platform. A step-by-step integration guide.",
    link: "https://medium.com/@NimashaGamage",
    category: "Integration",
  },
];

export default function Articles() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="articles"
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
            My <span className="gradient-text">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8 sm:mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {articles.map((article, index) => (
              <motion.a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Icon */}
                  <div className="p-2 sm:p-3 bg-primary-600/20 rounded-lg group-hover:bg-primary-600/30 transition-colors duration-200 flex-shrink-0">
                    <BookOpen className="text-primary-400" size={20} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary-400 transition-colors duration-200 leading-tight">
                        {article.title}
                      </h3>
                      <ExternalLink
                        className="text-gray-400 group-hover:text-primary-400 transition-colors duration-200 flex-shrink-0"
                        size={18}
                      />
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      {article.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://medium.com/@NimashaGamage"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 rounded-full text-white font-semibold transition-colors duration-200"
            >
              View All Articles
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
