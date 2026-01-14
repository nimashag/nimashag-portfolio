"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Spring Bing",
    description:
      "A web application to optimize sales in fashion retail, featuring product and order management, interactive catalogs, advanced search and filters, feedback systems, and report generation.",
    image: "/assets/img/spring-bing-new.png",
    tech: [
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "React Js",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/nimashag/spring_bing",
    category: "Full Stack",
  },
  {
    title: "Pregnancy Path",
    description:
      "A mobile application for expectant mothers, offering personalized journal entries, memory visualization, vaccination guides, clinic schedules, and a daily habit tracker.",
    image: "/assets/img/pregnancy-path.png",
    tech: [
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Expo",
      "React Native",
      "TypeScript",
    ],
    github: "https://github.com/vihangamallawaarachchi2001/Well-backend",
    category: "Mobile",
  },
  {
    title: "Medi Link",
    description:
      "A smart healthcare system that streamlines hospital and doctor management, doctor assignments, appointments, and staff handling.",
    image: "/assets/img/Medi-link.png",
    tech: ["Springboot", "MongoDB", "ReactJs", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/nimashag/csse-backend",
    category: "Full Stack",
  },
  {
    title: "Spectro Furniture",
    description:
      "A web application designed to streamline furniture management, featuring inventory, supplier, order, delivery, employee, customer complaint, and warehouse management.",
    image: "/assets/img/spectro.png",
    tech: ["NodeJs", "ExpressJs", "MongoDB", "ReactJs", "Bootstrap"],
    github: "https://github.com/nimashag/Spectro-2.0",
    category: "Full Stack",
  },
  {
    title: "Grocery Mart",
    description:
      "A web application for convenient online grocery shopping with an extensive product catalog, shopping cart, and feedback management system.",
    image: "/assets/img/grocery-mart.png",
    tech: ["Java", "Servelets", "MySQL", "JSP", "HTML", "CSS"],
    github: "https://github.com/nimashag/grocery-mart",
    category: "Full Stack",
  },
  {
    title: "Simple Meditation",
    description:
      "A meditation app designed to make meditation accessible to everyone with previews of various meditation sessions and audio playback controls.",
    image: "/assets/img/meditation1.png",
    tech: ["Expo", "React Native", "TypeScript", "Native Wind"],
    github: "https://github.com/nimashag/spring_bing",
    category: "Mobile",
  },
  {
    title: "Avenga Hotels",
    description:
      "A hotel reservation system for special events, offering features to manage users, display event venues, make reservations, and process payments.",
    image: "/assets/img/avenga1.png",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/nimashag/hotel-avenga",
    category: "Web",
  },
  {
    title: "Turbo Dash",
    description:
      "An action-packed 2D car racing mobile game offering dynamic gameplay, intuitive touch controls, and score tracking.",
    image: "/assets/img/car game.png",
    tech: ["Kotlin", "Android"],
    github: "https://github.com/nimashag/car-game-android-kotlin",
    category: "Mobile",
  },
  {
    title: "Notes App",
    description:
      "A mobile application designed to simplify note-taking and information management with Kotlin and SQLite.",
    image: "/assets/img/notes-app.png",
    tech: ["Kotlin", "SQLite", "Android"],
    github: "https://github.com/nimashag/notes-app-android-kotlin",
    category: "Mobile",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("All");
  const categories = ["All", "Full Stack", "Mobile", "Web"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-12" />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/50"
                    : "glass text-gray-300 hover:bg-white/10"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-dark-800">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-1 bg-gradient-to-r from-primary-600 to-purple-600 origin-left"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
