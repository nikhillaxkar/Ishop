const express = require("express");
const ColorController = require("../controller/color");
const ColorRouter = express.Router();


ColorRouter.get("/:id?", (req, res) => {
  const result = new ColorController().read(req.params.id);
  result
  .then((success) => {
    res.send(success);
  })
  .catch((error) => {
    res.send(error);
  });
});

ColorRouter.post("/create",
  
  (req, res) => {
  
  const data=req.body;

  const result = new ColorController().create(data);
  result
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      res.send(error);
    });
});
ColorRouter.delete("/delete/:id/:image_name", (req, res) => {
  const result = new ColorController().delete(req.params.id,req.params.image_name);
  result
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      res.send(error);
    });
});
ColorRouter.patch("/change-status/:id/:new_status", (req, res) => {
  const result = new ColorController().updateStatus(req.params.id,req.params.new_status);
  result
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      res.send(error);
    });
});
ColorRouter.put("/update/:id", 
  (req, res) => {

  const result = new ColorController().update(req.params.id,req.body,req.files?.image);
  result
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = ColorRouter;
