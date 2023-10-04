import styled from "styled-components"
import { Link } from "react-router-dom";

export const LinkRoute = styled(Link)`
  color: #767C88;
  height: 30%;
  font-size: 15px;
  margin-top: -3px;
  align-items: left;
  text-decoration: none;
  font-weight: bold;
  curson: pointer;
  &:hover {
    color: #15cdfc;
  }
`;