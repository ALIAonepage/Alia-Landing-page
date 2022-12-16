import React from "react";
import { PartnershipsContainer, ContainerTag } from './styles';
import Rectangle from '../../assets/Rectangle.png';
// import {Sebrae, FACEPE} from '../../assets';
import { useState, useEffect } from "react";
import axios from "axios";
import { appendFile } from "fs";

type PartnershipsProps = {
    title: string;
    image1: string;
    image2: string;
};

export const PartnershipsTag = ({title, image1, image2}:PartnershipsProps) => {

    return(
        <ContainerTag>
            <h1>{title}</h1>
            <img src={Rectangle} alt="" />
            <div>
                <img id="image1" src={image1} alt="" />
                <img id="image2" src={image2} alt="" />
            </div>
        </ContainerTag>
    );

}


export const PartnershipsComponent: React.ElementType = () => {

    const [image, setImage] = useState<PartnershipsProps[]>([]);
    
    const getImages = async () => {
        const res = await axios.get('http://localhost:3001/steps');
        setImage(res.data);
        }

    useEffect(() => {
        getImages();   
    }, [])

    return (
        <PartnershipsContainer>
            <PartnershipsTag title={"Parcerias"} image1={image&&image[0].image1} image2={image&&image[1].image2}/>
            {/* <PartnershipsTag title={"Parcerias"} image1={Sebrae} image2={FACEPE}/> */}
        </PartnershipsContainer>
    );
}