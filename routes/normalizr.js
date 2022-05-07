const fs = require("fs");
const normaliz = require("normalizr");
const util = require("util")

const normalize = normaliz.normalize;
const denormalize = normaliz.denormalize;
const schema = normaliz.schema;



// Funciones
function esquemas(){
    // Esquemas particulares
    const texto = new schema.Entity("texto");
    const email = new schema.Entity("email");
    const nombre = new schema.Entity("nombre");
    const autor = new schema.Entity("autor", {idAttribute: email, nombre: nombre});

    // Esquema principal
    const mensajes = new schema.Entity("mensajes", {
        texto: texto, autor: autor
    })

    return mensajes;
}

function normalizeData(data){
    const mensajes = esquemas();
    const resultado = normalize(data, mensajes)
    return JSON.stringify(resultado)
}

function denormalizeData(data){

}

function print(objeto){
    console.log(util.inspect(objeto,false,12,true))
}

