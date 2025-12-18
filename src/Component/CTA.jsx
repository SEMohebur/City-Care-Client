import React from "react";

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Make Your City Smarter?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Report city issues, track progress, and help improve municipal
          services instantly.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTA;
