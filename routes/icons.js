import express from "express";
import {getIcons, createIcon, deleteIcon, updateIcon, updateViews} from "../controllers/icons.js";

const router = express.Router();

router.get('/', getIcons);
router.post('/', createIcon);
router.delete('/:id', deleteIcon);
router.put('/:id', updateIcon);
router.put('/updateView/:id', updateViews);

export default router;