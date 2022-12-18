import React from "react";
import { HowWorksContainer, HowWorksContainerTitle, HowWorksContainerContent, HowWorksContainerButton, ContainerTag } from './styles';
import Rectangle from '../../assets/Rectangle.png';

type HowWorksProps = {
    title: string;
    content: string;
    button: string;
};

export const HowWorksTag = ({title, content, button}: HowWorksProps) => {
    return(
        <ContainerTag>
            <div>
                <HowWorksContainerTitle> {title} </HowWorksContainerTitle>
                <img src={Rectangle} alt="" />
            </div>
            <HowWorksContainerContent> {content} </HowWorksContainerContent>
            <div id="button">
                <a href=""><HowWorksContainerButton> {button} </HowWorksContainerButton></a>
            </div>
        </ContainerTag>
    );

}


export const HowWorksComponent: React.ElementType = () => {
    return (
        <HowWorksContainer>
            <HowWorksTag title={"Como funciona o programa"} content={"O programa tem duração de 6 meses e traz uma jornada de acompanhamento e estruturação do seu negócio utilizando metodologias  e ferramentas inovadoras como design thinking, ágile e growth. As pessoas selecionadas terão a oportunidade de desenvolver a estrutura do seu negócio acompanhada de um equipe especializada da Alia. Além disso, a equipe campeã do programa, terá como benefícios torna-se membro ativo do Ecossistema Alia, junto com outras empresas que possuem uma base de negócio estruturada.  Quer saber mais? Clique logo abaixo."} button={"Ler edital"}/>
        </HowWorksContainer>
    );
}