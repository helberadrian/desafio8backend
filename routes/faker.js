const faker = require("faker");
faker.locale = "es";

const { random, commerce } = faker;

function fakergenerate(id){
    const productos = [];
    
    for (let i=0; i<=5; i++){
        id = id+1;
        productos.append({"id": id, "nombre": commerce.productName(), "precio": commerce.price(), "cantidad": random.numeric(3)});
    }

    return productos;
}

export default function fakergenerate();

