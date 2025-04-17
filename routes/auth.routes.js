const exrpess = require("express");
const router = exrpess.Router();

const authController = require("../controllers/auth.controller");

router.post("/login", authController.login);
router.get("/google/callback", authController.googleLogin)

module.exports = router;

// Google redirect link
// https://accounts.google.com/o/oauth2/auth?client_id=849620341343-5do89er958dp7c8pn0v23bssu99fcqua.apps.googleusercontent.com&&redirect_uri=http://localhost:3000/api/auth/google/callback&response_type=code&scope=email%20profile&access_type=offline
