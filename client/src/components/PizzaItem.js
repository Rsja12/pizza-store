import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { addToCart } from '../redux/actions'
import '../styles/PizzaItem.css'
    
const PizzaItem = ({ pizza, addToCart }) => {
    const { name, ingredients, image } = pizza

    return (
        <Card border='secondary'>
            <Card.Img variant='top' src={image} class='card-img-top' />
            <Card.Body className='d-flex flex-column'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {
                        ingredients.join(', ')
                    }
                </Card.Text>
                <Button
                    className='hidden mt-auto' 
                    onClick={() => addToCart(pizza)}
                    variant='warning'
                >
                    Add To Cart
                </Button>
            </Card.Body>
        </Card>
    )
}

export default connect(null, { addToCart })(PizzaItem)



















// import React from 'react'

// const PizzaItem = ({ name, description }) => {
    
    //     return (
    //         <div className="ui container center aligned">
    //             <div className="ui segment">
    //                 <div className="header">{name}</div>
    //                 <div>{description}</div>
    //                 <button 
    //                 className="button" 
    //                 type="submit">add to cart</button>
    //             </div>
    //         </div>
    //     )
    // }
    
    // export default PizzaItem