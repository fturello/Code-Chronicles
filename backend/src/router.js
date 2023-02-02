const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const activitieControllers = require("./controllers/activitieControllers");

router.get("/activities", activitieControllers.browse);
router.get("/activities/:id", activitieControllers.read);

const popularControllers = require("./controllers/popularControllers");

router.get("/populars", popularControllers.browse);
router.get("/populars/:id", popularControllers.read);

const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/items", itemControllers.add);

module.exports = router;
