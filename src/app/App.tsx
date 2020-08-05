import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import tree from '../consts/appFolderTree';

import Header from '../shared/components/header/Header';
import Container from '../shared/components/container/Container';
import Footer from '../shared/components/footer/Footer';
import TreeSchema from '../shared/components/treeSchema/TreeSchema';
import { TreeProvider } from '../shared/store/tree/TreeContext';

import Home from './components/home/Home';
import Admin from './components/admin/Admin';
import Course from './components/course/Course';

export default function App() {
  return (
    <Router>
      <Header />
      <Container>
        <TreeProvider initTree={tree}>
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/course">
              <Course />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <TreeSchema />
        </TreeProvider>
      </Container>
      <Footer />
    </Router>
  );
}
