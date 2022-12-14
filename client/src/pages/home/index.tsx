import React from "react";
import { HomeContainer } from './styles';
import { IntroductionComponent }  from "../../components";


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <IntroductionComponent/>
        </HomeContainer>
    );
}