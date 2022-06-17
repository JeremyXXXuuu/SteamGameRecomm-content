const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const routes = require("./routes/routes.js");
const { errorHandler } = require("./middleware/errorMiddleware");
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// app.use(
//   "/api",
//   createProxyMiddleware({
//     target: "http://localhost:3000",
//     changeOrigin: true,
//   })
// );
// var corsOptions = {
//   origin: "http://localhost:3000",
// };

app.use(cors());
// app.get("/", async function (req, res) {
//   res.json({ msg: "This is CORS-enabled for all origins!" });
// });
app.use("/api/recom", routes);
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/game", require("./routes/gameRoutes"));
app.use("/api/game/test", require("./routes/userRecommRoutes"));
app.use("/api/userRecomm", require("./routes/recommendationRoutes"));

const CONNECTION_URL =
  // "mongodb+srv://jeremy:root@cluster0.5ei45.mongodb.net/database?retryWrites=true&w=majority";
  "mongodb://127.0.0.1:27017/database_DS50";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
app.use(errorHandler);
// axios
//   .get("https://store.steampowered.com/api/appdetails?appids=10&cc=us")
//   .then((res) => {
//     console.log(res.data);
//   });
