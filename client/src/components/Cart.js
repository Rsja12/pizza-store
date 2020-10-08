import React from 'react';
import { connect } from 'react-redux';

import CartTable from './CartTable';
import Pricing from './Pricing';
import '../styles/Cart.css';

export const Cart = ({ cart }) => {
    const renderCart = () => {
        if (cart.length === 0) {
            return <div className='cart-msg'>Your cart is currently empty</div>;
        } else {
            return <CartTable cart={cart} />;
        }
    };

    return (
        <div>
            <div className='cart-container'>{renderCart()}</div>
            <Pricing cart={cart} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    cart: Object.values(state.cart),
});

export default connect(mapStateToProps)(Cart);
