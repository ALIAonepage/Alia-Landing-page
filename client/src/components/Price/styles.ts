import styled from "styled-components";
import { PoppinsSlim } from "../../assets";

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;

    background-color: #249ee7;
    color: #fff;
`;

export const StyledPriceTag = styled.div`
    div {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            @font-face {
                font-family: 'Poppins Slim';
                src: url(${PoppinsSlim}) format('woff2'); 
            }
            font-family: 'Poppins Slim';
            margin: 0 auto;
        }
    }
    
    .firstPrice{
        color: #fff;
        
        background: linear-gradient(163deg, transparent calc(49% - 1px), #fff 49%, #fff 51%, transparent calc(51% + 1px) );
    }
    
    .modifiedPrice{
        color: #ff2c7d;
    }

    .cifra{
        display: flex;
        align-self: flex-start;
        margin-top: 20px;
        margin-right: 15px;

        font-size: 36px;
    }

    .number{
        font-size: 128px;
    }
`;

export const DiscountDeliveredBy = styled.p`
    @font-face {
        font-family: 'Poppins Slim';
        src: url(${PoppinsSlim}) format('woff2'); 
    }
    font-family: 'Poppins Slim';
    font-size: 64px;

    margin-top: 30px;
`;