import React from "react";
import { MonitoringContainer, MonitoringContainerTitle, MonitoringContainerContent} from './styles';
import Rectangle from '../../assets/Rectangle.png';

type MonitoringProps = {
    title: string;
    content: string;
};


export const MonitoringComponent: React.ElementType = ({title, content}:MonitoringProps) => {
    return (
        <MonitoringContainer>
            <div>
                <MonitoringContainerTitle> {title} </MonitoringContainerTitle>
                <img src={Rectangle} alt="" />
            </div>
            <MonitoringContainerContent> {content} </MonitoringContainerContent>
        </MonitoringContainer>
    );
}