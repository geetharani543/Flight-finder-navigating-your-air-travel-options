import mongoose from 'mongoose'; // Use import here

// Make sure this URI matches the one you had in index.js,
// which seems to be 'mongodb://localhost:27017/FlightBookingMERN'
const dbURI = 'mongodb://localhost:27017/FlightBookingMERN';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Add these lines only if Mongoose gives deprecation warnings later:
            // useFindAndModify: false,
            // useCreateIndex: true
        });
        console.log('MongoDB connected successfully!');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        // Exit process with failure if connection fails
        process.exit(1);
    }
};

export default connectDB; // Export the function using default export