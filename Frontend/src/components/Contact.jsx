import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
axios.defaults.withCredentials = true;
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://book-backend-wnkq.onrender.com", data);

      toast.success("Message sent successfully!");
      // Redirect to success page
      navigate("/success");
    } catch (error) {
      console.error("Error submitting the form:", error.response?.data || error.message);
      alert("There was an error. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg mt-19">
      <h2 className="text-2xl font-bold text-center mb-6 mt-10 text-blue-400">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium text-blue-400">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-blue-400 text-blue-400"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>

        <div>
          <label className="block font-medium text-blue-400">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-blue-400 text-blue-400"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div>
          <label className="block font-medium text-blue-400">Subject</label>
          <input
            type="text"
            placeholder="Enter subject"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-blue-400 text-blue-400"
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && <span className="text-red-500">{errors.subject.message}</span>}
        </div>

        <div>
          <label className="block font-medium text-blue-400">Message</label>
          <textarea
            rows="4"
            placeholder="Enter your message"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-blue-400 text-blue-400"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <span className="text-red-500">{errors.message.message}</span>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
