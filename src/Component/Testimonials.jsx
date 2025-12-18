import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahim Uddin",
    role: "Citizen",
    feedback:
      "City Care made it so easy to report potholes and broken streetlights. The response was fast and updates were clear!",
  },
  {
    name: "Amina Begum",
    role: "Citizen",
    feedback:
      "I love how I can track my issue in real-time. Municipal staff are very responsive. Highly recommend City Care!",
  },
  {
    name: "Jahid Hossain",
    role: "Premium User",
    feedback:
      "Priority support is amazing. Issues get resolved very quickly and efficiently. Truly a smart city solution!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Citizens Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
              <p className="text-gray-700 mb-4">{t.feedback}</p>
              <h4 className="font-semibold text-lg">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
