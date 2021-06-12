
import React, {useState} from "react";
// nodejs library that concatenates classes
import { connect } from 'react-redux';
import classNames from "classnames";
// react plugin used to create charts
import Statistics from './Statistics';
import OverviewWidget from './OverviewWidget'
import OrderHistory from './OrderHistory'
import { Line, Bar } from "react-chartjs-2";

import TokenModal from './TokenModal'
import * as SharedActions from "../components/Shared/SharedActions";
// reactstrap components
import {
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { Button } from 'react-bootstrap';

import { Spinner, Modal } from 'react-bootstrap';

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.jsx";



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      show: false,
    };
  }

  componentDidMount() {
    // console.log(this.props.tokens)
    // this.props.getMyAPITokens(this.props.authtoken);
    // console.log("token is: " + this.props.token)

    // this.props.createAPIToken(this.props.authtoken, "Reference");
  }

  createToken = (name) => {
    // this.props.createAPIToken(this.props.authtoken, name);
    this.setState({ show: false });
  }

  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  showModal = (value) => {
    this.setState({ show: value })
  };
  render() {
   
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="12">
            <Statistics></Statistics>

            </Col>
          </Row>
          <Row>
            <Col lg="12">
            
            </Col>
          </Row>
          <Row>
          

  </Row>
         
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.SharedReducer.error,
    // tokens: state.APITokenReducer.apitokens,
    // authtoken: state.LoginReducer.token,
    // ticketModalShow:state.SharedReducer.ticketModalShow,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  //   getMyAPITokens: (authtoken) =>
  //     dispatch(actions.getUsersAPITokens(authtoken)),
  //   setTicketModalWindow: (value) => dispatch(SharedActions.setTicketModalWindow(value)),
  //   createAPIToken: (authtoken, name) =>
  //     dispatch(actions.createAPIToken(authtoken, name))
  // };
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);