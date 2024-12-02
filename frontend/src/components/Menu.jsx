import React from 'react';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useShoppingCart } from 'use-shopping-cart';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Menu = () => {
  const {cartCount}=useShoppingCart();
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand><i class="fa-solid fa-cart-shopping"></i> Gestion Commerciale</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/categories">Catégories</Nav.Link>
            <Nav.Link as={Link} to="/scategories">Sous Catégories</Nav.Link>
            <Nav.Link as={Link} to="/articles">Liste des Articles</Nav.Link>
            <Nav.Link as={Link} to="/Client">Clients</Nav.Link>
            <Nav.Link as={Link} to="/Cart"><IconButton aria-label="cart">
              <StyledBadge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon/></StyledBadge></IconButton></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Rechercher"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Chercher</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
