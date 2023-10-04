import styled from "styled-components";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
export const ImageBanner = styled.div`
  font-family: "Roboto", sans-serif;
  height:100vh;
  border: none;
  background-size: cover;
  box-sizing: border-box;
  display: grid;
  place-items: center;
`;
export const TransparentBanner = styled.div`
  margin-top: 100px;
  height: 120vh;
  width: 100%;
  border: none;
  background-image: linear-gradient(0deg, #fff, 85%, transparent);
`;
export const ContainerPageContent = styled.div`
  border-radius: 15px;
  width: 66%;
  display:flex;
 flex-wrap: wrap;
  margin-inline: auto;
  background-color: #fff;
  border: 3px solid gray;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  @media (max-width: 1370px) {
    width: 85%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 248px) {
    width: 100%;
  }
`;
export const ContainerInfo = styled.div`
    width: 100%;

`;
export const ContainerTabs = styled(Col)`
`;

export const ContainerTab1 = styled(Row)``;
export const Col1 = styled(Col)``;
export const Row2 = styled.div`
  border-top: 1px solid RGB(194 192 187);
  padding-left: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1vh;
  min-height: 6vh;
`;
export const Container2 = styled.div`
  display: flex;
  min-width: 70%;
  height: 70%;
`;

export const Row2Icon = styled.div`
  display: flex;
  width: 18vh;
  margin-right: 2px;
  font-size: 25px;
`;
export const Row3 = styled(Row2)`
  border-bottom: 1px solid RGB(194 192 187);
`;

export const Col2 = styled(Col)`
  border-radius: 10px;
  margin-left: 5vh;
  width: 30%;
  background: rgb(247, 245, 240);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

export const NewChapterLink = styled(Link)`
  margin-top: 1vh;
  text-decoration: none;
`;

