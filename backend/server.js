import express from "express";
import dotenv from "dotenv";
import  "./config/instrument.js";
import * as Sentry from "@sentry/node";
import dbConnection from "./Database/db.js";
import { clerkWebHooks } from "./controllers/webhook.js";

// Load environment variables
dotenv.config();

// Initialize express
const app = express();

// Middlewares
app.use(express.json());

// Connect to the database
dbConnection().then(() => {
    console.log("Database connected successfully");
}).catch((error) => {
    console.error("Database connection failed:", error);
});

// Routes
app.get('/', (req, res) => res.send("API Working"));

app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });
 app.post('/webhooks',clerkWebHooks) 

// Start the server
const PORT = process.env.PORT || 3030;
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
