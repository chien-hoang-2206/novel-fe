import { Link } from "react-router-dom"
import styled from "styled-components"

export const BtnLink = styled(Link)`
    font-style: normal;
    font-weight: bold;
    color:  #000;
    text-decoration: none;
    font-size: 30px;
    line-height: 33px;
  &:hover {
    transition: all 0.2s ease-out;
    color:  #000;



}
`
export const BtnAuthLink = styled(Link)`
       font-family: 'Brandon Text';
    font-style: normal;
    font-weight: 390;
    font-size: 18px;
    line-height: 25px;
    text-decoration: none;
    color: #000;
  &:hover {
    transition: all 0.2s ease-out;
    color:  #90C3D8;

}
`