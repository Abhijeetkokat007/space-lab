import express from "express";
import { uploadFiles } from "../middlewares/multer.js";
import { createPost } from "../controllers/post.js";


const router = express.Router();

router.post("/cratepost", uploadFiles, createPost);



export default router;
