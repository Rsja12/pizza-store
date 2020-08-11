import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { addToCart } from '../redux/actions'
import '../styles/PizzaItem.css'
    
export const PizzaItem = ({ pizza, addToCart }) => {
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
