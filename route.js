const express = require("express");
const membreModel = require("./membre.model");

const route = express.Router();

/* methode pour mettre la liste */
route.get("/listeMembre", async (req, res) => {
  try {
    const listeMembre = await membreModel.find({});
    res.status(200).json(listeMembre);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});
route.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const user = await membreModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});
/* mise a jour des imformation */
route.put("/modifierUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const modifierListe = await membreModel.findByIdAndUpdate(id, req.body);
    if (!modifierListe) {
      return res.status(400).json({
        message: `je ne trouve pas la personne ${id}`,
      });
    }
    res.status(200).json(modifierListe);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

route.post("/creerListe", async (req, res) => {
  try {
    const liste = await membreModel.create(req.body);
    console.log(req.body);
    res.status(200).json(liste);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});
/* route pour supprimer une liste de la base de données */
route.delete("/supprimerUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const supprimerListe = await membreModel.findByIdAndDelete(id);
    if (!supprimerListe) {
      return res.status(404).json({
        message: `je n ai pas trouvé la liste avec l 'id${id}`,
      });
    }
    res.status(200).json(supprimerListe);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});
module.exports = route;
