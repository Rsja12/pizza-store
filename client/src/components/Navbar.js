import React from 'react'
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({ cart }) => {

    const numOfItems = () => {
        if( cart.length === 0 ) {
            return 0
        } else if ( cart.length === 1 ) {
            const [ pizza ] = cart
            return pizza.quantity
        } else {
            const initValue = 0
            const items = cart.reduce( (acc, current) => {
                return acc + current.quantity
            }, initValue )
            return items
        }

    }

    return (
        <div className="ui inverted segment">
            <div className="ui inverted secondary pointing menu">
                <NavLink to="/" exact className="item">Home</NavLink>
                <NavLink to="/menu" exact className="item">Menu</NavLink>
                <div className="ui right inverted secondary pointing menu">
                    <NavLink to="/cart" exact className="item cart"><i className="shopping cart icon"></i>Cart ({numOfItems()}) </NavLink>    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: Object.values(state.cart)
})

export default connect(mapStateToProps)(Navbar)
