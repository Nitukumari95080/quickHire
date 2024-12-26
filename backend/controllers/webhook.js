import webhook  from "svix";
import User from "../models/User.mode.js";

// API controller function to manage Clerk user with database
export const clerkWebHooks = async (req, res) => {
  try {
    // Create a Svix instance with Clerk webhook secret
    const whook = new webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verifying headers
    await whook.verify(
      JSON.stringify(req.body),
      {
        "svix-id": req.headers["svix-id"],
        "svix-timestamp": req.headers["svix-timestamp"],
        "svix-signature": req.headers["svix-signature"]
      }
    );

    // Getting data from request body
    const { data, type } = req.body;

    // Switch case for different events
    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address, // Fixed typo: `email_addresses`
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
          resume: ""
        };
        await User.create(userData); // Fixed typo: `useData` to `userData`
        res.json({});
        break;
      }
      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address, // Fixed typo: `email_addresses`
          name: data.first_name + " " + data.last_name,
          image: data.image_url
        };
        await User.findByIdAndUpdate(data.id, userData);
        res.json({});
        break;
      }
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        res.json({});
        break;
      }
      default:
        res.status(400).json({ message: "Unhandled event type" }); // Added a proper response for unhandled events
        break;
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Webhook Error" }); // Improved error response
  }
};
