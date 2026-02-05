"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Hungerjet",
    description:
      "Hungerjet is a microservices-based food ordering and delivery platform supporting restaurant registration, menu and order management, user browsing and ordering, and location-based delivery. Delivery drivers manage profiles, select areas, and fulfill matching orders efficiently.",
    image: "/assets/img/Group3.png",
    tech: [
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "React Js",
      "TypeScript",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/nimashag/hungerjet-microservice-docker-kubernetes",
    category: "Full Stack",
  },
  {
    title: "EVynk",
    description:
      "EVynk is an EV charging station management and booking system offering role-based access, station and slot scheduling, reservation control, real-time validation. It includes a web platform and a native Android app with QR verification, booking management, charging history, and station discovery.",
    image: "/assets/img/evynk.png",
    tech: [
      "C#",
      "ExpressJs",
      "MongoDB",
      "React Js",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/nimashag/EVynk",
    category: "Full Stack",
  },
  {
    title: "Spring Bing",
    description:
      "A web application to optimize sales in fashion retail, featuring product and order management, interactive catalogs, advanced search and filters, feedback systems,and report generation. It also provides insights through trending items analysis and demand prediction to enhance business performance",
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
      "A mobile application for expectant mothers, offering personalized journal entries, memory visualization, vaccination guides, clinic schedules, and a daily habit tracker. Pregnancy Path empowers women by keeping them informed, organized, and connected throughout their pregnancy journey.",
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
      "A smart healthcare system that streamlines hospital and doctor management, doctor assignments, appointments, and staff handling. MediLink also facilitates patient information management, appointment scheduling, integrates email services to improve healthcare efficiency and patient care.",
    image: "/assets/img/Medi-link.png",
    tech: ["Springboot", "MongoDB", "ReactJs", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/nimashag/csse-backend",
    category: "Full Stack",
  },
  {
    title: "Spectro Furniture",
    description:
      "A web application designed to streamline furniture management, featuring inventory, supplier, order, delivery, employee, customer complaint, and warehouse management. Spectro also includes user management and report generation to boost efficiency and enhance overall business performance.",
    image: "/assets/img/spectro.png",
    tech: ["NodeJs", "ExpressJs", "MongoDB", "ReactJs", "Bootstrap"],
    github: "https://github.com/nimashag/Spectro-2.0",
    category: "Full Stack",
  },
  {
    title: "Grocery Mart",
    description:
      "Grocery Mart is a web application for convenient online grocery shopping.It features an extensive product catalog, a shopping cart for easy checkout, and a feedback management system, providing users with a seamless and efficient shopping experience.",
    image: "/assets/img/grocery-mart.png",
    tech: ["Java", "Servelets", "MySQL", "JSP", "HTML", "CSS"],
    github: "https://github.com/nimashag/grocery-mart",
    category: "Full Stack",
  },
  {
    title: "Simple Meditation",
    description:
      "Simple Meditation App is designed to make meditation accessible to everyone. It features previews of various meditation sessions, audio playback controls, and a countdown timer, helping users focus and relax while guiding them through their meditation practice.",
    image: "/assets/img/meditation1.png",
    tech: ["Expo", "React Native", "TypeScript", "Native Wind"],
    github: "https://github.com/nimashag/spring_bing",
    category: "Mobile",
  },
  {
    title: "Avenga Hotels",
    description:
      "A hotel reservation system designed for special events, offering features to manage users, display event venues, make reservations, process payments, and collect feedback. Hotel Avenga streamlines the event booking experience, ensuring seamless service for guests and organizers.",
    image: "/assets/img/avenga2.png",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/nimashag/hotel-avenga",
    category: "Web",
  },
  {
    title: "Turbo Dash",
    description:
      "TurboDash is an action-packed 2D car racing mobile game offering dynamic gameplay, intuitive touch controls, and score tracking. With high replayability, it challenges players to improve their racing skills, offering endless excitement and competitive racing experiences.",
    image: "/assets/img/car game.png",
    tech: ["Kotlin", "Android"],
    github: "https://github.com/nimashag/car-game-android-kotlin",
    category: "Mobile",
  },
  {
    title: "Notes App",
    description:
      "Notes App is a mobile application designed to simplify note-taking and information management. Built with Kotlin and SQLite, it offers a user-friendly interface for organizing, storing, and retrieving notes, enhancing productivity and keeping information easily accessible on Android devices.",
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

  return (
    <section
      id="projects"
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8 sm:mb-12" />

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-3xl overflow-hidden group cursor-pointer relative border-2 border-primary-500/40 shadow-[0_8px_40px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-52 sm:h-56 md:h-60 overflow-hidden bg-dark-800">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-5 sm:p-6">
                  {/* Title with GitHub Icon */}
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-white text-center group-hover:text-primary-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-dark-900/90 backdrop-blur-md flex items-center justify-center border-2 border-primary-500/50 hover:border-primary-400 hover:bg-primary-600/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-200 shadow-xl flex-shrink-0"
                    >
                      <Github size={18} className="text-white" />
                    </motion.a>
                  </div>
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed text-center">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-primary-600/20 text-primary-400 text-xs font-medium rounded-full border border-primary-600/30 hover:bg-primary-600/30 hover:border-primary-600/50 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-1 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 origin-left"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
