const app = require("./app");
const db = require("../models");

const PORT = 3300;


db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log("Servidor iniciado com sucesso"));
});