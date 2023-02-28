import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb connected successfully `);
  }
  catch (error) {
    console.log(`Mongodb Server Issue ${error}`);
  }
};


