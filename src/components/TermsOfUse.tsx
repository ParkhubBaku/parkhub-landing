// src/components/TermsOfUse.tsx
import React from "react";

const TermsOfUse = () => {
  return (
    <section
      id="terms"
      className="py-16 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-gray-900 mb-8">
          PARK HUB BAKU – Terms of Use
        </h2>

        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <p className="text-lg text-gray-800 dark:text-gray-200 mb-8 leading-relaxed text-center">
          These are the terms and conditions which apply to your use of our
          website <strong>www.parkhub.az</strong> and the Park HUB app, and any
          use you make of the services available through our Site or our App.
        </p>

        <details className="group bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
          <summary className="cursor-pointer list-none text-lg font-semibold text-gray-900 dark:text-white flex items-center justify-between">
            Read full Terms and Conditions
            <span className="transition-transform group-open:rotate-45 text-2xl leading-none">
              +
            </span>
          </summary>

          <div className="mt-6 text-gray-700 dark:text-gray-200 space-y-4 text-sm leading-relaxed max-h-[70vh] overflow-y-auto pr-2">
            <p>
              Please read these terms carefully before you use our Site or our
              App, and before you pay to park, or register as parking provider
              using our Service.{" "}
              <strong>
                By clicking on “I agree”, and/or downloading, installing,
                activating or otherwise using the services, you are agreeing to
                comply with and be bound by these Terms.
              </strong>
            </p>

            <p>
              If you do not agree to be bound by the terms of this agreement and
              to follow all applicable laws, you are not permitted to and shall
              not access or use the services. You further acknowledge and agree
              that your use of the services is subject to our Privacy Policy.
            </p>

            <h3 className="font-semibold mt-6">1. DEFINITIONS</h3>
            <p>
              Key definitions include Account, Authorized User, Corporate Subscriber,
              Favorite Location, Location, Parking Provider, Plans or Subscriptions,
              User Vehicle, and Writing (includes emails and notifications).
            </p>

            <h3 className="font-semibold mt-6">
              2. INFORMATION ABOUT US AND CONTACT
            </h3>
            <p>
              ParkHub LLC is registered in Azerbaijan (TIN 2009139801),
              address 15 Zig highway, apt 125. Contact us at{" "}
              <a
                href="mailto:contact@parkhub.az"
                className="text-amber-600 dark:text-amber-400 underline"
              >
                contact@parkhub.az
              </a>
              .
            </p>

            <h3 className="font-semibold mt-6">3. SERVICES WE PROVIDE</h3>
            <p>
              Park Hub Baku is a B2B parking subscription platform facilitating 
              discovery, access control, subscription management and payments 
              between drivers, businesses and parking providers. We are an 
              aggregator and do not operate parking locations or accept custody of 
              vehicles.
            </p>

            <h3 className="font-semibold mt-6">4. REGISTRATION</h3>
            <p>
              Users must be 18+ and provide accurate information. Our Privacy 
              Policy explains how we collect and protect personal data.
            </p>

            <h3 className="font-semibold mt-6">5. RESPONSIBILITIES OF USER</h3>
            <p>
              Users must comply with these Terms, follow facility rules, not share 
              accounts or attempt unauthorized access. Park Hub Baku may suspend 
              accounts for violations.
            </p>

            <h3 className="font-semibold mt-6">6. SUBSCRIPTIONS AND PAYMENTS</h3>
            <p>
              Subscriptions determine access rights and fees. Payments are 
              processed via authorized partners (M10 or Pasha Pay). Renewals are 
              automatic unless cancelled before the next billing cycle.
            </p>

            <h3 className="font-semibold mt-6">7. REFUNDS AND CANCELLATIONS</h3>
            <p>
              Monthly plans are non-refundable after start. Annual plans may 
              qualify for partial refunds (≥ 6 months remaining) subject to fees.
            </p>

            <h3 className="font-semibold mt-6">8. INTELLECTUAL PROPERTY</h3>
            <p>
              All Service content and software belong to Park Hub Baku. You receive 
              a personal, non-transferable license for non-commercial use only.
            </p>

            <h3 className="font-semibold mt-6">9. THIRD-PARTY PROVIDERS</h3>
            <p>
              Parking providers are responsible for their facilities’ operation, 
              safety and policies. Park Hub Baku is not liable for their actions.
            </p>

            <h3 className="font-semibold mt-6">10. LIABILITY</h3>
            <p>
              Use of Services and parking facilities is at your own risk. Park Hub 
              Baku is not liable for loss, damage or injury occurring at third-party 
              locations.
            </p>

            <h3 className="font-semibold mt-6">11. FORCE MAJEURE</h3>
            <p>
              We are not responsible for delays or failures caused by events beyond 
              our control (fire, flood, war, government actions, etc.).
            </p>

            <h3 className="font-semibold mt-6">12. DATA PROTECTION AND PRIVACY</h3>
            <p>
              We implement security measures per law to protect data and use it to 
              operate and improve the Services. By using our app, you agree to 
              receive notifications and promotional information (which you can 
              disable in settings).
            </p>

            <h3 className="font-semibold mt-6">13. CHANGES TO TERMS</h3>
            <p>
              Park Hub Baku may modify the Services or Terms. Material changes will 
              be notified via app or email. Continued use constitutes acceptance.
            </p>

            <h3 className="font-semibold mt-6">14. GOVERNING LAW AND JURISDICTION</h3>
            <p>
              These Terms are governed by the laws of the Republic of Azerbaijan. 
              Disputes shall first be settled amicably; failing that, they fall under 
              the exclusive jurisdiction of Azerbaijani courts.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
};

export default TermsOfUse;
