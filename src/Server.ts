"use strict";

import * as express from "express";
//import morgan from "morgan";

export class Server
{
    public app: any; 

    constructor()
    {
        this.app = express();        

        this.InitMiddleware();
        this.InitRouter();
    }

    public static CreateServer(): Server
    {
        return new Server();
    }

    InitMiddleware()
    {
//         this.app.use(morgan('dev'));
    }

    InitRouter()
    {
        this.app.get('/', function(req, res) {		
            res.status(200).json({'x': 'y12345'});		
        });        
    }

    Listen(port:number)
    {
        this.app.listen(port);
    }
}
