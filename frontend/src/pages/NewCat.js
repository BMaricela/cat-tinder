import React, { Component } from 'react';
import {
  Alert,
  Button,
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  HelpBlock,
  Row
} from 'react-bootstrap'

import {connect} from 'react-redux'

import {addCat, updateCatForm} from '../actions/catActions'

const mapStateToProps = (store) =>{
  return {
    catForm: store.catForm.cat,
    errors: store.catForm.errors,
    apiUrl: store.appState.apiUrl
  }
}

export default connect(mapStateToProps)(
  class NewCat extends Component {
    handleChange(event){
      this.props.dispatch(updateCatForm(event.target.name, event.target.value))
    }

    handleSubmit(){
      this.props.dispatch(addCat(this.props.apiUrl, this.props.catForm))
    }

    errorsFor(attribute){
      var errorString = ""
      if(this.props.errors.length > 0){
        const errors = this.props.errors.filter(error => error.param === attribute )
        if(errors){
          errorString = errors.map(error => error.msg ).join(", ")
        }
      }
      return errorString === "" ? null : errorString
    }

    render() {
      return (
        <form>
          <Row>
            <Col xs={6}>
              {this.props.errors.length > 0 &&
                <Alert bsStyle="danger">
                  Please check the form and try again
                </Alert>
              }
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <FormGroup
                id="name-form-group"
                validationState={this.errorsFor('name') && 'error'}>
                <ControlLabel id="name">Name</ControlLabel>
                <FormControl
                  type="text"
                  name="name"
                  value={this.props.catForm.name}
                  onChange={this.handleChange.bind(this)}
                />
                {this.errorsFor('name') &&
                  <HelpBlock id="name-help-block">{this.errorsFor('name')}</HelpBlock>
                }
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={6}>
              <FormGroup
                id="age-form-group"
                validationState={this.errorsFor('age') && 'error'}>
                <ControlLabel id="age">Age</ControlLabel>
                <FormControl
                  type="number"
                  name="age"
                  value={this.props.catForm.age}
                  onChange={this.handleChange.bind(this)}
                />

                {this.errorsFor('age') &&
                  <HelpBlock id="age-help-block">{this.errorsFor('age')}</HelpBlock>
                }
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={6}>
              <FormGroup
                id="enjoys-form-group"
                validationState={this.errorsFor('enjoys') && 'error'}>
                <ControlLabel id="enjoys">Enjoys</ControlLabel>
                <FormControl
                  componentClass='textarea'
                  name="enjoys"
                  value={this.props.catForm.enjoys}
                  onChange={this.handleChange.bind(this)}
                />
                {this.errorsFor('enjoys') &&
                  <HelpBlock id="enjoys-help-block">{this.errorsFor('enjoys')}</HelpBlock>
                }
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={6}>
              <Button
                onClick={this.handleSubmit.bind(this)}
              id="submit">Create Cat Profile</Button>
            </Col>
          </Row>

        </form>
      )
    }
  }
)
