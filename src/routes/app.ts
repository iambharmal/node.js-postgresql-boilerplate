const { Router } = require("express");
const router = Router();
const auth = require("../middleware/auth.ts");
const homeController = require("../controllers/HomeController.ts");


router.get('/home/test', homeController.test)
router.get('/home/test-db', homeController.testDb)
router.get('/home/test-jwt', auth, homeController.authenticateToken)

module.exports = router;
    