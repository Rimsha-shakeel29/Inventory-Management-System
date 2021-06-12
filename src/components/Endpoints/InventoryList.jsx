import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as SharedActions from "../../components/Shared/SharedActions";
// import * as SubscriptionActions from "../components/Subscription/SubscriptionActions";
import axios from 'axios'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  Table,
  Container,
  Input,
  Row,
  Col
} from "reactstrap";
import { Spinner, Form} from "react-bootstrap";
import ModalInventory from './Modal'


  
class Orders extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      invoiceFetched: false,
      data: [11-10-2020, 'b' ,'c', 'd'],
      modalShow: false,
      itemsList:[],
      item:  
        {
          id: "1",
          name: "traffic cones",
          purchasePrice: "300",
          quantity: "10",
          vendorName: "Shamsher Plastics",
          invoiceNumber: "3409",
          type: "consumable"
        },
        
  }
  }

  onAddItem = (e) => {
    // not allowed AND not working
    console.log(e.target.value+ " " + e.target.name)
    this.setState(state => {
      const list = state.list.push(state.item);
 
      return {
        list,
        item: '',
      };
    });
  };
  componentDidMount() {
    axios.get('https://nhmpbackend.herokuapp.com/items')
        .then(
          response =>   {
            var data = response.data;
               this.setState({itemsList: data})
               console.log(this.state.itemsList)
              }
        )
  }


  setModalShow = () => {
      this.setState({modalShow: !this.state.modalShow})
  }
  componentDidUpdate = () => {
    axios.get('https://nhmpbackend.herokuapp.com/items')
    .then(
      response =>   {
        var data = response.data;
           this.setState({itemsList: data})
           console.log(this.state.itemsList)
          }
    )
  };

  render() {

  
    return (
      <Fragment>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title" style={{marginBottom: 40}}>Available Inventory Items</h5>
                </CardHeader>
                <CardBody>
                { !this.state.itemsList.length == 0  ?
                    (            <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                      <th>Item Name</th>
                        <th>Purchase Price</th>
                        <th>Quantity</th>
                        <th>Vendor's Name </th>
                        <th>Invoice Number</th>
                        <th className="text-center">Item Type</th>
                        <th className="text-center">Warranty (Months)</th>

                        {/* <th className="text-center">Action</th> */}


                      </tr>
                    </thead>
                    <tbody>
                    
                    { this.state.itemsList.map(function (item) {
                      
                      return [
                      
                        <tr key={item.id}>
                          <td>{item.name}</td>
                        <td>{item.purchasePrice}</td>
                        <td> {item.quantity} </td>
                        <td> {item.vendorName} </td>
                        <td >{item.invoiceNumber} </td>
                        <td className="text-center"> {item.type} </td>
                        <td className="text-center"> {item.warranty} </td>

                    
                        {/* <td className="text-center"><Button color="success"> Remove</Button></td> */}

                      </tr>
                      ]
                     })
                    }
                    
                      </tbody>
                  </Table>  )
                    
                    :
                     
                     (
                       <div style={{justifyContent:'center', alignItems:'center', marginLeft:530}}>
                       <Spinner animation="border" variant="normal" /> 
                       </div>
                     )
                  }
                </CardBody>
                <CardFooter>
                    <div style={{textAlign: 'center', marginBottom:20}}>
                                        <Button  color='info' onClick={() => this.setModalShow(true)}> Add New Item</Button>

                    </div>

                  
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <ModalInventory
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


