import React from 'react'
import Table from 'react-bootstrap/Table'

import CartList from './CartList'

const CartTable = ({ cart }) => {
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
}

export default CartTable
