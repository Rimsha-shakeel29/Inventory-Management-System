import React from "react";
import { connect } from "react-redux";
import { Row, Col, Container, Spinner } from "react-bootstrap";
import { Animated } from "react-animated-css";
import {  Button } from "react-bootstrap";

class OrdersNew extends React.Component {

  componentWillMount = () => {
    // this.props.fetchplans();
  };
  
  continue = () => {
    // if (this.props.destination === undefined)
    //   this.props.history.push("/signup/accountDetails");
    // else this.props.destination();
  };

  handleUserType = e => {
    // const value = e.target.value;
    // // this.setState({ userType: value }, () => console.log(this.state.userType));
    // this.props.updateUserType(value);
  };
  handlePlanSelection = e => {
    // const value = e.target.value;
    // console.log(value);
    // this.props.onPlanSelection(value);
  };
  render() {
    // const userType  = this.props.userType;
    // const selectedPlans = this.props.plansData.filter(
    //   plan => plan.user_type === userType
    // );

    return (
      <Container style={{ marginTop: "100px"}}>
        <div className="row" style={{ marginBottom: "50px" }}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="text-center headingsection">
              <h6>Select one of the Types to see Relevant Inventory List</h6>
            </div>
          </div>
        </div>

        <Row style={{ marginBottom: "80px" }}>
          <Col xl={12} lg={12} md={12} sd={12} className="text-center">
            <Button
              variant="info"
              
              onClick={this.handleUserType}
              value="ON"
            >
             CONSUMABLE
            </Button>
            <Button
              variant="primary"
              onClick={this.handleUserType}
              value="PR"
            >
              STATIONARY
            </Button>
            <Button
              variant="normal"
              onClick={this.handleUserType}
              value="PR"
            >
              DURABLE
            </Button>
          </Col>
        </Row>
        <Animated
          animationIn="slideInUp"
          animationInDuration={1500}
          animationOut="slideOutUp"
          isVisible={1? true : false}
        >
          <Container>
            <Row>
              {0 ? 
                   (
                    <div>ABC</div>
                  )
                
               : (
                //show spinner while the plans are fetched from the server
                <Col className="text-center">
                  <Spinner
                    className="spinner-border-md"
                    animation="border"
                    variant="info"
                  />
                </Col>
              )}
            </Row>
          </Container>
        </Animated>
        <Row style={{ marginBottom: "50px", marginTop: "50px" }}>
          {0 ? (
            <Col className="text-center">
              <button className="nextbtn" onClick={this.continue}>
                Continue
              </button>
            </Col>
          ) : (
            <Col />
          )}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    // plansData: state.SignUpReducer.plansData,
    // selectedPlanId: state.SignUpReducer.selectedPlanId,
    // loading: state.SharedReducer.loading,
    // userType: state.SignUpReducer.userType,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchplans: () => dispatch(actions.fetchplans()),
    // onPlanSelection: selectedPlanId =>
    //   dispatch(actions.updatePlanId(selectedPlanId)),
    // updateUserType: (userType) => dispatch(actions.updateUserType(userType)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersNew);
