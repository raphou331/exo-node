require("dotenv").config({ path: "config.env" });

const mongoose = require("mongoose");

const connectBDD = async () => {
  try {
    const connexion = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`connecté à :${connexion.connection.host}`);
    console.log(`connecté à la BDD:${connexion.connection.db.databaseName}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectBDD;
