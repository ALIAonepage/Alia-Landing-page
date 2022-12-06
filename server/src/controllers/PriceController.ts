import { Price } from '@models/Price';
import { Request, Response } from 'express';
import { Citi, Crud } from 'src/global';

export default class PriceController implements Crud{

    async create(request: Request, response: Response){
        const {firstPrice, modifiedPrice} = request.body;

        // checking values to continue process
        const isAnyUndefined = Citi.areValuesUndefined(firstPrice, modifiedPrice);
        if (isAnyUndefined) return response.status(400).send();

        // posting values into database
        const newPrice = { firstPrice, modifiedPrice };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Price, newPrice);

        // return message
        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Price);
        
        // return message and requested values
        return response.status(httpStatus).send(values);
    }

    async update(request: Request, response: Response){
        const {id} = request.params;
        const {firstPrice, modifiedPrice} = request.body;

        // checking values to continue process
        const isAnyUndefined = Citi.areValuesUndefined(id, firstPrice, modifiedPrice);
        if (isAnyUndefined) return response.status(400).send();

        // updating selected value
        const updatedPrice = {firstPrice, modifiedPrice};
        const {httpStatus, messageFromUpdate} = await Citi.updateValue(Price, id, updatedPrice);

        // return message
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    async delete(request: Request, response: Response){
        const {id} = request.params;
        
        // checking in order to continue process
        const {value: priceFound, message} = await Citi.findByID(Price, id);
        if (!priceFound) return response.status(400).send({ message });

        // deleting selected value
        const {httpStatus, messageFromDelete} = await Citi.deleteValue(Price, priceFound);

        // return message
        return response.status(httpStatus).send({ messageFromDelete });
    }

}