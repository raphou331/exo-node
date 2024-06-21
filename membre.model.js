const mongoose = require("mongoose");

const membreSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Nom de la personne"],
  },
  email: {
    type: String,
    required: [true, "email de la personne"],
  },
  gender: {
    type: String,
    required: [true, "type de personne"],
  },
  birthdate: {
    type: Date,
    required: [true, "l année de naissance"],
  },
  country: {
    type: String,
    required: [true, "ajoute le pays"],
  },
  favorite_techno: {
    type: String,
    required: [true, "techno favori"],
  },
  job_title: {
    type: String,
    required: [true, "type de job"],
  },
  annual_salary: {
    type: Number,
  },
  last_login: {
    type: String,
    required: [true, "derniere connexion"],
  },
});
const membreModel = mongoose.model("membre", membreSchema);

module.exports = membreModel;
