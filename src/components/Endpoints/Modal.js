import React, { Fragment } from "react";
import axios from 'axios'
import { Modal } from 'react-bootstrap'
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

class InventoryModal  extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        
                name: "",
                purchasePrice: "",
                quantity: "",
                vendorName: "",
                invoiceNumber: "",
                type: "",
                warranty:"",
                showDurable: false
            
         };
         this.changeItemName= this.changeItemName.bind(this)
         this.changeItemInvoice= this.changeItemInvoice.bind(this)
         this.changeItemPrice= this.changeItemPrice.bind(this)
         this.changeItemQtty= this.changeItemQtty.bind(this)
         this.changeItemType= this.changeItemType.bind(this)
         this.changeItemVendor= this.changeItemVendor.bind(this)
         this.changeItemWarranty= this.changeItemWarranty.bind(this)

    }


        changeItemName = (event) => {
        this.setState({name: event.target.value});
      }
      changeItemVendor= (event) => {
        this.setState({vendorName: event.target.value});
      }
      changeItemPrice= (event) => {
        this.setState({purchasePrice: event.target.value});
        if(event.target.value> 100000 ){
            this.setState({showDurable:true})
        }
        else
        this.setState({showDurable:false})
        console.log('hello'+ " "+ this.state.showDurable)
      }
      changeItemType= (event) => {
        this.setState({type: event.target.id});
        console.log('item type called '+ this.state.type)
      }
      changeItemQtty= (event) => {
        this.setState({quantity: event.target.value});
      }
      changeItemInvoice= (event) => {
        this.setState({invoiceNumber: event.target.value});
      }
      changeItemWarranty= (event) => {
        this.setState({warranty: event.target.value});
        if(!this.state.showDurable){

            if(event.target.value > 11 )
              this.setState({showDurable:true})
            else
            this.setState({showDurable:false})
        }
      }

      handleFormUpdate =(event) =>{
          event.preventDefault();
          
          console.log('hablde update called..')
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'No Auth'
          }
          const item = this.state
          console.log(DataTransferItemList)
            axios.post('https://nhmpbackend.herokuapp.com/items', item, {
                headers: headers
              })
            .then(
                response =>   {
                    
                    console.log(response)
                    this.props.onHide()
                    }
        )
      }

    render(){
    return (
      <Modal {...this.props}  >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Please Enter Details for the Item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid" style={{marginTop:-10}}>
          <Container>
            <Row>
                <Col lg={12}>
                <Form onSubmit={ this.handleFormUpdate}>
                <Form.Group controlId="formBasicEmail">
                    Item's Name:
                    <Input type="text" required="true"
                    value={this.state.name}
                    name="Item's name"
                    onChange={ this.changeItemName} />

                    Purchase Price:
                     <Input type="number" min="1" required="true"
                    value={this.state.purchasePrice}
                    name="Purchase Price"
                    onChange={ this.changeItemPrice} />

                    quantity:
                     <Input type="number" min="1" required="true"
                    value={this.state.quantity}
                    name="Purchase Price"
                    onChange={ this.changeItemQtty} />
                    Vendor's Name:
                    <Input type="text" required="true"
                    value={this.state.vendorName}
                    name="Vendor's Name"
                    onChange={ this.changeItemVendor} />
                    Invoice Number:
                     <Input type="text" required="true"
                    value={this.state.invoiceNumber}
                    name="Invoice Number"
                    onChange={ this.changeItemInvoice} />

                    Warranty (* MONTH/S):
                     <Input type="number" required="true" min="0" max="60"
                    value={this.state.warranty}
                    name="Invoice Number"
                    onChange={ this.changeItemWarranty} />
                  
                    
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                        Type:
                        </Form.Label>
                        <Col sm={10}>
                        { !this.state.showDurable ?  
                        <div>
                           <Form.Check
                            type="radio" required="true"
                            label="Consumable"
                            name="formHorizontalRadios"
                            id="Consumable"
                            onChange={this.changeItemType}

                            />   
                            
                            
                          
                        
                           <Form.Check
                          type="radio" required="true"
                            label="Stationary"
                            name="formHorizontalRadios"
                            id="Stationary"
                            onChange={this.changeItemType}
                            />
                        </div>
                        :
                        <div>
                          <Form.Check
                            type="radio" required="true"
                            label="Durable"
                            name="formHorizontalRadios"
                            id="Durable"
                            onChange={this.changeItemType}

                            />
                        </div>
                          
                            }
                         
                        </Col>
                        </Form.Group>

         
                </Form.Group>

                
               <div style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}}>
                <Button variant="primary" type="submit" style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}}>
                    SAVE ITEM
                    </Button>
               </div>
   
            </Form>
       
                </Col>
              </Row>
          </Container>
        </Modal.Body>
     
      </Modal>
    )
    };
  }

  export default InventoryModal;