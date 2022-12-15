import styled from 'styled-components'; 
import { PoppinsBold, PoppinsLight } from '../../assets/index';

export const HowWorksContainer = styled.div`
  width: 100vw;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    img {
      width: 62vw;
      height: 13px;
    }
  }
`;

export const HowWorksContainerTitle = styled.h1`

@font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBold}) format('woff2'); 
  }
  @font-face {
    font-family: 'PoppinsLight';
    src: url(${PoppinsLight}) format('woff'); 
  }
  color: ${(props) => props.theme.colors.primary};
  font-family: 'Poppins';
  font-style: normal; 
  text-align: center;
  color: #000000;
  font-weight: 700;
  font-size: 60px;
  width: 63vw;
  margin-top: 2em;
`;
export const HowWorksContainerContent = styled.p`

  font-family: "PoppinsLight";
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 42px;
  text-align: center;
  margin: 2.8em 0 1.74em 0;
  width: 92.2vw;
  color: #000000;
  `;

export const HowWorksContainerButton = styled.button`
  position: relative;
  right: 36vw;
  height: 75px;
  background: #FF2C7D;
  border-radius: 9px;
  border-color: #FF2C7D;
  font-family: 'PoppinsLight';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 54px;
  padding: 12px 22px 14px 21px;
  color: #FFFFFF;
  `;