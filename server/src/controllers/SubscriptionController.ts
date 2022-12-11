import { Request, Response } from 'express';
import { Subscription } from '@models/Subscription';
import { Citi, Crud } from '../global'

export default class SubscriptionController implements Crud {

    async create(request: Request, response: Response){
        const {firstName, phoneNumber, email, company, partnersNumber, segment, solutionDescribe, site} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(firstName, phoneNumber, email, company, partnersNumber, segment, solutionDescribe, site);
        if(isAnyUndefined) return response.status(400).send();

        const newSubscription = {firstName, phoneNumber, email, company, partnersNumber, segment, solutionDescribe, site};
        const {httpStatus, message} = await Citi.insertIntoDatabase(Subscription, newSubscription);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Subscription);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: subscriptionFound, message } = await Citi.findByID(Subscription, id); 
           
        if(!subscriptionFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Subscription, subscriptionFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {firstName, phoneNumber, email, company, partnersNumber, segment, solutionDescribe, site} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(firstName, phoneNumber, email, company, partnersNumber, segment, solutionDescribe, site, id);
        if(isAnyUndefined) return response.status(400).send();

        const subscriptionUpdate = {firstName, phoneNumber, email, company, partnersNumber, segment, solutionDescribe, site };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Subscription, id, subscriptionUpdate);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}