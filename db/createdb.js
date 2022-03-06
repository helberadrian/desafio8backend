const knex = require("./conectiondb");

knex.schema.createTable('productos', (table) => {
    table.increments();
    table.string("nombre");
    table.integer("precio");
    table.integer("cantidad");
    table.timestamps();
  })
  .then((data) => console.log("Tabla creada con exito..."))
  .catch((error) => {console.log(error)})
  .finally(() =>{
      knex.destroy();
  });