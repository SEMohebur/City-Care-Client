import React from "react";
import { FaClock, FaShieldAlt, FaChartLine, FaUsers } from "react-icons/fa";

const featuresData = [
  {
    icon: <FaClock size={30} />,
    title: "Faster Response",
    description:
      "Reports are quickly reviewed, assigned, and resolved, reducing delays in city service management.",
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Transparency",
    description:
      "Citizens can track their reported issues in real-time, ensuring accountability at every step.",
  },
  {
    icon: <FaChartLine size={30} />,
    title: "Data Insights",
    description:
      "Collect and analyze infrastructure data to improve planning and maintenance decisions.",
  },
  {
    icon: <FaUsers size={30} />,
    title: "User-Friendly",
    description:
      "Easy-to-use platform for citizens and municipal staff, making reporting and management simple.",
  },
];

const FetureSection = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center"
              >
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FetureSection;
