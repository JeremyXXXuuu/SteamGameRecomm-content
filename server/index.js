import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/routes.js";
import { createProxyMiddleware } from "http-proxy-middleware";
import axios from "axios";
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://store.steampowered.com",
    changeOrigin: true,
  })
);
var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use("/recom", routes);

const CONNECTION_URL =
  "mongodb+srv://jeremy:root@cluster0.5ei45.mongodb.net/database?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// axios
//   .get("https://store.steampowered.com/api/appdetails?appids=10&cc=us")
//   .then((res) => {
//     console.log(res.data);
//   });
