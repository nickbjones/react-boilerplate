import Layout from '../shared/styles/layout';

import {
  HomeOutlined as HomeIcon,
  InfoOutlined as InfoIcon,
  Pets as DogIcon,
  AirplanemodeActive as AirplaneIcon,
} from '@material-ui/icons';

import {
  NavWrapper,
  NavList,
  NavItem,
  NavLink,
  NavText,
} from './Navigation.styles';

const navItems = [
  {
    route: '/',
    text: 'Home',
    icon: <HomeIcon />,
  },
  {
    route: '/about',
    text: 'About',
    icon: <InfoIcon />,
  },
  {
    route: '/dog-facts',
    text: 'Dog Facts',
    icon: <DogIcon />,
  },
  {
    route: '/models',
    text: 'Models',
    icon: <AirplaneIcon />,
  },
];


export default function Navigation() {
  return (
    <NavWrapper>
      <Layout>
        <NavList>
          {
            navItems.map((item, index) => (
              <NavItem key={index}>
                <NavLink to={item.route}>
                  {item.icon}
                  <NavText>{item.text}</NavText>
                </NavLink>
              </NavItem>
            ))
          }
        </NavList>
      </Layout>
    </NavWrapper>
  );
}
