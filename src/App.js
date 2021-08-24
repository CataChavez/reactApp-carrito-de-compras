import React from 'react';
import Product from './components/Product';
import './App.css';
import {Container, Row} from 'reactstrap';
import NavBar from './components/NavBar'; 
import {productList} from "./productList.json";
import HomeSlides from './components/Carousel'

console.log(productList);
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      productList
    }
  }
  render(){
    const componentsArr = this.state.productList.map(
      (productList, i) => {
        return(
          <Product
            key= { i }
            title = { productList.title }
            img = { productList.img }
            description = { productList.description }
            price = { productList.price }
            stock = { productList.stock }
            high = { productList.high }
            wide = { productList.wide }
            long = { productList.long }
            madeWith = { productList.madeWith }
            ending = { productList.ending }
            moreDescription = { productList.moreDescription }
          />
        )
      }
    );         

    return (
      <Container>
        <NavBar title="Huertos Urbanos"/>
          <HomeSlides></HomeSlides>        
        <Row>
          {componentsArr}
        </Row>
      </Container>
    );
  }
}

export default App;
