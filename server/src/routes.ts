import express from 'express'

import PointsController from './Controller/PointsController';
import ItemsController from './Controller/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/', (request, response) =>{
    return response.json({message: "oo karai"});
});

routes.get('/items', itemsController.index);

routes.get('/points',  pointsController.index);
routes.post('/points',  pointsController.create);
routes.get('/points/:id',  pointsController.show);

export default routes;




/* basic review
app.post('/users', (request, response) =>{
    const data = request.body;
    //console.log(data); //debug
    const user = {
        name: data.name,
        email: data.email,
    };

    return response.json(user);
})

app.get('/users/:id', (request, response) =>{
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filterUsers = search ? users.filter(user => user.includes(search)) : users;
    
    return response.json(filterUsers);
})
*/