const exrpess = require("express");
const router = exrpess.Router();

const authController = require("../controllers/auth.controller");

router.post("/login", authController.login);

module.exports = router;