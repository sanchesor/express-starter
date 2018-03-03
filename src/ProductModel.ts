export class ProductModel
{    
    public GetAll()
    {
        return [
                {'id':1, name:'p1'},
                {'id':2, name:'p2'}
            ];
    }

    public GetById(id:number)
    {
        if(id==1) return  {'id':1, name:'p1'};
        else return {'id':2, name:'p2'};
    }
}

