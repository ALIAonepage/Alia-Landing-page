import { Request, Response } from 'express';
import { Partners } from '@models/Partners';
import { Citi, Crud } from '../global'

export default class PartnersController implements Crud {

    async create(request: Request, response: Response){
        const {imagePartner1, imagePartner2} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(imagePartner1, imagePartner2);
        if(isAnyUndefined) return response.status(400).send();

        const newPartner = {imagePartner1, imagePartner2};
        const {httpStatus, message} = await Citi.insertIntoDatabase(Partners, newPartner);

        return response.status(httpStatus).send({ message });
    }

    
}