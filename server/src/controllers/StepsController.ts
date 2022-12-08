import { Steps } from '@models/steps';
import { Request, Response } from 'express';
import { Citi, Crud } from '../global'

export default class StepsController implements Crud {

    async create(request: Request, response: Response){
        const {stepImage1, stepDescription1, stepImage2, stepDescription2, stepImage3, stepDescription3 , stepImage4, stepDescription4} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(stepImage1, stepDescription1, stepImage2, stepDescription2, stepImage3, stepDescription3 , stepImage4, stepDescription4);
        if(isAnyUndefined) return response.status(400).send();

        const newSteps = { stepImage1, stepDescription1, stepImage2, stepDescription2, stepImage3, stepDescription3 , stepImage4, stepDescription4 };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Steps, newSteps);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Steps);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: StepsFound, message } = await Citi.findByID(Steps, id); 
           
        if(!StepsFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Steps, StepsFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {stepImage1, stepDescription1, stepImage2, stepDescription2, stepImage3, stepDescription3 , stepImage4, stepDescription4 } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(stepImage1, stepDescription1, stepImage2, stepDescription2, stepImage3, stepDescription3 , stepImage4, stepDescription4, id);
        if(isAnyUndefined) return response.status(400).send();

        const StepsWithUpdatedValues = { stepImage1, stepDescription1, stepImage2, stepDescription2, stepImage3, stepDescription3 , stepImage4, stepDescription4 };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Steps, id, StepsWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}