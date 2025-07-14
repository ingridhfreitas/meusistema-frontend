import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const Menu = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className="shadow"
      >
        <Container>
          <Navbar.Brand className="fw-bold">MeuSistema</Navbar.Brand>
          <Navbar.Toggle aria-controls="menu-principal" />
          <Navbar.Collapse id="menu-principal">
            <Nav className="me-auto">
              <Nav.Link>Produtos</Nav.Link>
              <Nav.Link>Clientes</Nav.Link>
              <Nav.Link>Fornecedores</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                title={
                  <span>
                    <FaUserCircle className="me-2" />
                    Ingrid
                  </span>
                }
              >
                <NavDropdown.Item>Meu Perfil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <FaSignOutAlt className="me-2" />
                  Sair
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
