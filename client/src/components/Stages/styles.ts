import styled from "styled-components";
import { PoppinsRegular, PoppinsBold } from '../../assets/index'

export const StyledStages = styled.div`
    display: flex;
    background-color: rgba(255, 255, 255);
    color: #000000;

`;

export const StagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding: 120px 80px;

    @font-face {
    font-family: 'Poppins Bold';
    src: url(${PoppinsBold}) format('woff2'); 
    }
    
    h1{
        text-align: center;
        color: #000000;
        font-family: 'Poppins Bold';
        margin-bottom: 0;
        font-size: 60px;

        @media (max-width: 500px) {
            font-size: 40px;
        }
    }

    img{
        width: 100%;
    }

    .img-underline{
        height: 13px;
    }

    @media (max-width: 500px) {
        padding: 120px 20px;
    }

`;

export const Components = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 40px;
    width: 100%;

`;

export const ContainerTag = styled.div`
    margin: 1rem;
    width: 25%;
    text-align: center; 
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export const StagesIcon = styled.div`
    width: 60px;
    display: flex;
`;

export const StagesTitle = styled.div`
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsRegular}) format('woff2'); 
    }

    display: flex;
    font-family: 'Poppins';
    text-align: center; 
    font-size: 30px;
    
`;
   