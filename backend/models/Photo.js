import mongoose from "mongoose";
import { Schema } from "mongoose";

const photoSchema = new Schema(
    {
        image: String,
        title: String,
        likes: Array,
        comments: Array,
        userId: mongoose.ObjectId,
        userName: String,

    },
    {
        timeStamp: true
    }
)

const Photo = mongoose.model("Photo", photoSchema)

module.exports = Photo;