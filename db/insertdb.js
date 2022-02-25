const { base } = require("./conectiondb");
const knex = require("knex")(base);

const product = [
    {nombre: "Vaso", precio: 100, cantidad: 20},
    {nombre: "Cepillo", precio: 80, cantidad: 10},
    {nombre: "Tenedor", precio: 20, cantidad: 100},
    {nombre: "Cuchillo", precio: 20, cantidad: 80},
    {nombre: "Jarra", precio: 120, cantidad: 15}
]

knex("productos").insert(product)
    .then(() => console.log("Se agregaron todos los productos..."))
    .catch((error) => {console.log(error); throw error})
    .finally(() =>{
        knex.destroy();
    });