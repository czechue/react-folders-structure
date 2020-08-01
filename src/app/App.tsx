import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../shared/components/header/Header';
import Container from '../shared/components/container/Container';
import Footer from '../shared/components/footer/Footer';
import Home from './home/Home';
import TreeSchema from '../shared/components/treeSchema/TreeSchema';

export default function App() {
  return (
    <Router>
      <Header />
      <Container>
        <TreeSchema />
        <Switch>
          <Route path="/admin">Admin</Route>
          <Route path="/course">Course</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}
