import React from "react";
import { HomeContainer, Components, StagesContainer } from './styles';
import { StagesComponent } from "../../components";
import { RecStages } from "../../assets";

export const Home: React.FC = () => {
    return (
        <HomeContainer>
          <StagesContainer>
            <h1>Etapas</h1>
            <img id="RecStages" src={RecStages}/>
            <Components>
              <StagesComponent icon={"img"} title={"texto"}/>
              <StagesComponent icon="img" title="texto"/>
              <StagesComponent icon="img" title="texto"/>
              <StagesComponent icon="img" title="texto"/>
            </Components>
          </StagesContainer>
        </HomeContainer>
    );
}