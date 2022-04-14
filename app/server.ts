import express, {Express, Request, Response, Application, Router} from "express";
import bodyParser from 'body-parser';
import pool from './dbConnect'
import router from "./routes/contactRoutes";

export default class Server {

    private app: Express;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended:true }));
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
    }

    private dbConnect(){
        pool.connect((err, client, done) => {
            if(err){
                console.log(err);
            }
            console.log('connected');
        })
    }

    private routerConfig() {
        this.app.get('/api', (req, res) => {
            res.json('api');
        })
        this.app.get('/contacts', router);
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}