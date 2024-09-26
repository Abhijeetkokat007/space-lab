import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectDb } from "./database/database.js";

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

const __dirname = path.resolve();

// app.get("/", (req, res) => {
//   res.send("Server is working");
// });

import userRoutes from "./routes/user.js";
import postRoutes from './routes/post.js'

app.use("/api", userRoutes);
app.use("/api", postRoutes);


const port = process.env.PORT || 3000;


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'))
  });
}


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDb();
});
