"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, ExternalLink } from "lucide-react";

const articles = [
  {
    title: "How to Build a CRUD API with Node.js, Express.js, and TypeScript",
    description:
      "A step-by-step guide to building a CRUD API with modern technologies.",
    link: "https://medium.com/@NimashaGamage/how-to-build-a-crud-api-with-node-js-express-js-and-typescript-2afa56f7d2c4",
    category: "Backend",
  },
  {
    title: "Getting Started with Spring Boot",
    description:
      "An introduction to Spring Boot and creating a simple REST API.",
    link: "https://medium.com/@NimashaGamage/getting-started-with-spring-boot-b63ed496d213",
    category: "Backend",
  },
  {
    title: "SQL vs NoSQL: Choosing the Right Database",
    description:
      "Understand the key differences between SQL and NoSQL databases.",
    link: "https://medium.com/@NimashaGamage/sql-vs-nosql-choosing-the-right-database-for-your-application-8c353f2eeb75",
    category: "Database",
  },
  {
    title: "Beginner's Guide to Node.js, Express, and TypeScript",
    description:
      "A beginner-friendly guide to setting up Node.js with TypeScript.",
    link: "https://medium.com/@NimashaGamage/beginner-guide-to-node-js-express-and-typescript-setup-39301a5edcc2",
    category: "Backend",
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
