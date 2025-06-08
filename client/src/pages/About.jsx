import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl px-4 py-20 mx-auto">
      <h1 className="mb-4 text-3xl font-bold text-slate-800">
        About NestFinder
      </h1>
      <p className="mb-4 text-slate-700">
        NestFinder is a modern real estate platform that helps you buy, sell, or rent properties directly from landlords—no brokers involved. We’re focused on providing a smooth, user-friendly experience to make your real estate journey stress-free.
      </p>
      <p className="mb-4 text-slate-700">
        Our mission is to empower users with direct access to property listings and communication with landlords. Whether you’re looking for a cozy rental or your dream home to buy, NestFinder is your trusted partner.
      </p>
      <p className="mb-10 text-slate-700">
        With features like secure sign-up/login, detailed listings with pricing, bed/bath count, descriptions, and direct messaging, we’re building a transparent and easy-to-use real estate experience.
      </p>

      {/* Embedded Chatbase Iframe */}
      <div className="w-full min-h-[700px]">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/NdNblzLi_glM9SmYa8N9A"
          width="100%"
          style={{ height: "100%", minHeight: "700px" }}
          frameBorder="0"
          title="NestFinder Chatbot"
        ></iframe>
      </div>
    </div>
  );
}
