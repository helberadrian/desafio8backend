const { base } = require("../db/conectiondb");
const knex = require("knex")(base);

module.exports = class ListaProductos {
    constructor(productos) {
        this.productos = productos;
        }
    
    getAll(){
        knex("productos").select("*")
        .then((fila) => {
            for (const element of fila) {
                this.productos.push({id: element.id, nombre: element.nombre, precio: element.precio, cantidad: element.cantidad});
            }
            return this.productos;
        })   
        .catch((error) => {console.log(error); throw error})
        .finally(() =>{
            knex.destroy();
        });
    }

    getID(id){
        knex("productos").select("id").where({id: id})
        .then((element) => {
            this.productos.push(element)
            return this.productos;
        })
        .catch((error) => {console.log(error); throw error})
        .finally(() =>{
            knex.destroy();
        });
    }

    agregarProducto(nuevo){
        knex("productos").insert(nuevo)
        .then(() => { return true; })
        .catch((error) => {console.log(error); throw error})
        .finally(() =>{
            knex.destroy();
        });
    }

    modificarProducto(id, productoNuevo){
        knex("productos").where({id: id}).update(productoNuevo)
        .then(() => { return true; })
        .catch((error) => {console.log(error); throw error})
        .finally(() =>{
            knex.destroy();
        });
    }

    deleteID(id){
        knex("productos").where({id: id}).del()
        .then(() => { return true; })
        .catch((error) => {console.log(error); throw error})
        .finally(() =>{
            knex.destroy();
        });
    }
}