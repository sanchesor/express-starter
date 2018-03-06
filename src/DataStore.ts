import * as sqlite3 from 'sqlite3';

export class DataStore
{
    private db: any;

    constructor()
    {
        this.db = new sqlite3.Database('database.db');
    }

    public Execute(query:string, callback)
    {
        this.db.run(query, function(err) {
            if(callback != null)
                if(this != null)
                    callback(err, this.lastID);
                else
                    callback(err);
        });
    }

    public GetExecuteLastId(query:string, callback)
    {
        this.db.run(query, function(err) {
            if(callback != null)
                if(this != null)
                    callback(err, this.lastID);
                else
                    callback(err);
        });
    }    

    public GetAll(query:string, callback)
    {        
        this.db.all(query, (err, rows) => {            
            if(callback != null)
                callback(err, rows);            
        });        
    }

    public Get(query:string, callback)
    {        
        this.db.get(query, (err, row) => {            
            if(callback != null)
                callback(err, row);            
        });        
    }
}
