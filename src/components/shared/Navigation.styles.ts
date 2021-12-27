import styled from 'styled-components';
import txt from './styles/typography';

import { Link } from "react-router-dom";

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

export const NavItem = styled.li`
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  ${txt.linkStates} {
    text-decoration: none;
  }
`;

export const NavText = styled.span`
  margin-left: 0.5rem;
`;
