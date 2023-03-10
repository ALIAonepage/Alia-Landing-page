import React from "react";
import { IntroductionContainer } from "./styles";
import { AliaLogo } from "../../assets";


export const IntroductionComponent: React.FC = () => {
    return (
        <IntroductionContainer>
            <img src={AliaLogo} />
            <div id="text">
                <h1>Venha potencializar <br/> seu serviço!</h1>
                <h2>Faça parte do nosso ecossistema <br/> de empresas e startups </h2>
                <a href="#Forms"> Inscrição</a>
            </div>
        </IntroductionContainer>
    )
};

export default IntroductionComponent;