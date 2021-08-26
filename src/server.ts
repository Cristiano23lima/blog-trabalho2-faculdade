const app = require("./app");
const db = require("../models");

const PORT = process.env.PORT || 3300;


db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log("Servidor iniciado com sucesso"));
});