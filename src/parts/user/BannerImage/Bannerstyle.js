import styled from "styled-components";

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