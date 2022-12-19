import styled from "styled-components";

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

    .firstPrice{
        color: #fff;

        background: linear-gradient(163deg, transparent calc(49% - 1px), #fff 49%, #fff 51%, transparent calc(51% + 1px) );
    }

    .modifiedPrice{
        color: #ff2c7d;
    }
`;

export const DiscountDeliveredBy = styled.p`
    font-size: 64px;

    margin-top: 30px;
`;