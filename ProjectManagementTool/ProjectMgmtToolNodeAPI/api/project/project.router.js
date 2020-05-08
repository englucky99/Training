const projectController = require("./project.controller");

const router= require("express").Router();

router.get("/",projectController.getAll);
router.post("/add",projectController.create);
router.post("/:id",projectController.updateProject);
router.get("/:id",projectController.getProjectById);
router.delete("/:id",projectController.deleteProject);

module.exports=router;