import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Animated Particle Background */}
      <div className="absolute inset-0 bg-particle-animation opacity-20 pointer-events-none"></div>

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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-lime-400 bg-clip-text text-transparent">
                Instant Insights, Zero Hassle
              </h1>
              <p className="text-gray-300 text-lg md:text-xl">
                Add Venom's Index to your browser for real-time market sentiment
                analysis and curated news updates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 via-green-500 to-lime-400 rounded-lg text-white font-semibold hover:from-green-700 hover:to-lime-500 transition-all duration-300 shadow-lg shadow-green-500/25 hover:cursor-pointer"
              >
                Download Now
              </motion.button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              {[
                "Real-time News Updates",
                "Sentiment Analysis",
                "Market Mood Monitor",
                "Credibility Scoring",
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-lime-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Info Box */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-lime-400 bg-clip-text text-transparent mb-6">
                About VENOM'S Index
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  VENOM'S Index is a cutting-edge stock market insights
                  extension designed to help investors make data-driven
                  decisions. It aggregates real-time market trends, sentiment
                  analysis, and predictive analytics into a single, easy-to-use
                  dashboard.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/10 p-2 rounded-lg mt-1">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <p className="text-sm">
                      Leverages AI and machine learning to identify undervalued
                      stocks, potential breakouts, and market anomalies.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-lime-500/10 p-2 rounded-lg mt-1">
                      <svg
                        className="w-5 h-5 text-lime-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm">
                      Analyzes news, social media, and financial reports to
                      gauge investor sentiment with risk ratings and investment
                      scores.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/10 p-2 rounded-lg mt-1">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm">
                      Features customizable alerts and visualizations, suitable
                      for both beginners and seasoned traders.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Existing Decorative Elements */}
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-green-500/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;