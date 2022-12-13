import React from "react";
import { StagesContainer, StyledStages, ContainerTag, Components, StagesIcon, StagesTitle} from "./styles";
import { RecStages } from "../../assets";

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
    return(
        <StyledStages>
            <StagesContainer>
                <h1>Etapas</h1>
                <img id="RecStages" src={RecStages}/>
                <Components>
                    <StagesTag icon={"img"} title={"texto"}/>
                    <StagesTag icon="img" title="texto"/>
                    <StagesTag icon="img" title="texto"/>
                    <StagesTag icon="img" title="texto"/>
                </Components>
          </StagesContainer>
        </StyledStages>
    );

}