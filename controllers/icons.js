import Icon from "../models/icons.js";

export const getIcons = async (req, res) => {
    try {
        const icons = await Icon.find();
        res.status(200).json(icons);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const createIcon = async (req, res) => {
    const newIcon = new Icon(req.body);
    try {
        await newIcon.save();   
        res.status(200).json({
            message: 1
        })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

export const deleteIcon = async (req, res) => {
    const {id : _id} = req.params;
    try{
        const icon = await Icon.findByIdAndRemove(_id);
        res.status(200).json({
            message: 1
        })
    }catch(error){
        res.status(409).json({
            message: error.message
        })
    }
}

export const updateIcon = async (req, res) => {
    const {id : _id} = req.params;
    const icon = req.body;
    try{
        const updatedPost = await Icon.findByIdAndUpdate(_id, icon, { new: true })
        res.json(updatedPost)
    }catch(error){
        res.status(409).json({
            message: error.message
        })
    }
}

export const updateViews = async (req, res) => {
    const {id : _id} = req.params;
    const icon = req.body;
    try{
        const updatedPost = await Icon.findByIdAndUpdate(_id, icon, { new: true })
        res.json(updatedPost)
    }catch(error){
        res.status(409).json({
            message: error.message
        })
    }
}

