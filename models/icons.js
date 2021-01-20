import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    viewsCount: Number,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Icon = mongoose.model("Icon", postSchema)

export default Icon;