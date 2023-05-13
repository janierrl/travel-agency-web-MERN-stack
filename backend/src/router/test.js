const { Router } = require("express");
const testController = require("../controllers/test");      // Se importa el controlador de prueba que es la funcion del endpoint

const router = Router();

router.post("/test", testController.testFunction);     // Endpoint con la respectiva funcion

module.exports = router;