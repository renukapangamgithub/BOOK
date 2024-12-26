
import Contact from "../model/contact.model.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;


    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }


    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();
    res.status(201).json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error saving contact message:", error.message);
    res.status(500).json({ message: "Failed to send your message. Please try again later." });
  }
};
