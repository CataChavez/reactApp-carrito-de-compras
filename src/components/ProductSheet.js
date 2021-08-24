import React from 'react';
import { CardImg, Modal, Button, Container, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import './ProductSheet.css';
import { shopList } from '../shopList.json'

class ProductSheet extends React.Component{
    constructor(props){
        super();
        this.state={
            modal: false,
            shopList,
            stock: props.props.stock
        }
        this.toggle = this.toggle.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    addToCart(){
        shopList.push({
            "title": this.props.props.title,
            "price": this.props.props.price
        })
        this.setState(prevState => ({
            modal: !prevState.modal, 
        }));

        if(this.state.stock != 0){
            this.setState(prevState => ({
                stock: prevState.stock -1
            }));
        }else {
            alert('STOCK AGOTADO')
        }
        const badge = document.getElementById("Badge1");
        badge.innerText = shopList.length;
    }

    render(){
        return(
            <Container>
                <Button onClick={this.toggle}>Ver ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.title}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.img}/>    
                        <Row className="modalTable">
                            <Col xs="6">
                                <b>Dimensiones: </b>
                                <table >
                                    <tr><b>Altura: </b>{this.props.props.high}</tr>
                                    <tr><b>Ancho: </b>{this.props.props.wide}</tr>
                                    <tr><b>Largo: </b>{this.props.props.long}</tr>
                                </table>
                            </Col>
                            <Col xs="6">
                                <b>Descripción: </b>
                                <table> 
                                    <tr>{this.props.props.madeWith}</tr>
                                    <tr>{this.props.props.ending}</tr>
                                                                  
                                </table>                            
                            </Col>
                        </Row>
                        <Row>
                                <Col sm="12"><p><b>{this.state.stock}</b> unidades disponibles.</p></Col>
                                <Col sm="12" className="modalPrice"><p><b>{this.props.props.price}</b></p></Col>
                        </Row>   
                        
                    </ModalBody>
                    <ModalFooter className="modalFooter" >
                        <Button color="primary" onClick={this.addToCart}>Agregar al carrito</Button>
                        <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}
export default ProductSheet;