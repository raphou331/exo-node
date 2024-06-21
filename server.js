require("dotenv").config({ path: "config.env" });
const express = require("express");
const routes = require("./route");
const mongoConnect = require("./connect");

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/", routes);

mongoConnect();

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
