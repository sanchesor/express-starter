import * as express from "express";
import * as server from "./Server";
import * as prod from "./ProductModel";
import { ProductModel } from './ProductModel';

export class ApiRouter
{
    private expressRouter: any;
    private productModel: any;

    constructor()
    {
        this.expressRouter = express.Router();
        this.productModel = new prod.ProductModel();        

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

        let product = this.productModel;
        this.expressRouter.get('/product', function(req, res, next) {            
            product.GetAll((results) => {
                res.status(200).json({'products': results});
            });
        });

        this.expressRouter.get('/product/:id_product', function(req, res, next) {
            product.GetById(req.params.id_product, (prod) => {
                res.status(200).json(prod);
            })
        })

        this.expressRouter.put('/product', function(req, res) {
            product.Add(req.body, (lastId) => {
                product.GetById(lastId, (prod) => {
                    res.status(200).json(prod);
                })
            });
        })

    }
    
    
}