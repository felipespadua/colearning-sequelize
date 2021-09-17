const { Router } = require("express");
const router = Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);


module.exports = router;