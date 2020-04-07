module.exports = app => {
  const produto = require("../controllers/produto.controller.js");

  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/:id", produto.findAll);

  // Retrieve all published Tutorials
 // router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/produto/:id", produto.findOne);
/*
  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Create a new Tutorial
  router.delete("/", tutorials.deleteAll);
*/
  app.use('/api/empresa', router);
};
