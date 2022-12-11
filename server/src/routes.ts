import express from 'express';
import UserController from '@controllers/UserController'
import PriceController from '@controllers/PriceController';
import PartnersController from '@controllers/PartnersController'

const partnersController = new PartnersController();
import SubscriptionController from '@controllers/SubscriptionController'
import StepsController from '@controllers/StepsController'

const routes = express.Router();
const userController = new UserController();
const stepsController = new StepsController();
const subscriptionController = new SubscriptionController();

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
//Routes Partners
routes.post('/partners', partnersController.create);
routes.get('/partners', partnersController.get);
routes.delete('/partners/:id', partnersController.delete);
routes.put('/partners/:id', partnersController.update);

routes.post('/subscription', subscriptionController.create);
routes.get('/subscription', subscriptionController.get);
routes.delete('/subscription/:id', subscriptionController.delete);
routes.put('/subscription/:id', subscriptionController.update);

routes.post('/steps', stepsController.create);
routes.get('/steps', stepsController.get);
routes.delete('/steps/:id', stepsController.delete);
routes.put('/steps/:id', stepsController.update);

export default routes; 
