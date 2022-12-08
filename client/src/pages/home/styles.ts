import styled from 'styled-components'; 


export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 40px;
    text-align: center;

    @media (max-width: 720px) {
      font-size: 28px;
    }
  }
  
  p {

    font-size: 20px;
    margin-top: 24px;
    line-height: 32px;

    @media (max-width: 720px) {
      font-size: 16px;
      margin-top: 0;
    }
  }

  img {
    width: 25%;
  }
`;

export const StagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255);
  align-items: center;
  text-align: center;
  width: 100%;

  h1{
    color: rgba(0, 0, 0);
    font-style: bold;
    font-size: 30px;
  }

  img{
    width: 130px;
    height: 10px;
    border-radius: 35px;
  }

`;

export const Components = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  justify-content: center;
`; 