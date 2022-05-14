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

knex.schema.createTable('usuarios', (table) => {
    table.increments();
    table.string("username");
    table.integer("email");
    table.integer("password");
  })
  .then((data) => console.log("Tabla creada con exito..."))
  .catch((error) => {console.log(error)})
  .finally(() =>{
      knex.destroy();
  });