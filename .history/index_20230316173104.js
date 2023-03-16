
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();

export class Server {


    constructor() {
        this.app = express();
        this.rutas = {
            dany: '/dany',
            usuarios: '/api/auth',
            eventos:'/api/eventos'
        }
        this.port = process.env.PORT || '8080'
        this.Middlewares();
        this.Rutas();
        this.bd();
    }

    Middlewares() {
        this.app.use(express.static('public'))
        this.app.use(cors())
        this.app.use(express.json())
    }
    Rutas() {
       
    }

    activarBack() {
        this.app.listen(this.port, () => {
            console.log(`APP running in ${this.port} `)
        })
    }
    async bd(){
        ConectarDB()
    }
}

const a = new Server();
a.activarBack();