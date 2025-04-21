import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black min-h-screen py-10 px-4 sm:px-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          <strong>Effective Date:</strong> April 21, 2025
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
            1. No Data Collection
          </h2>
          <p className="mb-2 text-gray-300">
            The <strong>Venoms Index</strong> Chrome Extension{" "}
            <strong>
              does not collect, store, or share any personal information
            </strong>
            . We do not collect any personally identifiable information such as
            your name, email address, or any browsing activity.
          </p>
          <p className="text-gray-300">
            The extension simply provides publicly available news related to
            business and finance. No data from your usage of the extension is
            collected or stored.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
            2. What We Provide
          </h2>
          <p className="mb-2 text-gray-300">
            The extension aggregates and displays{" "}
            <strong>
              publicly available news articles related to business and finance
            </strong>
            .
          </p>
          <p className="text-gray-300">
            We provide access to these news articles, but we do not track,
            store, or analyze your activity or engagement with them. Our
            extension merely fetches content from third-party news sources and
            presents it to the user. No user data is involved in this process.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
            3. No User Tracking
          </h2>
          <p className="mb-2 text-gray-300">
            <strong>Venoms Index</strong> does not track or store any
            information about how you interact with the extension.
          </p>
          <p className="text-gray-300">
            We do not use cookies, local storage, or any tracking technologies.
            There is no monitoring of user behavior or collection of data such
            as articles viewed, time spent, or interaction details.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
            4. Third-Party Services
          </h2>
          <p className="mb-2 text-gray-300">
            The extension may link to third-party websites or services for news
            content. These are not controlled by us, and we are not responsible
            for their privacy practices.
          </p>
          <p className="text-gray-300">
            We recommend reviewing the privacy policies of any external websites
            you visit through the extension.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
            5. Security of Your Data
          </h2>
          <p className="mb-2 text-gray-300">
            Since we do not collect any personal data, there is no data to
            secure.
          </p>
          <p className="text-gray-300">
            However, we ensure the extension is built with quality and integrity
            to prevent any potential misuse.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
            6. Changes to This Privacy Policy
          </h2>
          <p className="mb-2 text-gray-300">
            We may update this policy occasionally. If significant changes are
            made, we will update the effective date and notify users if
            necessary.
          </p>
          <p className="text-gray-300">
            You are encouraged to check this page periodically.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
            7. Contact Information
          </h2>
          <p className="mb-2 text-gray-300">
            For any questions, reach out to us:
          </p>
          <ul className="list-disc list-inside text-gray-300">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@venomsindex.com"
                className="text-blue-400 underline hover:text-blue-300"
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
                className="text-blue-400 underline hover:text-blue-300"
              >
                www.venomsindex.com
              </a>
            </li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
            8. Your Consent
          </h2>
          <p className="text-gray-300">
            By using the <strong>Venoms Index</strong> Chrome Extension, you
            consent to the privacy practices described in this policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
