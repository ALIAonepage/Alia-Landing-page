import styled from 'styled-components'; 
import { PoppinsBold, PoppinsLight } from '../../assets/index';

export const ContainerTag = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    height: 96px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 96px;
    color: #000000;
    margin-bottom: 0;

    @media (max-width: 500px) {
      font-size: 40px;
    }
  }
  img {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 119px 0 221px 0;
    gap: 226px;

    img {
      width: 22vw;
    }
  }
`;

export const PartnershipsContainer = styled.div`
`;