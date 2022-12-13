import React from "react";
import { HomeContainer} from './styles';
import { StagesComponent } from "../../components";


export const Home: React.FC = () => {
    return (
        <HomeContainer>
          <StagesComponent/>
        </HomeContainer>
    );
}