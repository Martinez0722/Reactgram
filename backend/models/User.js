import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
        profileimage: String,
        bio: String,
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('user', userSchema)

module.exports = User;