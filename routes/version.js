import express from "express";
import {updateVersion, getVersion} from "../controllers/version.js";

const router = express.Router();

router.get('/', getVersion);
router.put('/:id', updateVersion);

export default router;