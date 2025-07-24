import React, { useEffect } from "react";
import { motion } from "framer-motion";
import './style.css';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 text-gray-100 overflow-hidden">
      {/* Animated Particle Background */}
      <div className="absolute inset-0 bg-particle-animation opacity-20 pointer-events-none"></div>

      {/* Pulsing Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pulse opacity-10 pointer-events-none"></div>

      {/* Stock Chart Pattern Overlay */}
      <div className="absolute inset-0 bg-stock-chart-pattern bg-repeat opacity-10 pointer-events-none"></div>

      {/* Decorative Glowing Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-48 h-48 bg-green-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-lime-400/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-32 h-32 bg-green-400/15 rounded-full blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
      />

      {/* Abstract Lines */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-10 w-1 h-32 bg-gradient-to-b from-green-400 to-lime-400 opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-1 h-32 bg-gradient-to-b from-lime-400 to-yellow-300 opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-20 w-1 h-48 bg-gradient-to-t from-green-500 to-lime-500 opacity-15"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
        />
      </div>

      <div className="max-w-5xl mx-auto bg-black/90 rounded-2xl shadow-2xl p-10 sm:p-14 relative z-10 border border-green-500/20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-5xl sm:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-lime-400 mb-10 drop-shadow-md"
        >
          Cookie Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          className="text-lg text-gray-400 text-center mb-14"
        >
          <strong>Last updated:</strong> July 23, 2025
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
          className="mb-14 text-gray-200 leading-relaxed text-center text-xl"
        >
          This Cookie Policy explains how Venoms Index uses cookies and similar technologies when you visit our website.
        </motion.p>

        {/* Section 1 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
          className="mb-14 transition-all duration-300 hover:bg-green-500/10 p-8 rounded-xl border-l-4 border-green-400/50"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-lime-400 mb-6 relative">
            1. What Are Cookies?
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </h2>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            Cookies are small text files stored on your device when you visit a website.
          </p>
          <p className="text-gray-200 leading-relaxed text-lg">
            They help the website remember your preferences, improve performance, and provide a better user experience.
          </p>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
          className="mb-14 transition-all duration-300 hover:bg-green-500/10 p-8 rounded-xl border-l-4 border-green-400/50"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-lime-400 mb-6 relative">
            2. Why We Use Cookies
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </h2>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            We use cookies to:
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
            <li>Remember your preferences</li>
            <li>Understand how users interact with our site (analytics)</li>
            <li>Improve performance and reliability</li>
          </ul>
          <p className="mt-6 text-gray-200 leading-relaxed text-lg">
            We do not use cookies to collect personal information for advertising or resell your data.
          </p>
        </motion.section>

        {/* Section 3 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.6 }}
          className="mb-14 transition-all duration-300 hover:bg-green-500/10 p-8 rounded-xl border-l-4 border-green-400/50"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-lime-400 mb-6 relative">
            3. Types of Cookies We Use
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </h2>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            <strong>Essential Cookies:</strong> Needed for the website to function (e.g., page navigation).
          </p>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics).
          </p>
          <p className="text-gray-200 leading-relaxed text-lg">
            <strong>Preference Cookies:</strong> Store your preferences (e.g., language or theme).
          </p>
        </motion.section>

        {/* Section 4 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.7 }}
          className="mb-14 transition-all duration-300 hover:bg-green-500/10 p-8 rounded-xl border-l-4 border-green-400/50"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-lime-400 mb-6 relative">
            4. Managing Cookies
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.7 }}
            />
          </h2>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            You can control and delete cookies through your browser settings.
          </p>
          <p className="text-gray-200 leading-relaxed text-lg">
            Disabling certain cookies may affect the functionality of the website.
          </p>
        </motion.section>

        {/* Section 5 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.8 }}
          className="mb-14 transition-all duration-300 hover:bg-green-500/10 p-8 rounded-xl border-l-4 border-green-400/50"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-lime-400 mb-6 relative">
            5. Third-Party Services
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
          </h2>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            We may use third-party tools (like analytics providers) that place cookies on your device.
          </p>
          <p className="text-gray-200 leading-relaxed text-lg">
            These providers have their own privacy and cookie policies.
          </p>
        </motion.section>

        {/* Section 6 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.9 }}
          className="mb-14 transition-all duration-300 hover:bg-green-500/10 p-8 rounded-xl border-l-4 border-green-400/50"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-lime-400 mb-6 relative">
            6. Updates
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.9 }}
            />
          </h2>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            We may update this Cookie Policy from time to time.
          </p>
          <p className="text-gray-200 leading-relaxed text-lg">
            Please check this page for the latest version.
          </p>
        </motion.section>

        {/* Section 7 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.0 }}
          className="mb-14 transition-all duration-300 hover:bg-green-500/10 p-8 rounded-xl border-l-4 border-green-400/50"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-lime-400 mb-6 relative">
            7. Contact
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 1.0 }}
            />
          </h2>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            If you have any questions about this Cookie Policy, please reach out to us:
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@venomsindex.com"
                className="text-lime-400 underline hover:text-lime-300 transition-colors duration-200"
                aria-label="Email support"
              >
                support@venomsindex.com
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.venomsindex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-400 underline hover:text-lime-300 transition-colors duration-200"
                aria-label="Visit our website"
              >
                www.venomsindex.com
              </a>
            </li>
          </ul>
        </motion.section>

        {/* Consent Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.1 }}
          className="text-center mt-12"
        >
          {/* <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(74, 222, 128, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-green-500 via-green-400 to-lime-400 rounded-xl text-white font-bold text-lg hover:from-green-600 hover:via-green-500 hover:to-lime-500 transition-all duration-300"
          >
            Accept Cookies
          </motion.button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;