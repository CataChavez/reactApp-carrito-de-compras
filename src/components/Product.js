import React from 'react';
import { CardText, CardTitle, CardBody, CardImg, Col, Card} from 'reactstrap';
import './Product.css';
import ProductSheet from './ProductSheet';


class Product extends React.Component{
    render(){
        return (
            <Col sm="3">
                <Card className="Card" body outline color="success">
                    <CardImg top widht="100%"src={this.props.img} alt="Imagen de producto"/>
                    <CardBody>
                        <CardTitle><b>{this.props.title}</b></CardTitle>
                        <CardText ><b>Valor: </b>{this.props.price}</CardText>
                        <CardText className="cardText text-muted">{this.props.description}</CardText>
                        <ProductSheet props={this.props}/>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Product;