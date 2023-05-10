const mongoose = require("mongoose");
const { IP_SERVER, DB_NAME } = require("./constants");

const PORT = process.env.POST || 27017;

mongoose.connect(`mongodb://${IP_SERVER}:${PORT}/${DB_NAME}`, (error) => {
  if (error) throw error;
  else {
    console.log("Conexion exitosa");
  }
});
