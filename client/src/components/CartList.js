import React from 'react';
import { connect } from 'react-redux';

import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from '../redux/actions';
import '../styles/Cart.css';

export const CartList = (props) => {
    const { name, quantity } = props.pizza;
    return (
        <tr>
            <td className='font-weight-bold'>{name}</td>
            <td>
                <span
                    className='quantity-btn decrease'
                    onClick={() => props.decreaseQuantity(props.pizza)}
                >
                    &#10134;
                </span>
                <span className='quantity'>{quantity}</span>
                <span
                    className='quantity-btn increase'
                    onClick={() => props.increaseQuantity(props.pizza)}
                >
                    &#10133;
                </span>
            </td>
            <td>
                <span
                    className='d-flex justify-content-end remove-btn'
                    onClick={() => props.removeFromCart(props.pizza)}
                >
                    &#10060;
                </span>
            </td>
        </tr>
    );
};

export default connect(null, {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
})(CartList);
