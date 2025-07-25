import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Landingpage from "./pages/Landingpage";
import "./App.css";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/TermsandConditions";
import CookiePolicy from "./components/CookiePolicy";
import { Helmet } from "react-helmet";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    if (/privacy-policy/i.test(window.location.pathname)) {
      setIsLoading(false);
    }
    return () => clearTimeout(timer);
  }, []);

  const loadingFade = {
    initial: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const contentFade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };

  const spinnerAnimation = {
    animate: { rotate: 360 },
    transition: { duration: 1, repeat: Infinity, ease: "linear" },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Venom's Index",
            "url": "https://venomsindex.com/",
            "logo": "https://venomsindex.com/venoms-logo.png",
            "description": "Venoms Index offers AI-driven stock predictions and market insights. Trade smarter with real-time data and trend analysis.",
            "sameAs": [
              "https://x.com/venomsindex01",
              "https://www.linkedin.com/company/venomsindex"
            ]
          }
          `}
        </script>
      </Helmet>

      <Router>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
          <AnimatePresence>
            {isLoading && (
              <motion.div
                className="fixed inset-0 z-50 bg-black flex items-center justify-center"
                {...loadingFade}
              >
                {!videoError ? (
                  <motion.div className="relative w-full h-full">
                    <video
                      autoPlay
                      muted
                      playsInline
                      preload="auto"
                      onError={() => setVideoError(true)}
                      className="w-full h-full object-cover"
                    >
                      <source
                        src={
                          import.meta.env.BASE_URL + "videos/loading.mp4"
                        }
                        type="video/mp4"
                      />
                    </video>
                  </motion.div>
                ) : (
                  <div className="text-center">
                    <motion.div
                      className="w-24 h-24 border-4 bordergradient-to-b from-green-400 to-lime-400  border-t-transparent rounded-full"
                      {...spinnerAnimation}
                    />
                    <motion.h2
                      className="mt-4 text-white text-xl font-semibold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      Loading Venom Index...
                    </motion.h2>
                  </div>
                )}

                {/* Progress Bar */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-b from-green-400 to-lime-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "linear" }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!isLoading && (
              <motion.div {...contentFade}>
                <Routes>
                  <Route path="/" element={<Landingpage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/CookiePolicy" element={<CookiePolicy />} />
                </Routes>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Router>
    </>
  );
}

export default App;
