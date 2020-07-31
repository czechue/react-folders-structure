import React from 'react';
import Header from '../shared/components/header/Header';
import Container from '../shared/components/container/Container';
import Footer from '../shared/components/footer/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Container>
        <div>Container content</div>
      </Container>
      <Footer />
    </div>
  );
}
