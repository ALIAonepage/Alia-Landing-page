import styled from 'styled-components'; 

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

    @media (max-width: 720px) {
      font-size: 28px;
    }
    
    @media (max-width: 720px) {
      font-size: 16px;
      margin-top: 0;
    }

`;
