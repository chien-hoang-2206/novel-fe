import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export const Navbar = styled.nav`
  background: linear-gradient(90deg, #FFFFFF 0%, rgb(237, 237, 222) 100%);
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`
export const NavAfterLogin = styled.div`
  cursor: pointer;
`;
export const AvatarWrap = styled(Link)`
  border-radius: 50%;
  margin-top: -5px;
`;
export const NavLogo = styled(Link)`
  justify-self: start;
  cursor: pointer;
  height: 6vh;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;
export const NavAvatar = styled.img`
  text-align: left;
  height: 3vh;
  border-radius: 50%;
  object-fit: cover;
  width: 3vh;
  @media screen and (max-width: 960px) {
    position: absolute;
    margin-left: -50%;
    transform: translate(50%, 0%);
  }
`;
export const NavLogoPage = styled.img`
  width: 10vh;
  text-align: left;
  height: 5vh;
  @media screen and (max-width: 960px) {
    position: absolute;
    margin-left: -50%;
    transform: translate(50%, 0%);
  }
`;

export const NavMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 967px) {
    display: block;
    position: absolute;
    margin-right: -70%;
    transform: translate(50%, 0%);
    cursor: pointer;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
  margin-left: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  color: #583f3f;
  display: flex;
  text-align: center;
  font-size: 1rem;
  text-decoration: none;
    font-weight: bold;
  &:hover {
    transition: all 0.2s ease-out;
    text-align: center;
}
  @media screen and (max-width: 768px) {
    color: #583f3f;
    display: flex;
    text-align: center;
    font-size: 1.5rem;
    height: 80%;
    text-decoration: none;
    margin-top: 1vh;
    padding: 0.0px 0.5rem;
    height: 100%;
    &:hover {
      border-left: 4px solid  rgb(97, 96, 95);
      font-weight: bold;
      color: rgba(0, 0, 0, 0.68);
      text-align: center;
      padding: 0px 1rem;
      height: 80%;
      transition: all 0.2s ease-out;
  }

`;

export const NavSearchContainer = styled.div`
  margin-left: 10vh;
  @media screen and (max-width: 1374px) {
    width: 40%;
  }
`;
export const NavSearch = styled.div`
  flex: 7;
  display:flex;
  margin-top: 7px;
  margin-bottom: 7px;
  border-radius: 20px;
  border: 2px solid rgba(106, 102, 104, 0.55);

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 2px solid rgba(167, 165, 141, 1);
  }
`;
export const NavSelect = styled.select`
  flex-grow: 1;
  font-size: 13px;
  height: 30px;
  text-align: center;
  max-width: 17%;
  padding-left: 0.5rem;
  border: none;
  text-align: center;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  &:focus {
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    backgorund: rgba(106, 102, 104, 0.55);
    border: 2px solid rgba(167, 165, 141, 1);
  }

`;

export const NavSearchInput = styled.input`
  flex-grow: 3;
  font-size: 15px;
  height: 30px;
  width: 65vh;
  font-weight: bold;
  padding-left: 10px;
  border: none;
  border-left: 2px solid rgba(106, 102, 104, 0.55);
  &:hover {
    transition: all 0.2s ease-in-out;
    border: 2px solid rgba(167, 165, 141, 1);
  }

`;

export const BtnSearch = styled(Button)`
  padding: 0.0rem 0.5rem ;
  width: 10%;
  color: #583f3f;
  justify-content: center;
  align-iteams: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 0px;
  backgorund-color: #fffe2;
  border-left: 2px solid rgba(106, 102, 104, 0.55);
  background: transparent;
  &:hover {
    transition: all 0.5s ease-in-out;
    border-left: 1vh solid rgba(167, 165, 141, 1);
    background: transparent;
    color: #583f3f;
  }
`;
