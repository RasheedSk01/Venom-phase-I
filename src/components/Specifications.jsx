import React from "react";
import { motion } from "framer-motion";

const Specifications = () => {
  const features = [
    {
      title: "Real-Time News Updates",
      description: "Stay ahead with AI-curated market insights and trends",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      title: "Sentiment Analysis",
      description: "Get the market mood and emotional insights on review",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
    },
    {
      title: "Credibility Score",
      description: "Reliability check for each piece of information which you get",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      ),
    },
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-lime-400 bg-clip-text text-transparent mb-4">
            Why Choose Venom's Index?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the next generation of market analysis with our comprehensive suite of tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-lime-500/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-600 via-green-500 to-lime-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
                
                {/* Enhanced Hover Effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-lime-400/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 100 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Specifications;