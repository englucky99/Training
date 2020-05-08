const projectTaskController = require("./projectTask.controller");

const router= require("express").Router();

router.get("/:id",projectTaskController.getAll);
router.post("/add",projectTaskController.create);
router.post("/:id",projectTaskController.updateProjectTask);
router.get("/getProjectTaskById/:id",projectTaskController.getProjectTaskById);
router.delete("/:id",projectTaskController.deleteProject);

module.exports=router;