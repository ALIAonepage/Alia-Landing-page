import express from 'express';
import UserController from '@controllers/UserController'
import SubscriptionController from '@controllers/SubscriptionController'

const routes = express.Router();
const userController = new UserController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

const subscriptionController = new SubscriptionController();
routes.post('/subscription', subscriptionController.create);
routes.get('/subscription', subscriptionController.get);
routes.delete('/subscription/:id', subscriptionController.delete);
routes.put('/subscription/:id', subscriptionController.update);


export default routes;