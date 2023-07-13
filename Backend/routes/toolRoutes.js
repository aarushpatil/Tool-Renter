const express = require("express");

//get functions from toolController.js
const {
  getTools,
  getTool,
  createTool,
  deleteTool,
  updateTool,
} = require("../controllers/toolController");

//store routes to export later
const router = express.Router();

//Get all tool posts
router.get("/", getTools);

//Retrieve one tool post
router.get("/:id", getTool);

//Create tool post
router.post("/", createTool);

//Delete tool post
router.delete("/:id", deleteTool);

//Edit tool post
router.patch("/:id", updateTool);

//exporting routes
module.exports = router;
