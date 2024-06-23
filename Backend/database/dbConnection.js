import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "RESTAURANT"
    }).then(() => {
        console.log("connected to db");
    }).catch(err => {
        console.log(err);
    });
};
