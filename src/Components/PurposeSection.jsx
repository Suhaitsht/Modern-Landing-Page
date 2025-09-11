import React from "react";
import { features } from "../../utils/data";

export default function PurposeSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-0">
          {/* Heading text */}
          <div>
            <p className="text-sm text-purple-600 font-medium mb-2">
              ACHIEVE MORE
            </p>
            <h2 className="text-3xl md:w-4/5 w-ful md:text-4xl font-bold text-gray-900">
              purpose of covey is to keep your team
            </h2>
          </div>

          {/* bullet points */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
            {features.map((future, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 flex rounded-lg">{future.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {future.title}
                  </h3>
                  <p className="text-gray-600">{future.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
