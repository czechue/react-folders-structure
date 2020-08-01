import React, { ReactElement } from 'react';
import Container from '../container/Container';

export default function Footer(): ReactElement {
  return (
    <footer className="bg-gray-100 w-screen h-12">
      <Container className="min-h-full flex justify-center">
        <span className="self-center text-sm text-gray-700">React Folders Styleguide App 2020</span>
      </Container>
    </footer>
  );
}
