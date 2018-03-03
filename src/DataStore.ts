import * as sqlite3 from 'sqlite3';

export class DataStore
{
    private db: any;

    constructor()
    {
        this.db = new sqlite3.Database('database.db');
    }

    public Execute(query:string)
    {
        this.db.run(query);
    }

    public GetExecuteLastId(query:string, callback)
    {
        this.db.run(query, function(err) {
            callback(this.lastID)
        });
    }    

    public GetAll(query:string, callback)
    {        
        this.db.all(query, (err, rows) => {            
            callback(rows);            
        });        
    }

    public Get(query:string, callback)
    {        
        this.db.get(query, (err, row) => {            
            callback(row);            
        });        
    }
}
