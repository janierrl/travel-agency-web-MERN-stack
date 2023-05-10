const mongoose = require("mongoose");
const app = require("./app");
const { IP_SERVER, DB_NAME } = require("./constants");

const PORT = process.env.POST || 27017;

mongoose.connect(`mongodb://${IP_SERVER}:${PORT}/${DB_NAME}`, (error) => {
  if (error) throw error;
  else {
    app.listen(PORT, () => {
        console.log("######################");
        console.log("###### API REST ######");
        console.log("######################");
        console.log(`http://${IP_SERVER}:${PORT}`);
      });
  }
});
