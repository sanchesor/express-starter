"use strict";

import * as express from "express";
import * as morgan from "morgan";
import * as apiRouter from "./ApiRouter"

export class Server
{
    public app: any; 
    private router: apiRouter.ApiRouter;

    constructor()
    {
        this.app = express();        

        this.InitMiddleware();
        this.InitRouter();
    }

    InitMiddleware()
    {
         this.app.use(morgan('dev'));
    }

    InitRouter()
    {        
        this.router = new apiRouter.ApiRouter();
        this.router.Register(this, '/api');
    }

    Listen(port:number)
    {
        this.app.listen(port);
    }
}
