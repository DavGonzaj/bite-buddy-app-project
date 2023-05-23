const express = require("express");

const router = express.Router();

const Product = require("../models/buddy.model");

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send({ data: products });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = (app) => {
  app.get("/api/testing", StoreController.apiTest);
  app.get("/api/products", StoreController.getAll);
  app.get("/api/products/:id", StoreController.getOne);
  app.post("/api/stores", StoreController.addStore);
  app.put("/api/stores/:id", StoreController.updateStore);
  app.delete("/api/stores/:id", StoreController.deleteStore);
};
