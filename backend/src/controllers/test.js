// Esto es una funcion de prueba para el endpoint
function testFunction(req, res) {
  console.log("Se ha ejecutado el endpoint");

  res.status(200).send({ msg: "Todo OK" });
}

module.exports = {
  testFunction,
};