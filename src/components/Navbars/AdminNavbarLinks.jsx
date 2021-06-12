import React, { Component } from "react";
import {withRouter } from 'react-router-dom';
import * as actions from '../Login/LoginActions';
import {connect} from 'react-redux' ;
import {  Navbar, Container } from "react-bootstrap";
import {  Link } from "react-router-dom";

class AdminNavbarLinks extends Component {
   logout=(e)=>{
     this.props.logout();
     this.props.history.push('/login');

   }
  render() {
    // const notification = (
    //   <div>
    //     <i className="fa fa-globe" />
    //     <b className="caret" />
    //     <span className="notification">5</span>
    //     <p className="hidden-lg hidden-md">Notification</p>
    //   </div>
    // );
    return (
      <Container>
        <Navbar bg="light" expand="lg">
         
          {/* <NavItem eventKey={3} href="#" >
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem> */}
        </Navbar>
        <Navbar pullRight>
          {/* <NavItem eventKey={1} href="#" style={{width:"80px"}}>
            Account
          </NavItem> */}
         
          <Link eventKey={3} onClick={this.props.logout} to="/login" >
            Log out
          </Link>
        </Navbar>
        </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(AdminNavbarLinks));
