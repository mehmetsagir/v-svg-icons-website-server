import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import iconsRoutes from './routes/icons.js';
import versionRoutes from './routes/version.js';
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/', iconsRoutes)
app.use('/version', versionRoutes)

const PORT = process.env.PORT || 5000;

mongoose
.connect(process.env.CONNECTION_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
})
.catch(error => {
    console.error(error.message)
})