import { Row, Col } from "react-bootstrap";
import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Spinner, Button , Form} from "react-bootstrap";
import { Card, Container, Alert } from "reactstrap";
import { Badge } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import * as SignupActions from "./SignupActions";
import * as SharedActions from "../Shared/SharedActions";
import { Link } from "react-router-dom";

class AccountDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.props.changeError(null);
  }

  onDismiss = () => {
    this.setState({ visible: false });
  };

  componentWillMount = () => {};
  componentWillReceiveProps = newProps => {
    // if (newProps.regSuccess) {
    //   newProps.history.push("/stripe");
    //   console.log("Reg success");
    // }
  };
  renderField = ({
    input,
    className,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input
          {...input}
          className={className}
          placeholder={label}
          type={type}
        />
        {error ? (
          touched ? (
            <Badge pill variant="info">
              {error}
            </Badge>
          ) : (
            <br></br>
          )
        ) : (
          <br></br>
        )}
      </div>
    </div>
  );

  //validation function
  required = value =>
    value || typeof value === "number" ? undefined : "Required";
  minLength = min => value =>
    value && value.length < min
      ? `Must be ${min} characters or more`
      : undefined;
  minLength8 = this.minLength(8);
  matching = (value, allValues) =>
    value && value !== allValues.password ? "Not-Matched" : undefined;
  email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? "Invalid email address"
      : undefined;

  handleSubmit = e => {
    console.log(e);
    this.props.signMeUp(
      e.firstname,
      e.lastname,
      e.email,
      e.password,
      e.confirmPassword
    );
  };
  render() {
    return (
     <Container>
        <Row className="justify-content-md-center">
           <Card style={{ marginTop: "60px" }}></Card>
          <Col xs lg="6">
            <div className="text-center">
              <h2>Sign Up</h2>
            </div>
            {/* {this.props.error ? (<div className="text-center" style={{color:"red"}}>{this.props.error}</div>) : null} */}
            {this.props.error && (
              <Alert
                color="danger"
                isOpen={this.state.visible}
                toggle={this.onDismiss}
              >
                {this.props.error}
              </Alert>
            )}
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 formsection">
              <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div className="row form-group">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <Field
                      name="firstname"
                      type="text"
                      component={this.renderField}
                      label="First Name"
                      className="form-control"
                      validate={[this.required]}
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <Field
                      name="lastname"
                      type="text"
                      component={this.renderField}
                      label="Last Name"
                      className="form-control"
                      validate={[this.required]}
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <Field
                      name="email"
                      type="text"
                      component={this.renderField}
                      label="Email"
                      className="form-control"
                      validate={[this.required, this.email]}
                    />
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop:20, marginBottom:15, color: 'black'}}>
                  <Form.Row className="align-items-center">
                      <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="inlineFormCustomSelect"
                        custom
                      >
                        <option value="0">Please Select...</option>
                        <option value="1">Employee</option>
                        <option value="2">Officer </option>
                      </Form.Control>
                  
                    </Form.Row>
                    </div>
                </div>

                <div className="row form-group">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <Field
                      name="password"
                      type="password"
                      component={this.renderField}
                      label="Password"
                      className="form-control"
                      validate={[this.required, this.minLength8]}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <Field
                      name="confirmPassword"
                      type="password"
                      component={this.renderField}
                      label="Confirm Password"
                      className="form-control"
                      validate={[this.required, this.matching]}
                    />
                  </div>

                </div>
                {/* <div className="row">
                  
                      <Form.Label >
                        Please Select One:
                      </Form.Label>
                     
                        <Form.Check
                          type="radio"
                          label="I am Employee"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />
                        <Form.Check
                          type="radio"
                          label="I am an Officer"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                        />
                      
                </div> */}
              
                   
                      
                
                <div className="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
               
              
                    <div class="text-center" style={{marginTop:30}}>
                       {this.props.loading ? (
                        <Spinner animation="border" variant="success" />
                      ) : (
                        <Button
                          type="submit"
                          className="nextbtn extra-margin-top"
                          variant="info"
                        >
                          Create Account
                        </Button>
                      )}    <p style={{color: 'grey', marginTop:15}}>  Already a member ? 
                    <Link style={{color: 'blue'}} to="/login "> Login here</Link>
                    </p> 
                    </div>
                    
                  </div>
                                      
                
                </div>
              </form>
            </div>
          </Col>
        
      </Row>
      <p style={{fontSize: 9, marginTop: 70, justifyContent:'center', alignItems:'center'}}> * NOTE: the full implementation of Signup was not part of G2 deliverables. Therefore, you may only use template login credentials </p>
             <p style={{color:'red'}}>  email: admin@gmail.com  password: 1234   </p>
     </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.SharedReducer.loading,
    error: state.SharedReducer.error,
    regSuccess: state.SignUpReducer.regSuccess,
    productType: state.SignUpReducer.productType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signMeUp: (firstName, lastName, email, password1, password2) =>
      dispatch(
        SignupActions.authSignup(
          firstName,
          lastName,
          email,
          password1,
          password2
        )
      ),
    flush: () => dispatch(SignupActions.flush()),
    changeError: value => dispatch(SharedActions.changeError(value))
  };
};

AccountDetailsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDetailsForm);

export default reduxForm({
  form: "AccountDetailsForm"
})(AccountDetailsForm);
