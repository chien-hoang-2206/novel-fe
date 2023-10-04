import styled from 'styled-components';
export const FooterBox = styled.div`
  width: 100%;
`;
export const ImageFooter = styled.div`
  background-image: url(image/footer-bg.png);
  font-family: "Roboto", sans-serif;
  background-size: cover;
  box-sizing: border-box;
  display: grid;
  place-items: center;
`;
export const TransparentBanner= styled.div`
  height: 270px;
  width: 100%;
`
export const ContainerFooter = styled.div`
    padding-top: 30px;
    padding-bottom: 10px;
    min-height: 20vh;
`
export const ContainerFooterColumn = styled.div`
`
export const FooterColumn = styled.div`
  flex-direction: column;
  text-align: center;
  margin-left: 200px;
`;
export const FooterColumnIcon = styled.div`
  margin-left: 200px;
  display: flex;
`;

export const FooterLinkIcon = styled.div`
  flex: 2;
  text-align: center;
  margin-left: 60px;
  margin-bottom: 20px;
`;
export const FooterLink = styled.a`
  color: ##404247;
  font-size: 15px;
  display: flex;
  font-weight: bold;
  color: #8D8F91;
  &:hover {
      color: #blue;
      transition: 200ms ease-in;
  }
`;
export const FooterLinkSmall = styled.a`
  color: ##404247;
  font-weight: bold;
  font-size: 13px;
  color: #8D8F91;
  &:hover {
      color: #blue;
      transition: 200ms ease-in;
  }
`;   
export const Heading = styled.p`
  font-size: 24px;
  color: ##404247;
  font-weight: bold;
`;
export const FooterLogo = styled.img`
  weight: 180px;
  text-align: left;
  height: 210px;
  padding-bottom: 70px;
  padding-left: 20px;
`;
export const FooterContainer = styled.div`
  display: flex;
  border: 1px solid rgba(91, 74, 75, 0.18);
`;