const toolData = require("../models/tool-data");
const mongoose = require("mongoose");


//Get all tool posts
const getTools = async (req, res) => {
    //get tools as an array and sort by recent posts
    const tools = await toolData.find({}).sort({ createdAt: -1 });
    res.status(200).json(tools);
};

//Retrieve one tool post
const getTool = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ Error: "Tool post cannot be found" });
    }
  
    const tool = await toolData.findById(id);
    if (!tool) {
      return res.status(404).json({ Error: "Tool post cannot be found" });
    }
    res.status(200).json(tool);
  };
  
//Create tool post
const createTool = async (req, res) => {
    const { name, description, category, quantity, price } = req.body;
    try {
      const tool = await toolData.create({ name, description, category, quantity, price });
      res.status(200).json(tool);
    } catch (error) {
      res.status(200).json({ error: error.message });
    }
  };


//Delete tool post
const deleteTool = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ Error: "Tool post cannot be found" });
    }
    const tool = await toolData.findByIdAndDelete(id);
    if (!tool) {
      return res.status(404).json({ Error: "Tool post cannot be found" });
    }
    res.status(200).json(tool);
  };
  

//Edit tool post
const updateTool = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(200).json({ Error: "Tool post cannot be found" });
    }
  
    const tool = await toolData.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
  
    if (!(await toolData.findById(id))) {
      return res.status(404).json({ Error: "Tool post cannot be found" });
    }
    res.status(200).json(tool);
};


module.exports = {getTools, getTool, createTool, deleteTool, updateTool}