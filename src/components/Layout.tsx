import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type LayoutP = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutP) {
  return (
    <Container as="main">
      <header className="z-header">
        <h1>Zesty Maps</h1>
        <nav>
          <Link to="/">Search</Link>
          <Link to="/map">Map</Link>
        </nav>
      </header>
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
