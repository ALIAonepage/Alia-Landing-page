import React from "react";
import { PartnershipsContainer } from './styles';
import Rectangle from '../../assets/Rectangle.png';
import {Sebrae, FACEPE} from '../../assets';

type PartnershipsProps = {
    title: string;
    image1: string;
    image2: string;
};


export const PartnershipsComponent: React.ElementType = ({title, image1, image2}:PartnershipsProps) => {
    return (
        <PartnershipsContainer>
            <h1>{title}</h1>
            <img src={Rectangle} alt="" />
            <div>
                <img id="image1" src={image1} alt="" />
                <img id="image2" src={image2} alt="" />
            </div>
        </PartnershipsContainer>
    );
}