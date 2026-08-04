const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error("MONGODB_URI is not set in environment variables");
    }

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true, //এগুলো মূলত mongoose.connect() এর old configuration options ছিল যেগুলো MongoDB driver এর কিছু পুরোনো warning avoid করতে use করা হতো। তবে এখন MongoDB driver এর নতুন version এ এগুলো default ভাবে enable করা হয়েছে, তাই এই options গুলো দেওয়া না দিলেও কাজ করবে। তবে compatibility এর জন্য অনেক প্রজেক্টে এখনো দেওয়া হয়।
    });

    console.log("✅ MongoDB connected successfully");
    return mongoose.connection;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    if (require.main === module) {
      process.exit(1);
    }
    throw error;
  }
};

module.exports = connectDB;
