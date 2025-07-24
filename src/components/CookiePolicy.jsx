import React from "react";

const CookiePolicy = () => {
  return (
    <div className="bg-gray-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-gray-100">
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-xl shadow-2xl p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8 animate-fade-in">
          Cookie Policy
        </h1>
        <p className="text-sm text-gray-400 text-center mb-12">
          <strong>Last updated:</strong> July 23, 2025
        </p>

        <p className="mb-12 text-gray-300 leading-relaxed text-center">
          This Cookie Policy explains how Venoms Index uses cookies and similar technologies when you visit our website.
        </p>

        {/* Section 1 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            1. What Are Cookies?
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            Cookies are small text files stored on your device when you visit a website.
          </p>
          <p className="text-gray-300 leading-relaxed">
            They help the website remember your preferences, improve performance, and provide a better user experience.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            2. Why We Use Cookies
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            We use cookies to:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Remember your preferences</li>
            <li>Understand how users interact with our site (analytics)</li>
            <li>Improve performance and reliability</li>
          </ul>
          <p className="mt-4 text-gray-300 leading-relaxed">
            We do not use cookies to collect personal information for advertising or resell your data.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            3. Types of Cookies We Use
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            <strong>Essential Cookies:</strong> Needed for the website to function (e.g., page navigation).
          </p>
          <p className="mb-4 text-gray-300 leading-relaxed">
            <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics).
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong>Preference Cookies:</strong> Store your preferences (e.g., language or theme).
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            4. Managing Cookies
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            You can control and delete cookies through your browser settings.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Disabling certain cookies may affect the functionality of the website.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            5. Third-Party Services
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            We may use third-party tools (like analytics providers) that place cookies on your device.
          </p>
          <p className="text-gray-300 leading-relaxed">
            These providers have their own privacy and cookie policies.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            6. Updates
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            We may update this Cookie Policy from time to time.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Please check this page for the latest version.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            7. Contact
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            If you have any questions about this Cookie Policy, please reach out to us:
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

export default CookiePolicy;