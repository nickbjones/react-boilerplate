import {
  HomeOutlined as HomeIcon,
  InfoOutlined as InfoIcon,
  WbSunnyOutlined as WeatherIcon,
  Pets as DogIcon,
} from '@material-ui/icons';

import {
  NavList,
  NavItem,
  NavLink,
  NavText,
} from './Navigation.styles';

export default function Navigation() {
  return (
    <nav>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <HomeIcon />
            <NavText>Home</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">
            <InfoIcon />
            <NavText>About</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/weather">
            <WeatherIcon />
            <NavText>Weather</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dog-facts">
            <DogIcon />
            <NavText>Dog Facts</NavText>
          </NavLink>
        </NavItem>
      </NavList>
    </nav>
  );
}
