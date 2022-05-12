const {Router} = require("express");
const router = Router();
const Contenedor = require("../class/class")
const producto = new Contenedor();

// Login
const auth = require("../auth/autenticar");

// Archivos y Normalizr
const fs = require("fs");

// Faker
import fakergenerate from "./faker"

// GET RAIZ
router.get("/", (req, res) => {
    res.json({
        "Aviso": "Servidor Listo"
    });
});

// GET
router.get("/productos", (req, res) => {
    res.json(producto.getAll());
});

// GET ID
router.get("/productos/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    res.json(producto.getID(id));
});
    
// POST
router.post("/productos", (req, res) => {
    const productoNuevo = req.body;

    if (producto.agregarProducto(productoNuevo) == true){
        res.send(console.log("Producto agregado con exito..."))
    } else{
        res.send(console.log("Ocurrio un error, producto no agregado..."))
    }
});

// PUT
router.put("/productos/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const productoNuevo = req.body;

    if (producto.modificarProducto(id, productoNuevo) == true){
        res.send(console.log("Producto modificado con exito..."))
    } else{
        res.send(console.log("Ocurrio un error, producto no modificado..."))
    }
});

// DELETE
router.delete("/productos/:id", (req, res) =>{
    const id = parseInt(req.params.id);

    if (producto.deleteID(id) == true){
        res.send(console.log("Producto eliminado con exito..."))
    } else{
        res.send(console.log("Ocurrio un error, producto no eliminado..."))
    }
});

// MENSAJES
router.post("/mensaje/", async (req, res) => {
    try {
        mensaje = req.body;

    } catch {
        
    }
})

// FAKER
router.post("/productos-test/", (req, res) => {
    const id = this.length(producto.getAll())
    const random_product = fakergenerate(id)

    if (producto.agregarProducto(random_product) == true){
        res.send(console.log("Productos agregado con exito..."))
    } else{
        res.send(console.log("Ocurrio un error, productos no agregados..."))
    }
})

// LOGIN
router.post('/login', (req, res) => {
    const datos = req.body;
    const { usuario, password } = datos;
    try {
        auth.autenticar(usuario, password);
    } catch (error) {
        return res.status(401).json({ msg: error.message });
    }
    req.session.user = {
        usuario
    }
    return res.render("../public/index.html");
})

router.get('/logout', (req, res) => {
    if (req.session.user) {
        req.session.destroy()
    }
    res.render("../public/index.html");
})

module.exports = router;
