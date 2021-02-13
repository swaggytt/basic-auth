const { json } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
const Routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/api", Routes);

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.listen(PORT, () => {
  console.log("Start server...");
});
