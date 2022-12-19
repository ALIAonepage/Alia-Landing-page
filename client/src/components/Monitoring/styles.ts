import styled from 'styled-components'; 
import { PoppinsBold, PoppinsLight } from '../../assets/index';

export const MonitoringContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 95%;
      height: 13px;
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

  @media (max-width: 700px) {
    font-size: 36px;
  }

  @media (max-width: 400px) {
    font-size: 28px;
  }
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