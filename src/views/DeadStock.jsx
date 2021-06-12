import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as SharedActions from "../components/Shared/SharedActions";
// import * as SubscriptionActions from "../components/Subscription/SubscriptionActions";


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Table,
  FormGroup,
  Input,
  Row,
  Col
} from "reactstrap";
import { Spinner, Modal, Form} from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Please Enter Details for the Dead Item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
                <Col lg={12}>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Item ID" />
                    <Form.Control type="email" placeholder="Item's Name" />
                    <Form.Control type="email" placeholder="Vendor's Name" />
                    <Form.Control type="email" placeholder="Bill Number" />
                    <Form.Control type="email" placeholder="Cost" />
                    <Form.Control type="email" placeholder="Repair Approval Date" />

                </Form.Group>

                
               
            <Button variant="primary" type="submit" style={{textAlign: 'center'}}>
                ADD ITEM
            </Button>
            </Form>
       
                </Col>
              </Row>
          </Container>
        </Modal.Body>
     
      </Modal>
    );
  }

class Orders extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      invoiceFetched: false,
      data: [ {id: 1}, {id:2} ],
      modalShow: false,

    }
    this.removeItem=this.removeItem.bind(this);
    this.setModalShow=this.setModalShow.bind(this);

    
  }

 
  componentDidMount() {
    // this.props.switchLoading(true);
    // this.props.fetchSubscription();
    
  }


  removeItem = (id) => {
    this.setState({
        data: this.state.data.filter(item => this.data.id != id)
      })
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
                  <h5 className="title" style={{marginBottom: 40}}>Dead Stock</h5>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Item ID</th>
                        <th>Item's Name</th>
                        <th>Vendor's Name </th>
                        <th>Bill #</th>
                        <th className="text-center">Cost</th>
                        <th className="text-center">Repair Approval Date</th>
                        <th className="text-center">Time</th>
                        <th className="text-center">Action</th>
                       

                      </tr>
                    </thead>
                    <tbody>
                      {1 ?
                     ( this.state.data.map(function (data, key) {
                      var starTime =new Date(2-12-2020);
                      var endTime = new Date(31-12-2020)
                      return [
                      
                        <tr key={key}>
                        <td>109</td>
                        <td> 21-12-2020 </td>
                        <td> 31-12-2020 </td>
                        <td>2290</td>
                        <td className="text-center"> 00 PKR </td>
                        <td className="text-center"> 21-20-2020</td>

                        
                        <td className="text-center"> 2:00 PM</td>
                        <td className="text-center"><Button color="success" > Remove</Button></td>


                      </tr>
                      ]
                     })): (
                         <Spinner animation="border" variant="primary" /> 
                    )}
                       
                      
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                    <div style={{textAlign: 'center', marginBottom:20}}>
                                        <Button  color='info' onClick={() => this.setModalShow(true)}> Add New Item</Button>

                    </div>

                  
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


