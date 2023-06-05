// import PropTypes from 'prop-types';

import { Container } from "../App/App.styled";
import { Header, Nav, StyledNavLink } from "./AppBar.styles";

export default function AppBar() {
  return (
    <Header>
      <Container>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/tweets">Tweets</StyledNavLink>
        </Nav>
      </Container>
    </Header>
  );
}
