import React from "react";
import { StagesTitle, StagesIcon, StyledStages } from "./styles";

type StagesProps = {
    icon: string;
    title: string;
}

export const StagesComponent = ({icon, title}: StagesProps) => {
    return(
        <StyledStages>
            <StagesIcon>
                <img src={icon}></img>
            </StagesIcon>
            <StagesTitle>{title}</StagesTitle>
        </StyledStages>
    );

}