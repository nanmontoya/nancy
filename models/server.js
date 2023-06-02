let express = require("express");


class Server
{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routes();
        this.middlewares();


    }

    middlewares(){
        this.app.use(express.static("public"));

        //View engine
        this.app.set('view engine', 'ejs');

    }
    routes(){
        this.app.get("/Hola", (req, res) => {
            res.send("<h1>Hola mundo!</h1> <br> <a href='index.html'>Regresar al Inicio</a>");
        });

        this.app.get("/saludo", (req, res) => {
            let nombre = req.query.nombre;
            res.render("vista1", {nombre: nombre});
        });

    }
    listen(){
        this.app.listen(this.port, () => {
            console.log("http://127.0.0.2:" + this.port);
        });

    }
}

module.exports = Server;
