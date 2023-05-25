const StoreController = require("../controllers/store.controller");

module.exports = (app) => {
  app.get("/api/testing", StoreController.apiTest);
  app.get("/api/stores", StoreController.getAll);
  app.get("/api/stores/:id", StoreController.getOne);
  app.post("/api/stores", StoreController.addStore);
  app.put("/api/stores/:id", StoreController.updateStore);
  app.delete("/api/stores/:id", StoreController.deleteStore);
};
