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

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Partners);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: partnersFound, message } = await Citi.findByID(Partners, id); 
           
        if(!partnersFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Partners, partnersFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {imagePartner1, imagePartner2} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(imagePartner1, imagePartner2, id);
        if(isAnyUndefined) return response.status(400).send();

        const partnersUpdated = {imagePartner1, imagePartner2};

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Partners, id, partnersUpdated);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}
