import React from "react";
import { MonitoringContainer, MonitoringContainerTitle, MonitoringContainerContent, ContainerTag} from './styles';
import Rectangle from '../../assets/Rectangle.png';

type MonitoringProps = {
    title: string;
    content: string;
};

export const MonitoringTag = ({title, content}: MonitoringProps) => {
    return(
        <ContainerTag>
            <div>
                <MonitoringContainerTitle> {title} </MonitoringContainerTitle>
                <img src={Rectangle} alt="" />
            </div>
            <MonitoringContainerContent> {content} </MonitoringContainerContent>
        </ContainerTag>
    );

}

export const MonitoringComponent: React.ElementType = ({title, content}:MonitoringProps) => {
    return (
        <MonitoringContainer>
            <MonitoringTag title={"Acompanhamento"} content={"O acompanhamento dos empreendedores será realizado de forma periódica por um especialista na área. A orientação será baseada em testes, ou seja, através de um hipótese serão testadas as hipóteses e medidas os resultados, garantindo maior eficiência no objetivo almejado. Vale lembrar que a cada encontro de acompanhamento serão realizadas levantamento e análise dos testes que foram executados."}/>
        </MonitoringContainer>
    );
}