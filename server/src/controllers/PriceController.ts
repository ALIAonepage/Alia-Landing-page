import { Price } from '@models/Price';
import { Request, Response } from 'express';
import { Citi, Crud } from 'src/global';

export default class PriceController implements Crud{

    async create(request: Request, response: Response){
        const {firstPrice, modifiedPrice} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(firstPrice, modifiedPrice);
        if (isAnyUndefined) return response.status(400).send();

        const newPrice = { firstPrice, modifiedPrice };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Price, newPrice);

        return response.status(httpStatus).send({ message });
    }

}