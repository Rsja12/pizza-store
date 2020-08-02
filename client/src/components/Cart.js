import React from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'

import CartList from './CartList'
import Pricing from './Pricing'
import '../styles/Cart.css'

const Cart = ({ cart }) => {

    const renderCart = () => {
        if ( cart.length === 0 ) {
            return <div className="cart-msg">Your cart is currently empty</div>
        } else {
            return (
                <Table striped borderless>
                    <thead>
                        <tr>
                            <th>Pizza</th>
                            <th>Quantity</th>
                            <th className='d-flex justify-content-end'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(pizza => (
                                <CartList pizza={pizza} key={pizza.id} />
                            ))
                        }
                    </tbody>
                </Table>
            )
                // pizza => <CartList key={pizza.id} pizza={pizza}/>
        }
    }

    return (
        <div>
            <div className="cart-container"> 
                {
                    renderCart()
                }   
            </div>
            <Pricing cart={cart} />
        </div>
    )
}

const mapStateToProps = state => ({
    cart: Object.values(state.cart)
})

export default connect(mapStateToProps)(Cart)


