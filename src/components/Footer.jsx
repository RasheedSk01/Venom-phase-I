import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Logo from "../assets/logobg.png";
import { Link } from "react-router-dom";



const Footer = () => {
  const socialLinks = [
    {
      icon: FaTwitter,
      url: "https://x.com/venomsindex01?t=Easpl5fD_XHHK4rpmXPxCA&s=08",
      label: "Twitter",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/venom-s-index-90a818360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/venoms_index/?utm_source=qr&igsh=dGVxamdxczBuN3Fz#",
      label: "Instagram",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative  bg-black ">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6 max-w-md">
            <div className="flex items-center justify-center space-x-4">
              {/* <div className="w-18 h-18 rounded-full  p-1 shadow-md"> */}
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-12 h-12 rounded-full"
                />
              {/* </div> */}
              <div>
                <h3 className="text-2xl font-extrabold bg-gradient-to-r from-green-400 via-green-500 to-lime-400 bg-clip-text text-transparent mb-[-5px]">
                  Venom's Index
                </h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering the future with innovative solutions and cutting-edge
              development using AI
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 transition-colors duration-300"
                >
                  <social.icon className="text-2xl" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Venom Index. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {[
                 { name: "Privacy Policy", path: "/privacy-policy", type: "internal" },
                 { name: "Terms of Service", path: "/Terms", type: "internal" },
                 { name: "Cookie Policy", path: "/CookiePolicy", type: "internal" },   
                 ].map(({ name, path, type }) => (
  <motion.div
    key={name}
    whileHover={{ color: "#ffffff" }}
    className="text-sm text-gray-400 transition-colors duration-200"
  >
    {type === "external" ? (
      <a href={path} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    ) : (
      <Link to={path}>{name}</Link>
    )}
  </motion.div>
                     ))}

            </div>
          </div>
        </div>
      </div>

      {/* Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-lime-400 to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
