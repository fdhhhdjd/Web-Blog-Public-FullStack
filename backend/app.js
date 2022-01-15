const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//!router import
const auth = require("./Routes/authRoute");
const post = require("./Routes/postRoute");
const category = require("./Routes/categoriesRoute");
const upload = require("./Routes/UpLoadClound");
//!Link router Main
app.use("/api/auth", auth);
app.use("/api", upload);
app.use("/api/post", post);
app.use("/api/category", category);

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

//!Middleware for error
module.exports = app;
