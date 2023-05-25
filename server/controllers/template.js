const { Store } = require("../models/store.model");

module.exports.apiTest = (req, res) => {
  res.json("ok");
};

//get all
module.exports.getAll = (req, res) => {
  Store.find()
    .then((allStores) => res.json(allStores))
    .catch((err) => res.status(400).json(err));
};

//get one
module.exports.getOne = (req, res) => {
  Store.findOne({ _id: req.params.id })
    .then((oneStore) => res.json(oneStore))
    .catch((err) => res.status(400).json(err));
};

//create
module.exports.addStore = (req, res) => {
  Store.create(req.body)
    .then((newStore) => res.json(newStore))
    .catch((err) => res.status(400).json(err));
};

//update
module.exports.updateStore = (req, res) => {
  Store.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedStore) => res.json(updatedStore))
    .catch((err) => res.status(400).json(err));
};

//delete
module.exports.deleteStore = (req, res) => {
  Store.deleteOne({ _id: req.params.id })
    .then((message) => res.json(message))
    .catch((err) => res.status(400).json(err));
};
