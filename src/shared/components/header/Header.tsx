import React, { ReactElement } from 'react';
import Container from '../container/Container';
import HeaderLink from './components/HeaderLink';

export default function Header(): ReactElement {
  return (
    <header className="bg-gray-100 w-screen h-12">
      <Container>
        <div className="flex justify-between">
          <h1 className="text-xl">React Folders Styleguide</h1>
          <nav>
            <ul className="flex">
              <HeaderLink to="/">Home</HeaderLink>
              <HeaderLink to="/admin">Admin</HeaderLink>
              <HeaderLink to="/course">Course</HeaderLink>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
