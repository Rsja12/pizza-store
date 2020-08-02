import React from 'react'
import { connect } from 'react-redux'

import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions'
import '../styles/Cart.css'

const CartList = props => {

    const { name, quantity } = props.pizza 
    return (
        <tr>
            <td className='font-weight-bold'>{name}</td>
            <td>
                <span 
                    className='quantity-btn'
                    onClick={() => props.decreaseQuantity(props.pizza)}>&#10134;</span>
                <span className='quantity'>{quantity}</span>
                <span 
                    className='quantity-btn'
                    onClick={() => props.increaseQuantity(props.pizza)}>&#10133;</span>
            </td>
            <td>
                <span 
                    className='d-flex justify-content-end remove-btn'
                    onClick={() => props.removeFromCart(props.pizza)}>&#10060;</span>
            </td>
        </tr>
    )
    
}

export default connect
(null, 
    {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart 
    })(CartList)


    // <div className="item">
    //             <div className="content">
    //                 <div className="header">{name}</div>
    //                 <div className="description">{description}</div>
    //             <div className="right floated content">
    //                 <button 
    //                 onClick={ () => props.decreaseQuantity(props.pizza) }
    //                 className="ui icon button">
    //                     <i className='minus icon'></i>
    //                 </button> 
    //                 { quantity }
    //                 <button 
    //                 onClick={ () => props.increaseQuantity(props.pizza) }
    //                 className="ui icon button">
    //                     <i className='plus icon'></i>
    //                 </button>
    //                 <button 
    //                     className='remove-button'
    //                     onClick={() => props.removeFromCart(props.pizza)}
    //                 >
    //                     Remove Pizza
    //                 </button>
    //             </div>
    //             </div>
    //         </div>


