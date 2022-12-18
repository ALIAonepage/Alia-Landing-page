import React from "react";
import { PartnershipsContainer, ContainerTag } from './styles';
import Rectangle from '../../assets/Rectangle.png';
import {Sebrae, FACEPE} from '../../assets';
import { useState, useEffect } from "react";
import axios from "axios";
import { appendFile } from "fs";

type PartnershipsProps = {
    title: string;
};

export const PartnershipsTag = ({title}:PartnershipsProps) => {

    const [imageArray, setImageArray] = useState<[]>([]);
    
    const getImages = async () => {
        const res = await axios.get('http://localhost:3001/partners');
        console.log(res.data);
        setImageArray(res.data);
    }

    useEffect(() => {
        getImages();   
    }, [])

    return(
        <ContainerTag>
            <h1>{title}</h1>
            <img src={Rectangle} alt="" />
            <div>
                {imageArray && (
                    imageArray.map((image) => (
                        <img 
                            key={image['id']}
                            id={image['id']} 
                            src={image['imagePartner']} 
                            alt="" 
                        />
                    ))
                )}
                {/* <img id={image} src={image} alt="" /> */}
            </div>
        </ContainerTag>
    );

}


export const PartnershipsComponent: React.ElementType = () => {
    return (
        <PartnershipsContainer>
            <PartnershipsTag title={"Parcerias"}/>
        </PartnershipsContainer>
    );
}