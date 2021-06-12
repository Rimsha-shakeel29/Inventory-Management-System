import React, { Fragment } from "react";
import { connect } from "react-redux";
// import * as SharedActions from "../components/Shared/SharedActions";
// import * as SubscriptionActions from "../components/Subscription/SubscriptionActions";


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  Table,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import { Spinner ,Dropdown, DropdownButton} from "react-bootstrap";
import { ModalFooter , Modal} from "react-bootstrap";


function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure you want to isse the item to "Khushnood Ali" ?
        </Modal.Title>
      </Modal.Header>
     <ModalFooter>
       <Button> Yes </Button>
       <Button> Cancel</Button>
     </ModalFooter>
   
    </Modal>
  );
}

class Orders extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      invoiceFetched: false,
      data: [11-10-2020, 'b', '3'],
      modalShow: false,

    }

    this.setModalShow = this.setModalShow.bind(this);

  }

 
  componentDidMount() {
    // this.props.switchLoading(true);
    // this.props.fetchSubscription();
    
  }

  setModalShow = () => {
    this.setState({modalShow: !this.state.modalShow})
}

  upgrade = () => {
    this.props.history.push('/admin/upgrade');
  }

  render() {

  
    return (
      <Fragment>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Orders List</h5>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center">Order ID</th>
                        <th className="text-center">Ordered By</th>
                        <th className="text-center">Order Date </th>
                        <th className="text-center">Item(s)</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      {1 ?
                     ( this.state.data.map(function (setModalShow, key) {
                      var starTime =new Date(2-12-2020);
                      var endTime = new Date(31-12-2020)
                      return [
                      
                        <tr key={key}>
                        <td className="text-center">109</td>
                        <td className="text-center"> Khushnood Ali </td>
                        <td className="text-center"> 31-12-2020 </td>
                        <td className="text-center">
                        <DropdownButton id="dropdown-item-button" title="Click to View Item(s) in Order" variant="info">
                          <Dropdown.Item eventKey="1">Study Table</Dropdown.Item>
                          <Dropdown.Item eventKey="2">Another Item</Dropdown.Item>
                          <Dropdown.Item eventKey="3" >
                            Traffic Lights
                          </Dropdown.Item>
                      </DropdownButton> 
                      </td>
                        <td className="text-center"> Pending Approval </td>
                        <td className="text-center"> 
                        <Button color='success' > Issue</Button>
                        </td>

                      </tr>
                      ]
                     })): (
                         <Spinner animation="border" variant="primary" /> 
                    )}
                       
                      
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>

                  
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <MyVerticallyCenteredModal
                show={this.state.modalShow}
                onHide={() => this.setModalShow(false)}
            />
        </div>
      </Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
    loading: state.SharedReducer.loading,
    error: state.SharedReducer.error,


  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchSubscription: () => {
    //   dispatch(
    //     SubscriptionActions.fetchSubscription()
    //   );
    // },
    // switchLoading: value => {
    //   dispatch(SharedActions.switchLoading(value));
    // },
    // fetchInvoices: (stripeCustomerId) => {
    //   dispatch(SubscriptionActions.fetchInvoices(stripeCustomerId));
    // },
    // cancelSubscription: () => {
    //   dispatch(SubscriptionActions.cancelSubscription());
    // }

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);


