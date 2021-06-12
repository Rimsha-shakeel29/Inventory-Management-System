// Login form
import React from "react";
import { Row, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Badge } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Spinner } from "react-bootstrap";
import * as actions from "./LoginActions";
import * as sharedActions from "../Shared/SharedActions";
import { TramRounded } from "@material-ui/icons";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      username: 'admin@gmail.com',
      pass: '1234',
      userEmp: 'employee@gmail.com'

    };
  }

  onDismiss = () => {
    this.setState({ visible: false });
  };
  componentWillReceiveProps = newProps => {
    if (newProps.error) {
      // newProps.history.push('/signup/personalDetails');
      console.log("Error: " + newProps.error);
    }
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

  //validation parameters
  required = value =>
    value || typeof value === "number" ? undefined : "Required";
  email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? "Invalid email address"
      : undefined;

  // submit button pressed
  handleSubmit = e => {
    console.log("submit called");
    console.log(e);
    if(e.password == this.state.pass){
      
      if(e.email==this.state.username){
      this.props.updateToken("AD"); 
      this.props.setLoggedIn(true);
      this.props.history.push('dashboard')
    }
    else{
      this.props.updateToken("EMP");
      this.props.setLoggedIn(true);
      this.props.history.push('employee')
    }
  }
  };

  render() {
    const handleSubmit = this.props.handleSubmit;
    console.log(this.props.userType)
    return (
      <Container style={{ marginTop: "100px" }}>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="text-center">
            <h6>Welcome Back</h6>
            <h2>Sign In</h2>
          </div>
        </div>
        <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
          <div className="offset-xl-4 col-xl-4 offset-lg-4 col-lg-4 offset-md-2 col-md-8 offset-sm-1 col-sm-10 col-12">
            <div>
              {this.props.error && (
                <Alert
                  color="danger"
                  isOpen={this.state.visible}
                  toggle={this.onDismiss}
                >
                  {this.props.error}
                </Alert>
              )}
            </div>
            <form onSubmit={handleSubmit(this.handleSubmit)}>
              <Field
                name="email"
                type="text"
                component={this.renderField}
                label="Email"
                className="form-control"
                validate={[this.required, this.email]}
              />
              <Field
                name="password"
                type="password"
                component={this.renderField}
                label="Password"
                className="form-control"
                validate={[this.required]}
              />

              <Row>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-center">
                    {this.props.loading ? (
                      <Spinner animation="border" variant="primary" />
                    ) : (
                      <Button type="submit" className="text-center" variant="info">
                        Login
                      </Button>
                    )}                  
                    <p style={{color: 'grey', marginTop:15}}> Don't have an account?  {" "}
                    <Link style={{color: 'blue'}} to="/signup"> Signup Now</Link>
                    </p> 
                  </div>

                </div>
              </Row>

              <Row>
                
                
              </Row>
            </form>
           
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center" style={{marginTop:0, border: '1px solid orange'}}>
          <div className="text-center">        
             <p style={{fontSize:9}}> * NOTE: the implementation of login was not part of G2 deliverables. Therefore, you may only use template login credentials </p>

           
            <p style={{color:'red', width:300, textAlign:"left", }}> For Admin: <br></br> email: admin@gmail.com  password: 1234   </p>
            
            <p style={{color:'orange', width:300, textAlign:"left"}}> For Employee: <br></br> email: employee@gmail.com <br></br>  password: 1234   </p>
      

        
                 </div>
             </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.SharedReducer.error,
    loading: state.SharedReducer.loading,
    isAdmin: state.LoginReducer.token == 'AD',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoggedIn: value => dispatch(actions.setIsLoggedIn(value)),
    updateToken: value => dispatch(actions.updateToken(value))
  };
};

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default reduxForm({
  form: "loginForm"
})(Login);
