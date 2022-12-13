import styled from "styled-components";
import { PoppinsRegular, PoppinsBold } from '../../assets/index'

export const StyledStages = styled.div`
    display: flex;
    width: 100vw;
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
    font-size: 32px;
    src: url(${PoppinsBold}) format('woff2'); 
    }
    
    h1{
        color: #000000;
        font-family: 'Poppins Bold';
    }

    #RecStages{
        width: 160px;
        height: 10px;
    }

`;

export const Components = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 40px;

`;

export const ContainerTag = styled.div`
    margin: 40%;
    text-aling: center; 
    aling-itend: center;
    justify-content: center;
`;

export const StagesIcon = styled.div`
    width: 60px;
    height: 60px;
`;

export const StagesTitle = styled.div`
    @font-face {
        font-family: 'Poppins';
        font-size: 32px;
        src: url(${PoppinsRegular}) format('woff2'); 
    }

    font-family: 'Poppins';
    text-aling: center;    
    font-size: 32px
    width: 60px;
    height: 60px;
    
`;
   