// test-db.js
import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected successfully"))
  .catch((err) => console.error("❌ Connection failed:", err));
