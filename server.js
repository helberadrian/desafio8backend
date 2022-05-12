// Server
const express = require("express");
const productos = require("./routes/app");
const morgan = require("morgan");
const PORT = 3000;

// Cookies y Sessions
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoStore = require("connect-mongo");
const advancedOptions = {useNewUrlParser: true, useUnifiedTopology: true};

// settings
const app = express();
app.set("json spaces", 2);
app.use(require("./routes/app"));

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname, + "./public"));
app.use("/api", productos);

app.use(cookieParser());
app.use(session({
    store: mongoStore.create({
        mongoUrl: "mongodb+srv://helberadrian:<password>@apirest.dtrba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        mongoOptions: advancedOptions
        }),
    secret: "shhhhhhhhhhhhhhhhhhhhh",
    resave: false,
    saveUninitialized: false
}))

// starting the server
const server = app.listen(PORT, () =>{
    console.log(`Servidor conectado en puerto ${server.address().port}`);
});