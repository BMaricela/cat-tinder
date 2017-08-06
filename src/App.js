import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {
  Grid,
  PageHeader
} from 'react-bootstrap'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'

class App extends Component {
  render() {
    return (
      <Grid>
        <PageHeader>
          Cat Tinder
        </PageHeader>
      </Grid>
    );
  }
}

export default App;
