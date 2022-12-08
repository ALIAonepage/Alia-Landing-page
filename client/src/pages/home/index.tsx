import React from "react";
import { HomeContainer, Components } from './styles';
import { LogoCITi } from '../../assets';
import { StagesComponent } from "../../components";


export const Home = () => {
    return (
        <HomeContainer>
          <h1>Etapas</h1>
          <Components>
            <StagesComponent icon={"img"} title={"Diagnóstico"}/>
            <StagesComponent icon="img" title="Planejamento financeiro e estratégico"/>
            <StagesComponent icon="img" title="Máquina de vendas"/>
            <StagesComponent icon="img" title="Máquina de growth"/>
          </Components>
        </HomeContainer>
    );
}