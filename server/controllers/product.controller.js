const { Product } = require("../models/productModel");

module.exports.apiTest = (req, res) => {
  res.json("ok");
};

//get all
module.exports.getAll = (req, res) => {
  Product.find()
    .then((allProducts) => res.json(allProducts))
    .catch((err) => res.status(400).json(err));
};

//get one
module.exports.getOne = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((oneProduct) => res.json(oneProduct))
    .catch((err) => res.status(400).json(err));
};

//create
module.exports.addProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.status(400).json(err));
};

//update
module.exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((err) => res.status(400).json(err));
};

//delete
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((message) => res.json(message))
    .catch((err) => res.status(400).json(err));
};
