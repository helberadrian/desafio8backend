const { base } = require("../db/conectiondb");
const knex = require("knex")(base);

module.exports = class Usuarios {
    constructor(usuarios) {
        this.usuarios = usuarios;
        }

    getUserName(usuario){
        knex("usuarios").select("username").where({usuario: usuario})
        .then((element) => {
            const usuario = element.username;
            const password = element.password;
            return {usuario: usuario, password: password};
        })
        .catch((error) => {console.log(error); throw error})
        .finally(() =>{
            knex.destroy();
        });
    }
}