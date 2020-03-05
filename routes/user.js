const express = require("express");
const router = express.Router();

const { sayHi } = require("../controllers/user");
//Route method
router.get("/", sayHi);
module.exports = router;
