import React from "react";
import monitorCardImg from "../assets/monitor-card.webp";
import { FaArrowRightLong } from "react-icons/fa6";

export default function MonitorSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      {/* left */}
      <div className="flex flex-col  md:flex-row items-center justify-between gap-12 md:24">
        <div className="md:w-1/2 w-full">
          <p className="text-green-500 font-semibold uppercase">schedule</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
            Streamline Your Business <br />
            With Smart Scheduling Solutions
          </h2>
          <p className="text-gray-600 mb-8">
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver exceptional customer experiences through
            seamless calendar management.
          </p>
          <a
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Explore scheduling features
            <FaArrowRightLong className="w-5 h-5" />
          </a>
        </div>
        {/* right */}

        <div className="md:w-1/2 w-full">
          <img src={monitorCardImg} alt="schedule" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
