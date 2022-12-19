import React from "react";
import { useState, useEffect } from "react";
import { StagesContainer, StyledStages, ContainerTag, Components, StagesIcon, StagesTitle} from "./styles";
import { RecStages } from "../../assets";
import axios from "axios";

type StagesProps = {
    icon: string;
    title: string;
}

export const StagesTag = ({icon, title}: StagesProps) => {
    
    return(
        <ContainerTag>
            <StagesIcon>
                <img src={icon}></img>
            </StagesIcon>
            <StagesTitle>{title}</StagesTitle>
        </ContainerTag>
    );

}

export const StagesComponent: React.FC = () => {

    const [icon, setIcon] = useState('');
    const [title, setTitle] = useState('');

    const [step, setStep] = useState<StagesProps[]>([]);
    const [stepsList, setStepsList] = useState<[]>([]);
    
    useEffect(() => {
        axios.get('http://localhost:3001/steps')
         .then(res => {
            const dataFromGet = res.data;

            setStepsList(dataFromGet)

        })
         .catch(err => {console.log(err)})
    
    }, [])

    return(
        <StyledStages>
            <StagesContainer>
                <h1>Etapas</h1>
                <img src={RecStages}></img>
                <Components>
                    {stepsList.map((step) => (
                        <StagesTag key={step['id']} icon={step['stepsImage']} title={step['stepsDescription']}/>
                    ))}
                </Components>
          </StagesContainer>
        </StyledStages>
    );

}