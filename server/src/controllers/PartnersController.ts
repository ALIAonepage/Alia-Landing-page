import { Request, Response } from 'express';
import { Partners } from '@models/Partners';
import { Citi, Crud } from '../global'

export default class PartnersController implements Crud {

    async create(request: Request, response: Response){
        const {imagePartner} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(imagePartner);
        if(isAnyUndefined) return response.status(400).send();

        const newPartner = {imagePartner};
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
        const {imagePartner} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(imagePartner, id);
        if(isAnyUndefined) return response.status(400).send();

        const partnersUpdated = {imagePartner};

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Partners, id, partnersUpdated);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}
