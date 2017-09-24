import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'
import {
  Col,
  Grid,
  PageHeader,
  Row
} from 'react-bootstrap'
import {connect} from 'react-redux'

import {getCats} from './actions/catActions'

import Cats from './pages/Cats'
import NewCat from './pages/NewCat'

const mapStateToProps = (store) =>{
  return {
    newCatSuccess: store.catForm.newCatSuccess,
    apiUrl: store.appState.apiUrl
  }
}
export default connect(mapStateToProps)(
  class App extends Component {
    componentWillMount(){
      this.props.dispatch(getCats(this.props.apiUrl))
    }

    render() {
      return (
        <Router>
          <div>
            <Route exact path="/" render={props => (
              <Grid>
                <PageHeader>
                  <Row>
                    <Col xs={8}>
                      Cat Tinder
                      <small className='subtitle'>Add a Cat</small>
                    </Col>
                  </Row>
                </PageHeader>
                <NewCat />
                {this.props.newCatSuccess &&
                  <section>
                    <h1> Success</h1>
                    <Redirect to="/cats" />
                  </section>
                }

              </Grid>
            )} />

            <Route exact path="/cats" render={props => (
              <Grid>
                <PageHeader>
                  <Row>
                    <Col xs={8}>
                      Cat Tinder
                      <small className='subtitle'>All the Cats</small>
                    </Col>
                  </Row>
                </PageHeader>
                <Cats />

                {!this.props.newCatSuccess &&
                  <Redirect to="/" />
                }
              </Grid>
            )} />
          </div>
        </Router>
      );
    }
  }
)
