import { Link } from "react-router-dom";

import styled from 'styled-components';

import {
  HomeOutlined as HomeIcon,
  InfoOutlined as InfoIcon,
  WbSunnyOutlined as WeatherIcon,
} from '@material-ui/icons';

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

const NavListItemLink = styled(Link)`
  padding: 1rem;
`;

export default function Navigation() {
  return (
    <nav>
      <NavList>
        <li><NavListItemLink to="/"><HomeIcon /> Home</NavListItemLink></li>
        <li><NavListItemLink to="/about"><InfoIcon /> About</NavListItemLink></li>
        <li><NavListItemLink to="/weather"><WeatherIcon /> Weather</NavListItemLink></li>
      </NavList>
    </nav>
  );
}
