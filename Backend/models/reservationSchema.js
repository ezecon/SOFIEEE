import mongoose from "mongoose";
import validator from "validator";

const reservationSchema= new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        minLength:[3,"First name must contain at least 3 character"],
        maxLength:[30,"First name must contain at most 30 character"],
    },
    lastName: {
        type: String,
        require: true,
        minLength:[3,"First name must contain at least 3 character"],
        maxLength:[30,"First name must contain at most 30 character"],
    },
    email: {
        type: String,
        require: true,
        validate: [validator.isEmail,"Provide a valid email"],
    },
    phone: {
        type: String,
        require: true,
        minLength:[11,"Phone number contain only 11 digits"],
        maxLength:[1,"Phone number contain only 11 digits"],
    },
    time:
    {
        type: String,
        require: true
    },
    date:
    {
        type: String,
        require: true
    },
});
export const Reservation =  mongoose.model("Reservation", reservationSchema);
 