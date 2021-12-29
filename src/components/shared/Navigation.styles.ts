import styled from 'styled-components';
import txt from './styles/typography';
import colors from './styles/colors';

import { Link } from 'react-router-dom';

export const NavWrapper = styled.div`
  background-color: ${colors.apple};
`;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem 1rem 0;
  ${txt.linkStates} {
    text-decoration: none;
    color: ${colors.white};
  }
`;

export const NavText = styled.span`
  margin-left: 0.5rem;
`;
