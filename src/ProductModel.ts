import * as ds from "./DataStore";
import { DataStore } from './DataStore';

export class ProductModel
{    
    private db: DataStore;

    constructor()
    {
        this.db = new ds.DataStore();
        this.db.Execute(
            'create table if not exists product (id_product integer primary key, name text not null)');
                
        this.db.Execute('insert into product (name) values ("test1")')
    }

    public GetAll(callback)
    {
        this.db.GetAll('select * from product', function(results) {
            callback(results);
        })
    }

    public GetById(id:number, callback)
    {
        let query = `select * from product where id_product = ${id}`;
        this.db.Get(query, function(prod) {
            callback(prod);
        })
    }

    public Add(product, callback)
    {
        let name = product.name;
        let query = `insert into product (name) values ("${name}")`;
        this.db.GetExecuteLastId(query, (lastId)=>{
            callback(lastId);
        })        
    }

    public Clear(callback)
    {
        this.db.Execute("delete from product");
    }
}

