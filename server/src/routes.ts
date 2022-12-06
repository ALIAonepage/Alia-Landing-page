import express from 'express';
import UserController from '@controllers/UserController'
import PartnersController from '@controllers/PartnersController';

const routes = express.Router();
const userController = new UserController();
const partnersController = new PartnersController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

//Routes Partners
routes.post('/partners', partnersController.create);


export default routes;