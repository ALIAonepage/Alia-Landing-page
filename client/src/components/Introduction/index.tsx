import React from "react";
import { IntroductionContainer } from "./styles";
import { AliaLogo } from "../../assets";


export const IntroductionComponent: React.FC = () => {
    return (
        <IntroductionContainer>
            <div id="color">
                <img src={AliaLogo} />
                <div id="text">
                    <h1>Venha potencializar <br/> seu serviço!</h1>
                    <h2>Faça parte do nosso ecossistema <br/> de empresas e startups </h2>
                    <a href="#div"> Inscrição</a>
                </div>
            </div>
        </IntroductionContainer>
    )
};

export default IntroductionComponent;