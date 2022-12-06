import express from 'express';
import UserController from '@controllers/UserController'
import PriceController from '@controllers/PriceController';

const routes = express.Router();
const userController = new UserController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

// model Price
const priceController = new PriceController();
routes.post('/price', priceController.create);
routes.get('/price', priceController.get);
routes.delete('/price/:id', priceController.delete);
routes.put('/price/:id', priceController.update);

export default routes;