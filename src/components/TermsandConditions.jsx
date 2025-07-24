import React, { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-gray-100">
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-xl shadow-2xl p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8 animate-fade-in">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-400 text-center mb-12">
          <strong>Last updated:</strong> July 23, 2025
        </p>

        <p className="mb-12 text-gray-300 leading-relaxed text-center">
          Welcome to Venoms Index! By using this website, you agree to the following simple terms:
        </p>

        {/* Section 1 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            1. Use at Your Own Risk
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            We provide stock market and financial news with AI-based insights. We do our best to give useful information, but we can’t guarantee it’s always accurate or up to date.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Please make your own investment decisions.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            2. Respect Our Content
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            The content, design, and tools on this site are ours.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Please don’t copy, reuse, or publish them without permission.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            3. No Harmful Use
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Don’t use this site to do anything illegal, harmful, or disruptive.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            4. External Links
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may link to other websites. We’re not responsible for their content.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            5. Changes to These Terms
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may update these terms at any time. Check this page for the latest version.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            6. Contact Us
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            If you have any questions, please reach out to us:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@venomsindex.com"
                className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200"
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
                className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200"
                aria-label="Visit our website"
              >
                www.venomsindex.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;