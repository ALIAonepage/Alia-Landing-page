import React from "react";
import { StagesTitle, StagesIcon, StyledStages } from "./styles";

type StagesProps = {
    icon: string;
    title: string;
}

export const StagesComponent = ({icon, title}: StagesProps) => {
    return(
        <StyledStages>
            <StagesIcon>{icon}</StagesIcon>
            <StagesTitle>{title}</StagesTitle>
        </StyledStages>
    );

}