import styled from "styled-components";
import { ImgIntroduction } from "../../assets";
import { PoppinsRegular, PoppinsBold, PoppinsSlim } from '../../assets/index'


export const IntroductionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding-left: 5%;
    width: 100%;
    height: 60%;
    background-image: url(${ImgIntroduction}), linear-gradient(180deg, #02ECFF 17.63%, #249EE7 38.24%, #162C8D 64.75%);
    background-repeat: no-repeat;
    background-size: cover;

    #text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        margin: 7%
        margin-left: 2%;
    }
    img{
        width: 160px;
        height: 154px;
        margin-bottom: 2%;
    }
    h1{
        @font-face {
            font-family: 'Poppins Bold';
            font-size: 32px;
            src: url(${PoppinsBold}) format('woff2'); 
        }
        text-align: left;
        font-size: 60px;
        font-family: 'Poppins Bold';
        color: #F5F5F5;
        margin: 0;
    }
    h2{
        @font-face {
            font-family: 'Poppins';
            font-size: 100px;
            src: url(${PoppinsRegular}) format('woff2'); 
        }
        font-family: 'Poppins';
        font-size: 32px;
        color: #F5F5F5;
    }
    a{
        @font-face {
            font-family: 'Poppins Slim';
            font-size: 32px;
            src: url(${PoppinsSlim}) format('woff2'); 
        }
        color: #249EE7;
        font-family: 'Poppins Slim';
        font-size: 18px;
        text-decoration: none;
        background: #F5F5F5;
        border-radius: 8px;
        text-align: center;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        width: 170px;
        height: 37px;
        margin-top: 3%;
        margin-bottom: 5%;
    }
    
`;