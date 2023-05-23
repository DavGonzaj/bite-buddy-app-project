// const express = require("express");

// const router = express.Router();

const Product = require("../models/buddy.model");

// router.get("/products", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).send({ data: products });
//   } catch (err) {
//     res.status(400).send({ error: err });
//   }
// });

module.exports = (app) => {
  app.get("/api/testing", ProductController.apiTest);
  app.get("/api/products", ProductController.getAll);
  app.get("/api/products/:id", ProductController.getOne);
  app.post("/api/products", ProductController.addStore);
  app.put("/api/products/:id", ProductController.updateStore);
  app.delete("/api/stores/:id", ProductController.deleteStore);
};
