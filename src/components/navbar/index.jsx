import React from "react";
import { Container } from "./../../theme/global";
import { Logo, Nav } from './style';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Logo>
          <Link to="/">
            <i className="fa-solid fa-film"></i>
            React Movie
          </Link>
        </Logo>
      </Container>
    </Nav>
  );
};

export default Navbar;
