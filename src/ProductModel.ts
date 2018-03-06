import * as ds from "./DataStore";
import { DataStore } from './DataStore';

export class ProductModel
{    
    private db: DataStore;

    constructor()
    {
        this.db = new ds.DataStore();
        this.db.Execute(
            'create table if not exists product (id_product integer primary key, name text not null)', null);
                
    }

    public GetAll(callback)
    {
        this.db.GetAll('select * from product', function(err, results) {
            callback(err, results);
        })
    }

    public GetById(id:number, callback)
    {
        let query = `select * from product where id_product = ${id}`;
        this.db.Get(query, function(err, prod) {
            callback(err, prod);
        })
    }

    public Add(product, callback)
    {
        let name = product.name;
        let query = `insert into product (name) values ("${name}")`;
        this.db.GetExecuteLastId(query, (err, lastId)=>{
            callback(err, lastId);
        })        
    }

    public Update(id:number, product, callback)
    {
        let name = product.name;

        let query = `update product set name = "${name}" where id_product = ${id}`;
        this.db.Execute(query, (err)=>{
            callback(err);
        })        
    }    

    public Delete(id:number, callback)
    {
        let query = `delete from product where id_product = ${id}`;
        this.db.Execute(query, (err)=>{
            callback(err);
        })        
    }    
}

