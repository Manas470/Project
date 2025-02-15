import React from "react";

const PricingNew = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 text-white py-16 px-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        Flexible Pricing Options
      </h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Choose the plan that best suits your needs and budget.
      </p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Fixed Rate Card */}
        <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105">
          <span className="bg-gray-700 text-xs sm:text-sm px-4 py-1 rounded-full">
            Fixed Rate
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold mt-4">Starts at $797</h3>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Tailored for those who prioritize clarity and certainty in their project budget.
          </p>
          <ul className="text-gray-400 mt-4 space-y-2 text-sm sm:text-base">
            <li>✅ No hidden costs</li>
            <li>✅ Clear scope and timeline</li>
            <li>✅ Best for well-defined projects</li>
          </ul>
          <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold">
            Start Now
          </button>
        </div>

        {/* Hourly Basis Card */}
        <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105">
          <span className="bg-gray-700 text-xs sm:text-sm px-4 py-1 rounded-full">
            Hourly Basis
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold mt-4">$50 per hour</h3>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Tailored for those who require flexibility and customization in their requirements.
          </p>
          <ul className="text-gray-400 mt-4 space-y-2 text-sm sm:text-base">
            <li>✅ Pay as you go</li>
            <li>✅ Adaptable to changing requirements</li>
            <li>✅ Best for evolving projects</li>
          </ul>
          <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold">
            Start Now
          </button>
        </div>
      </div>

      {/* Extra Info */}
      <div className="mt-8 text-gray-400 text-xs sm:text-sm bg-gray-800 py-3 px-5 rounded-lg text-center max-w-lg">
        ℹ You are eligible to request a free section design if you are unsure about the quality of our designs.
      </div>
    </div>
  );
};

export default PricingNew;
