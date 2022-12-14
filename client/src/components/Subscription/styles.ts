import styled from "styled-components";

export const StyledSubscriptionComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 125px 0;

    width: 100vw;

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
        font-size: 45px;
    }
`;

export const StyledSubscriptionForm = styled.div`
    width: 100%;

    padding: 20px 20px;
`;

export const StyledSubscriptionField = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    
    margin: 20px 0;
    
    label{
        font-size: 28px;
    }
    
    input{
        display: flex;
        //flex-wrap: wrap;

        width: 100%;
        
        font-size: 20px;
        
        padding: 15px;
        
        border: none;
        border-radius: 5px;

        background-color: rgba(36, 158, 231, 0.16);

        #solutionDescribe{
            min-height: 120px;
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
        padding: 10px;

        font-size: 28px;

        border: none;

        background-color: transparent;
        color: #fff;
    }

    :hover{
        background-color: #ff2c7dcc;
    }
`;