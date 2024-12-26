import React, { useState } from "react";
import { FaRocket, FaSeedling, FaHeart, FaBookOpen } from "react-icons/fa";
import successImage from "../assets/images/success-concept-target-book.jpg";
import visionImage from "../assets/images/vision.jpg";
import valuesImage from "../assets/images/values.jpg";
import journeyImage from "../assets/images/journey.jpg";

function About() {
  const [activeSection, setActiveSection] = useState("mission");

  const sections = {
    mission: {
      title: "Our Mission",
      content:
        "Our mission is to create innovative, user-centric solutions that inspire and empower people to achieve their goals. We believe in the power of technology to transform lives and build a better future.",
      image: successImage, // Example image for mission
      icon: <FaRocket className="text-pink-500 text-4xl mb-2" />,
    },
    vision: {
      title: "Our Vision",
      content:
        "We envision a world where technology bridges gaps, fosters collaboration, and creates opportunities for everyone. Our goal is to become a global leader in providing impactful digital experiences.",
      image: visionImage, // Example image for vision
      icon: <FaSeedling className="text-green-500 text-4xl mb-2" />,
    },
    values: {
      title: "Our Values",
      content: `  
      - **Innovation**: Pushing boundaries to deliver cutting-edge solutions.  
      - **Integrity**: Upholding the highest standards of honesty and ethics.  
      - **Inclusivity**: Building products that serve everyone, everywhere.  
      - **Sustainability**: Ensuring a positive impact on society and the environment.`,
      image: valuesImage, // Example image for values
      icon: <FaHeart className="text-red-500 text-4xl mb-2" />,
    },
    journey: {
      title: "Our Journey",
      content:
        "Started as a small team of dreamers, we have grown into a global force in tech innovation. From humble beginnings to milestone achievements, our journey is a testament to resilience and passion.",
      image: journeyImage, // Example image for journey
      icon: <FaBookOpen className="text-blue-500 text-4xl mb-2" />,
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-pink-600">
        About Us
      </h2>

      {/* Section Tabs */}
      <div className="flex justify-center mb-6 flex-wrap">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            className={`px-4 py-2 mx-2 rounded-md ${
              activeSection === key
                ? "bg-pink-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-pink-300"
            }`}
            onClick={() => setActiveSection(key)}
          >
            {sections[key].title.split(" ")[1]}
          </button>
        ))}
      </div>

      {/* Active Section Content */}
      <div className="grid md:grid-cols-2 gap-6 items-center p-6 bg-gray-50 border rounded-lg mb-8">
        {/* Left: Icon and Text */}
        <div>
          <div className="flex flex-col items-center mb-4">
            {sections[activeSection].icon}
            <h3 className="text-2xl sm:text-3xl md:text-2xl font-semibold text-gray-800 mb-2">
              {sections[activeSection].title}
            </h3>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            {sections[activeSection].content}
          </p>
        </div>

        {/* Right: Image */}
        <div>
          <img
            src={sections[activeSection].image}
            alt={sections[activeSection].title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-6">
        <button
          className="px-6 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-700 transition duration-200"
          onClick={() => (window.location.href = "/")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default About;
