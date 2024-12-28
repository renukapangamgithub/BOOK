import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";

const app = express();

// Load environment variables from the config.env file located inside the config folder
dotenv.config({ path: './config/config.env' }); // Specify the path to config.env

// Enhanced CORS configuration
const corsOptions = {
    origin: "https://book-front-web.vercel.app", // Your frontend's deployed URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow all relevant methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
    credentials: true
};
app.use(cors(corsOptions));

app.use(express.json());

// MongoDB URI from the environment variable
const URI = process.env.MongoDBURI;  // Now accessing MongoDBURI from config.env

// Async function to connect to MongoDB
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit process if connection fails
    }
};

// Call the function to connect to MongoDB
connectToMongoDB();

// Define Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

// Set the PORT for the server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
