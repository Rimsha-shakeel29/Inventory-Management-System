
import React from "react";
import * as LoginActions from '../components/Login/LoginActions';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";


class UserProfile extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    console.log(name);
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    const email = this.state.email;
    const first_name = this.state.first_name;
    const last_name = this.state.last_name;
    const id = this.props.user.id;

  }

  componentDidMount = () => {
    const token = this.props.token;
    const id = this.props.user.id;
    // this.props.fetchUserProfile(token, id);
    const {first_name, last_name} = this.props.user;
    this.setState({
      first_name,last_name
    })
  }

  
  render() {
    const {first_name, last_name, email} = this.props.user;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      {/* <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Company </label>
                          <Input
                            defaultValue="Creative Code Inc."
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col> */}
                      {/* <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            defaultValue={first_name}
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col> */}
                      <Col  md="12">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input 
                            defaultValue = {email}
                            placeholder="admin@email.com" 
                            type="email" 
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue= {first_name}
                            name = "first_name"
                            placeholder="First Name"
                            value = {this.state.first_name}
                            onChange = {this.handleChange}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue={last_name}
                            name = "last_name"
                            placeholder="Last Name"
                            value = {this.state.last_name}
                            onChange = {this.handleChange}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            defaultValue={"Street "+street_number+ ", "+street_name +", "+ city_name+ ", "+state_name }
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            defaultValue={city_name}
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>State</label>
                          <Input
                            defaultValue={state_name}
                            placeholder="State"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input 
                            defaultValue = {zip_code}
                            placeholder="ZIP Code" 
                            type="number" 
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            cols="80"
                            defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                            that two seat Lambo."
                            placeholder="Here can be your description"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row> */}
                  </Form>
                </CardBody>
                <CardFooter>
                    {this.props.loading ? (
                        <Spinner animation="border" variant="primary" />
                      ) : (
                        <Button className="btn-fill" color="primary" type="submit" onClick = {this.handleSubmit}>
                         Save
                        </Button>
                      )
                    }
                </CardFooter>
              </Card>
            </Col>
            {/* <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/emilyz.jpg")}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">Ceo/Co-Founder</p>
                  </div>
                  <div className="card-description">
                    Do not be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col> */}
          </Row>
        </div>
      </>
    );
  }
}

const mapSateToProps = (state) => {
  return{
    token: state.LoginReducer.token,
    user: state.LoginReducer.user,
    loading: state.SharedReducer.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
  
  };
};

UserProfile = connect(
  mapSateToProps,
  mapDispatchToProps
)(UserProfile)

export default UserProfile;
