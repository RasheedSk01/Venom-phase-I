import React, { useEffect } from "react";
import { motion } from "framer-motion";
import './privacy.css';

const PrivacyPolicy = () => {
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
          className="absolute bottom-1/4 left-10 w-1 h-32 bg-gradient-to-t from-lime-400 to-yellow-300 opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />

        <motion.div
          className="absolute top-1/4 right-10 w-1 h-48 bg-gradient-to-t from-green-500 to-lime-500 opacity-15"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
        />

        <motion.div
          className="absolute bottom-1/4 right-10 w-1 h-40 bg-gradient-to-b from-yellow-300 to-green-400 opacity-20"
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, repeatType: "reverse", delay: 0.7 }}
        />
      </div>
      <div className="max-w-5xl mx-auto bg-black/90 rounded-2xl shadow-2xl p-10 sm:p-14 relative z-10 border border-green-500/20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-5xl sm:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-lime-400 mb-10 drop-shadow-md"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          className="text-lg text-gray-400 text-center mb-14"
        >
          <strong>Effective Date:</strong> April 21, 2025
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
          className="mb-14 text-gray-200 leading-relaxed text-center text-xl"
        >
          This Privacy Policy outlines how the <strong>Venoms Index</strong> Chrome Extension handles your privacy.
        </motion.p>

        {/* Section 1 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
          className="mb-14 transition-all duration-300 hover:bg-green-500/10 p-8 rounded-xl border-l-4 border-green-400/50"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-lime-400 mb-6 relative">
            1. No Data Collection
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </h2>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            The <strong>Venoms Index</strong> Chrome Extension{" "}
            <strong>does not collect, store, or share any personal information</strong>.
            We do not gather any personally identifiable information such as your name, email address, or browsing activity.
          </p>
          <p className="text-gray-200 leading-relaxed text-lg">
            Our extension solely provides access to publicly available news related to business and finance. No data from your usage is collected or stored.
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
            2. Our Services
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </h2>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            The <strong>Venoms Index</strong> Chrome Extension aggregates and displays{" "}
            <strong>publicly available news articles</strong> related to business and finance.
          </p>
          <p className="text-gray-200 leading-relaxed text-lg">
            We fetch content from third-party news sources and present it to you without tracking, storing, or analyzing your activity or engagement.
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
            3. No User Tracking
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </h2>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            We do not track or store any information about how you interact with the <strong>Venoms Index</strong> Chrome Extension.
          </p>
          <p className="text-gray-200 leading-relaxed text-lg">
            No cookies, local storage, or tracking technologies are used. We do not monitor user behavior or collect data such as articles viewed, time spent, or interaction details.
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
            4. Third-Party Services
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.7 }}
            />
          </h2>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            The extension may link to third-party websites or services for news content. These external services are not controlled by us, and we are not responsible for their privacy practices.
          </p>
          <p className="text-gray-200 leading-relaxed text-lg">
            We encourage you to review the privacy policies of any external websites you access through the extension.
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
            5. Data Security
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
          </h2>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            As we do not collect personal data, there is no user data to secure.
          </p>
          <p className="text-gray-200 leading-relaxed text-lg">
            We ensure the extension is developed with high standards to prevent any potential misuse.
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
            6. Policy Updates
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.9 }}
            />
          </h2>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            We may update this Privacy Policy from time to time. Significant changes will be reflected by an updated effective date, and we will notify users if required.
          </p>
          <p className="text-gray-200 leading-relaxed text-lg">
            Please check this page periodically for updates.
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
            7. Contact Us
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 1.0 }}
            />
          </h2>
          <p className="mb-6 text-gray-200 leading-relaxed text-lg">
            For any questions or concerns, please reach out to us:
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

        {/* Section 8 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.1 }}
          className="mb-14 transition-all duration-300 hover:bg-green-500/10 p-8 rounded-xl border-l-4 border-green-400/50"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-lime-400 mb-6 relative">
            8. Your Consent
            <motion.span
              className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-lime-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 1.1 }}
            />
          </h2>
          <p className="text-gray-200 leading-relaxed text-lg">
            By using the <strong>Venoms Index</strong> Chrome Extension, you agree to the privacy practices outlined in this policy.
          </p>
        </motion.section>

        {/* Accept Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.2 }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;