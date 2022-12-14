import React from "react";
import { useEffect, useState } from "react";
import { StagesContainer, StyledStages, ContainerTag, Components, StagesIcon, StagesTitle} from "./styles";
import { RecStages } from "../../assets";
import axios from "axios";
import apiAxios from "../../services/api";

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

    const handleGet = async () => {
        await apiAxios.get('/steps')
         .then(res => {console.log(res)})
         .catch(err => {console.log(err)})
    
    }

    return(
        <StyledStages>
            <StagesContainer>
                <h1>Etapas</h1>
                <img id="RecStages" src={RecStages}/>
                <Components>
                    <StagesTag icon={icon} title={title}/>
                    <StagesTag icon={icon} title={title}/>
                    <StagesTag icon={icon} title={title}/>
                    <StagesTag icon={icon} title={title}/>
                </Components>
          </StagesContainer>
        </StyledStages>
    );

}