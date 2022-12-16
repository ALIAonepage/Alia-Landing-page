import React from "react";
import { PartnershipsContainer, ContainerTag } from './styles';
import Rectangle from '../../assets/Rectangle.png';
import {Sebrae, FACEPE} from '../../assets';
import { useState, useEffect } from "react";
import axios from "axios";

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

    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');

    const [image, setImage] = useState<PartnershipsProps[]>([]);
    const [imageList, setImageList] = useState<[]>([]);
    
    useEffect(() => {
        axios.get('http://localhost:3001/steps')
         .then(res => {
            const dataFromGet = res.data;

            setImageList(dataFromGet)

        })
         .catch(err => {console.log(err)})
    
    }, [])

    return (
        <PartnershipsContainer>
            {imageList.map((image) => (
                <PartnershipsTag key={image['id']} title={"Parcerias"} image1={image['imagePartner']} image2={image['ImagePartner']}/>
            ))}
            {/* <PartnershipsTag title={"Parcerias"} image1={Sebrae} image2={FACEPE}/> */}
        </PartnershipsContainer>
    );
}