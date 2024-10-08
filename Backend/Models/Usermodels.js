import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    lastlogin: {
        type: Date,
        default: Date.now,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    resetpasswordToken: String,
    resetpasswordExpire: Date,
    vertificationToken: String,
    vertificationExpire: Date,

}, { timestamps: true });

 const User = mongoose.model('User', userSchema);

 export default User;