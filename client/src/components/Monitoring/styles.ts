import styled from 'styled-components'; 
import { PoppinsBold, PoppinsLight } from '../../assets/index';

export const MonitoringContainer = styled.div`
  width: 100vw;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 70%;
      height: 14px;
    }
  }
`;

export const MonitoringContainerTitle = styled.h1`


  color: ${(props) => props.theme.colors.primary};
  font-family: 'Poppins';
  font-style: normal; 
  text-align: center;
  color: #000000;
  font-weight: 700;
  font-size: 60px;
  line-height: 90px;
  margin-top: 40px;
  margin-bottom: 0;
  width: 41vw;
`;
export const MonitoringContainerContent = styled.p`

font-family: "PoppinsLight";
font-style: normal;
font-weight: 300;
font-size: 28px;
line-height: 42px;
text-align: center;
margin: 2.3em 0 2.1em 0;
width: 85%;
color: #000000;
  `;

  export const ContainerTag = styled.div`
  `;