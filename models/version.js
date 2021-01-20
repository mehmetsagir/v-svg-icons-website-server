import mongoose from "mongoose";

const versionSchema = mongoose.Schema({
    version: String,
})

const Version = mongoose.model("Version", versionSchema)

export default Version;