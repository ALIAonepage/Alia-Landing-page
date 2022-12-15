import React from "react";
import { HowWorksContainer, HowWorksContainerTitle, HowWorksContainerContent, HowWorksContainerButton } from './styles';
import Rectangle from '../../assets/Rectangle.png';

type HowWorksProps = {
    title: string;
    content: string;
    button: string;
};


export const HowWorksComponent: React.ElementType = ({title, content, button}:HowWorksProps) => {
    return (
        <HowWorksContainer>
            <div>
                <HowWorksContainerTitle> {title} </HowWorksContainerTitle>
                <img src={Rectangle} alt="" />
            </div>
            <HowWorksContainerContent> {content} </HowWorksContainerContent>
            <div id="button">
                <a href=""><HowWorksContainerButton> {button} </HowWorksContainerButton></a>
            </div>
        </HowWorksContainer>
    );
}