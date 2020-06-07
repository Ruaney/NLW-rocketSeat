import {Request, Response} from 'express';
import knex from '../database/connection';


class ItemsController {
    async index(request: Request, response: Response){
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return{
                id: item.id,
                tittle: item.tittle,
                image_url: `http://192.168.0.107:3333/uploads/${item.image}` //http://localhost:3333/uploads/${item.image}
            }
        })
    
        return response.json(serializedItems);
    };
}
export default ItemsController;