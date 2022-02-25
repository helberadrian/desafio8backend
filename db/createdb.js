const { base } = require("./conectiondb");
const knex = require("knex")(base);

knex.schema.createTable('productos', (table) => {
    table.increments('id')
    table.string('nombre')
    table.integer('precio')
    table.integer("cantidad")
  })
  .then(() => console.log("Tabla creada con exito..."))
  .catch((error) => {console.log(error)})
  .finally(() =>{
      knex.destroy();
  });