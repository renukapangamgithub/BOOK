import React from "react";

function Success() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="max-w-xl w-full p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your message has been successfully sent. We will get back to you shortly.
        </p>
        <button
          className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-200"
          onClick={() => (window.location.href = "/")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Success;
