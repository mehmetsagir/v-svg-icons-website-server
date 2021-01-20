import Version from "../models/version.js";

export const getVersion = async (req, res) => {
    try {
        const version = await Version.find();
        res.status(200).json(version);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const updateVersion = async (req, res) => {
    const {id : _id} = req.params;
    const version = req.body;
    try{
        const updatedVersion = await Version.findByIdAndUpdate(_id, version, { new: true })
        res.status(200).json(updatedVersion)
    }catch(error){
        res.status(409).json({
            message: error.message
        })
    }
}