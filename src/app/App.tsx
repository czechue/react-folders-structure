import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import tree from '../consts/appFolderTree';

import Header from '../shared/components/header/Header';
import Container from '../shared/components/container/Container';
import Footer from '../shared/components/footer/Footer';

import { TreeProvider } from '../shared/tree/TreeContext';

import Home from './components/home/Home';
import Admin from './components/admin/Admin';
import Course from './components/course/Course';
import { Routes } from '../consts/routes';

export default function App() {
  return (
    <Router>
      <Header />
      <Container>
        <TreeProvider tree={tree}>
          <Switch>
            <Route path={Routes.Admin}>
              <Admin />
            </Route>
            <Route path={Routes.Course}>
              <Course />
            </Route>
            <Route path={Routes.Home}>
              <Home />
            </Route>
          </Switch>
        </TreeProvider>
      </Container>
      <Footer />
    </Router>
  );
}
