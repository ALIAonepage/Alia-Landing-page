import styled from "styled-components";
import { PoppinsRegular, PoppinsSlim } from "../../assets";

export const StyledSubscriptionComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 125px 1.5rem;

    background: conic-gradient(from -75.47deg at 58.78% 45.77%, #ff2c7d -93.39deg, #02ecff 14.12deg, #249ee7 105.23deg, #162c8d 165.55deg, #ff2c7d 266.61deg, #02ecff 374.12deg);
`;

export const SubscriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 804px;
    padding: 30px 60px;

    background-color: #fff;
    color: #000;

    h2{
        @font-face {
            font-family: 'Poppins';
            src: url(${PoppinsRegular}) format('woff2'); 
        }
        font-family: 'Poppins';
        font-size: 45px;

        @media (max-width: 500px) {
            font-size: 36px;
        }
    }

    @media (max-width: 500px) {
        padding: 30px 20px;
    }
`;

export const StyledSubscriptionForm = styled.div`
    width: 100%;

    padding: 20px 20px;

    @media (max-width: 500px) {
        padding: 0;
    }
`;

export const StyledSubscriptionField = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    
    margin: 20px 0;
    
    label{
        @font-face {
            font-family: 'Poppins Slim';
            src: url(${PoppinsSlim}) format('woff2'); 
        }
        font-family: 'Poppins Slim';
        font-size: 28px;
    }
    
    input{
        @font-face {
            font-family: 'Poppins Slim';
            src: url(${PoppinsSlim}) format('woff2'); 
        }
        font-family: 'Poppins Slim';

        display: flex;
        
        width: 100%;
        
        font-size: 20px;
        
        padding: 15px;
        
        border: none;
        border-radius: 5px;

        background-color: rgba(36, 158, 231, 0.16);

        #solutionDescribe{
            min-height: 120px;
        }

        @media (max-width: 500px) {
            width: 90%;
        }
    }
`;

export const StyledButton = styled.div`
    display: flex;

    width: fit-content;
    
    border-radius: 5px;
    
    background-color: #ff2c7d;
    color: #fff;
    
    button{
        @font-face {
            font-family: 'Poppins Slim';
            src: url(${PoppinsSlim}) format('woff2'); 
        }
        font-family: 'Poppins Slim';

        font-size: 24px;
        
        padding: 10px;

        border: none;

        background-color: transparent;
        color: #fff;
    }

    :hover{
        background-color: #ff2c7dcc;
    }
`;