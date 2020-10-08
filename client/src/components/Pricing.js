import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';

import '../styles/Pricing.css';
import '../styles/Cart.css';

import StripeButton from './StripeButton';

export const Pricing = ({ cart }) => {
    const numOfItems = () => {
        if (cart.length === 0) {
            return null;
        } else {
            const initValue = 0;
            const items = cart.reduce((acc, current) => {
                return acc + current.quantity;
            }, initValue);
            return items;
        }
    };

    const calcTotal = () => {
        return (numOfItems() * 8.99).toFixed(2);
    };

    const renderPayButton = () => {
        if (cart.length === 0) return;

        return <StripeButton cart={cart} />;
    };

    return (
        <div className='price'>
            <div className='credit-info'>
                **Card: 4242 4242 4242 4242**
                <br />
                **Any date after today, CVC: 123**
            </div>
            <Table striped>
                <tr>
                    <td className='font-weight-bold'>Total</td>
                    <td className='d-flex justify-content-end'>
                        {calcTotal()}
                    </td>
                </tr>
            </Table>
            <div className='text-center'>{renderPayButton()}</div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cart: Object.values(state.cart),
});

export default connect(mapStateToProps)(Pricing);
