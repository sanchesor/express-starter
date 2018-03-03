import * as express from "express";
import * as server from "./Server"

export class ApiRouter
{
    private expressRouter: any;

    constructor()
    {
        this.expressRouter = express.Router();
        this.Route();
    }

    public Register(srv: server.Server, path: string)
    {
        srv.app.use(path, this.expressRouter);
    }

    private Route()
    {
        this.expressRouter.get('/', function(req, res, next) {
            res.status(200).json({'your request': {
                'baseUrl': req.baseUrl,
                'path': req.path}});
        })
    
    }
    
    
}