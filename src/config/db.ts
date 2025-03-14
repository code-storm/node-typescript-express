import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await connect(process.env.MONGO_URI as string);

    console.log('MongoDB connected:', connection.connection.host);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;