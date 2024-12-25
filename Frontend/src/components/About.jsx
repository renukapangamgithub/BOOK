import React, { useState } from "react";

function About() {
  const [activeSection, setActiveSection] = useState("mission");

  const sections = {
    mission: {
      title: "Our Mission",
      content:
        "Our mission is to create innovative, user-centric solutions that inspire and empower people to achieve their goals. We believe in the power of technology to transform lives and build a better future.",
    },
    vision: {
      title: "Our Vision",
      content:
        "We envision a world where technology bridges gaps, fosters collaboration, and creates opportunities for everyone. Our goal is to become a global leader in providing impactful digital experiences.",
    },
    values: {
      title: "Our Values",
      content: `  
      - **Innovation**: Pushing boundaries to deliver cutting-edge solutions.  
      - **Integrity**: Upholding the highest standards of honesty and ethics.  
      - **Inclusivity**: Building products that serve everyone, everywhere.  
      - **Sustainability**: Ensuring a positive impact on society and the environment.`,
    },
    journey: {
      title: "Our Journey",
      content:
        "Started as a small team of dreamers, we have grown into a global force in tech innovation. From humble beginnings to milestone achievements, our journey is a testament to resilience and passion.",
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
      <div className="flex justify-center mb-4">
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

      <div className="p-4 bg-gray-50 border rounded-lg mb-6">
        <h3 className="text-2xl font-semibold mb-3">
          {sections[activeSection].title}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {sections[activeSection].content}
        </p>
      </div>

      <div className="text-center">
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
