import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Layout.scss';

type LayoutP = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutP) {
  return (
    <Container as="main">
      <header className="z-header">
        <h1>Zesty Maps</h1>
        <Nav>
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Search
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/map">
              Map
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      <hr />
      {children}
    </Container>
  );
}

/**
 * HOC to display the layout around a passed component
 */
export function withLayout(Children: () => JSX.Element) {
  return () => (
    <Layout>
      <Children />
    </Layout>
  );
}
