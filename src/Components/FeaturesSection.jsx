import React from "react";
import { features2 } from "../../utils/data";

export default function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* heading text */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          How can we help your business
        </h2>
        <p className="text-gray-600">
          when you resell besnik, your build trust and increase
        </p>
      </div>
      {/* boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {features2.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col text-center items-center p-6"
          >
            <div
              className="w-24 h-24  rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4",
              }}
            >
              <div>{feature.icon}</div>
            </div>
            <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
            <p className="text-gray-500 text-center">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative shadow-2xl backdrop-blur-2xl">
          Become a partner
          <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/30 blur-xl top-0 left-0"></div>
        </button>
      </div>
    </section>
  );
}
