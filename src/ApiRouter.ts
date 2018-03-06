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
            product.GetAll((err, results) => {
                res.status(200).json({'products': results});
            });
        });

        this.expressRouter.get('/product/:id_product', function(req, res, next) {
            product.GetById(req.params.id_product, (err, prod) => {
                res.status(200).json(prod);
            })
        })

        this.expressRouter.put('/product', function(req, res) {
            product.Add(req.body, (lastId) => {
                product.GetById(lastId, (err, prod) => {
                    res.status(201).json(prod);
                })
            });
        })

        this.expressRouter.post('/product/:id_product', function(req, res) {
            product.Update(req.params.id_product, req.body, (err) => {
                res.status(200).json();
            });
        })        

        this.expressRouter.delete('/product/:id_product', function(req, res) {
            product.Delete(req.params.id_product, (err) => {
                if(err)
                    res.status(204).json();
                else
                    res.status(200).json();
            });
        })        
    }
    
    
}