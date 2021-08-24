import React from 'react';
import { Popover, PopoverHeader, PopoverBody, Table, Badge, Button } from 'reactstrap';
import { shopList } from '../shopList.json';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            popoverOpen: false,
            shopList
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    sumProducts(){
        let total = 0;
        let sumProducts = this.state.shopList.map(
            (shopList) => {
                total += parseInt(shopList.price)*1000;
            }
        )
        return(total)
    }

    render(){
        const cartArray = this.state.shopList.map(
            (shopList, i) => {
                return (
                    <tr>
                        <td>{(i += 1)}</td>
                        <td>{(shopList.title)}</td>
                        <td>{(shopList.price)}</td>
                    </tr>
                );
            }
        )
        return(
            <div>
                <Button id="Popover1" color="dark">
                <Badge color="secondary" id="Badge1">{shopList.length}</Badge>
                <span class="material-icons">shopping_cart</span>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Listado de compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                { cartArray }
                            </tbody>
                            <tfoot>
                                <td>Total: </td>
                                <td></td>
                                <td>{Intl.NumberFormat("de-De").format(this.sumProducts())} CLP</td>                        
                            </tfoot>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        )
    }
}

export default Cart;