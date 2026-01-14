"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/nimashag", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nimashagamage",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:nimasha.piyumini@gmail.com", label: "Email" },
  ];

  return (
    <footer className="glass-strong border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass hover:bg-primary-600/20 rounded-full transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon
                  size={20}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p className="flex items-center gap-2 justify-center">
              © {new Date().getFullYear()} Nimasha Gamage. Made with
              <Heart size={16} className="text-red-500 fill-red-500" />
              by Nimasha
            </p>
            <p className="mt-2">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
