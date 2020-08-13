import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'

import '../styles/Menu.css'
import PizzaItem from '../components/PizzaItem'

export const Menu = props => {
    const { menu } = props
    return (
            <Container>
                <Row>
                    <CardDeck>

                    {
                        menu.map(pizza => {
                            return (
                                <Col lg={4} key={pizza.id}>
                                    <PizzaItem pizza={pizza} />
                                </Col>
                            )
                        })
                    }
                    </CardDeck>
                </Row>
            </Container>
    )
}

const mapStateToProps = state => ({
    menu: Object.values(state.menu)
})

export default connect(mapStateToProps)(Menu)
