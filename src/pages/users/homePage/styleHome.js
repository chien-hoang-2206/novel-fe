import styled from "styled-components";
import  Modal from 'react-modal';
import  Row  from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { Transparent } from './../loginPage/loginStyle';

export const ImageBanner = styled.div`
  font-family: "Roboto", sans-serif;
  height: 100vh;
  border: none;
  background-size: cover;
  box-sizing: border-box;
  display: grid;
  place-items: center;
`;
export const TransparentBanner= styled.div`
  margin-top: 100px;
  height: 100vh;
  border: none;
  background-image: linear-gradient(0deg, #fff,85%, transparent);
  width: 100%;
`
export const ContainerPageContent = styled.div`
  border-radius: 15px;
  width: 80%;
  margin-top: -90vh;
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 10px;
  background-color : #fff;
  border: 3px solid  gray;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

  @media (max-width: 1370px) {
    transform: translate(0%, -35%);
  }
  @media (max-width: 768px) {
    width: 100%;
    transform: translate(0%, -30%);
  }
`;


export const ModalStyle = styled(Modal)`
  background: #FEFEFE;
  height: 74%;
  width: 60vh;
  padding: 3vh;
  border: 2px solid black;
  border-radius: 6px;
  margin: 15vh 35%;
`;
export const ContainerRow1 = styled.div`
`;
export const ContainerRow1Column1 = styled.div`
  display: flex;
  flex-direction: row;

`;
export const ContainerButton = styled.div`
    position: relative;
    max-height: 30px;
    left: 600px;
    font-size: 20px;
    top: -20px;
`;
export const ContainerRow1Column3 = styled.div`
  width: 100%;
  margin-left: 10px;
  display: flex;
`;
export const ContainerRow1Column4 = styled.div`
    position: relative;
    max-height: 29px;
    top: -59px;
    left: 244px;
  
`;
export const ButtonShowAll = styled(Button)`
  background: transparent;
  border: none;
  color: transparent;
`;
export const ButtonShowAllReading = styled(Button)`
  background: transparent;
  border: none;
  color: transparent;
`;
export const ReadingContainer = styled(Row)`
  &:hover {
    ${ButtonShowAllReading} {
      /* styles cho button khi di chuột vào div */
      background-color: Transparent;
      border: 1px solid #0784B0;
      color: black;
    }
  }
`;
export const ContainerRow2Column1 = styled(Row)`
  margin-left: -10px;
  margin-top: -35px;
  
  &:hover {
    ${ButtonShowAll} {
      /* styles cho button khi di chuột vào div */
      background-color: Transparent;
      border: 1px solid #0784B0;
      color: black;
    }
  }
`;
export const ContainerRow2Column2 = styled.div`
  margin-left: 15px;
  margin-top: -30px;
`;

export const ContainerRow4 = styled.div`
  text-align: center;
  margin-left: 5px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  padding-right: 20px;

`;
export const ContentnerRow4Title = styled.div`
  margin-left: 5px;
`;
export const ContainerCardStar = styled.div`
  margin-left: 10px;
  text-align: right;
  margin-right: 4px;
`;
export const ContainerCardType = styled.div`
  text-align: right;
  margin-right: 4px;
`;
export const ContainerUpdate = styled.div`
  padding-top: 10px;
`;
export const Box = styled.div`
  background: ##404247;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  @media (max-width: 1000px) {
    padding: 100px 100px;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 10px;
  &.active {
    color: #15cdfc;
  }
`;
