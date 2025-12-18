import React from "react";
import {
  FaMobileAlt,
  FaCheckCircle,
  FaUserCheck,
  FaClock,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaMobileAlt size={30} />,
    title: "Report an Issue",
    description:
      "Citizens submit a report with details, photos, and location using the City Care app or web platform.",
  },
  {
    icon: <FaCheckCircle size={30} />,
    title: "Admin Review",
    description:
      "Admins review the submitted issues and assign them to the appropriate municipal staff for resolution.",
  },
  {
    icon: <FaUserCheck size={30} />,
    title: "Staff Verification",
    description:
      "Staff verifies the reported issue, updates progress, and works on resolving it efficiently.",
  },
  {
    icon: <FaClock size={30} />,
    title: "Track & Resolve",
    description:
      "The system tracks the status from Pending → In-Progress → Resolved → Closed, and citizens get real-time updates.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-500 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
