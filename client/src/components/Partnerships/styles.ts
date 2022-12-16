import styled from 'styled-components'; 
import { PoppinsBold, PoppinsLight } from '../../assets/index';

export const ContainerTag = styled.div`
  width: 100vw;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    width: 22vw;
    height: 96px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 96px;
    color: #000000;
  }
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 22vw;
    height: 8px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 119px 0 221px 0;
    gap: 226px;

    #image1 {
      width: 276px;
      height: 150px;
    }
    #image2 {
      width: 336px;
      height: 122px;
    }
  }
`;

export const PartnershipsContainer = styled.div`
`;