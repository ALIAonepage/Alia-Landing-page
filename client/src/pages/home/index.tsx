import React from "react";
import  {PartnershipsComponent, HowWorksComponent, MonitoringComponent}  from "../../components";
import Sebrae from "../../assets/Sebrae.png";
import FACEPE from "../../assets/FACEPE.png";
import { StagesComponent } from "../../components";
import { SubscriptionComponent } from "../../components";
import { IntroductionComponent }  from "../../components";
import { PriceComponent } from "../../components";


export const Home: React.FC = () => {
    return (
        <div>
            <IntroductionComponent/>
            <HowWorksComponent title={"Como funciona o programa"} content={"O programa tem duração de 6 meses e traz uma jornada de acompanhamento e estruturação do seu negócio utilizando metodologias  e ferramentas inovadoras como design thinking, ágile e growth. As pessoas selecionadas terão a oportunidade de desenvolver a estrutura do seu negócio acompanhada de um equipe especializada da Alia. Além disso, a equipe campeã do programa, terá como benefícios torna-se membro ativo do Ecossistema Alia, junto com outras empresas que possuem uma base de negócio estruturada.  Quer saber mais? Clique logo abaixo."} button={"Ler edital"}/>
            <StagesComponent/>
            <MonitoringComponent title={"Acompanhamento"} content={"O acompanhamento dos empreendedores será realizado de forma periódica por um especialista na área. A orientação será baseada em testes, ou seja, através de um hipótese serão testadas as hipóteses e medidas os resultados, garantindo maior eficiência no objetivo almejado. Vale lembrar que a cada encontro de acompanhamento serão realizadas levantamento e análise dos testes que foram executados."}/>
            <PriceComponent />
            <SubscriptionComponent />
            <PartnershipsComponent title={"Parcerias"} image1={Sebrae} image2={FACEPE}/>
        </div>
    );
}