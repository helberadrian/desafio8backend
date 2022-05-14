const Usuarios = require("../class/user")
const usuario = new Usuarios();

export function autenticar(nombre) {
    try {
        const datos = usuario.getUserName(nombre);
    } catch (error) {
        throw new Error('error en la autenticacion')
    }
}

export function requiereAutenticacion(req, res, next) {
    if (req.session.user) {
        next()
    } else {
        res.status(401).json({ msg: 'este recurso requiere autenticacion' })
    }
}