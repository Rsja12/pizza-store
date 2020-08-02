import pepperoniPizza from '../../images/pepperoniPizza.webp'
import fourCheesePizza from '../../images/fourCheesePizza.webp'
import hawaiianPizza from '../../images/hawaiianPizza.webp'
import margPizza from '../../images/margPizza.jpeg'
import veggiePizza from '../../images/veggiePizza.webp'
import salamiVeggiePizza from '../../images/salamiVeggiePizza.jpeg'

export const MENU_DATA = {
    1: {
        id: 1,
        name: 'Pepperoni',
        ingredients: [
            'pepperoni', 'mozarella', 'tomato sauce'
        ],
        image: pepperoniPizza
    },
    2: {
        id: 2,
        name: 'Four Cheese',
        ingredients: [
            'mozzarella', 'gorgonzola', 'parmesan', 'robiola'
        ],
        image: fourCheesePizza
    },
    3: {
        id: 3,
        name: 'Roasted Veggie',
        ingredients: [
            'roasted tomato', 'roasted peppers', 'onion', 'mozarella', 'tomato sauce'
        ],
        image: veggiePizza
    },
    4: {
        id: 4,
        name: 'Hawaiian',
        ingredients: [
            'smoked ham', 'grilled pineapple', 'mozarella', 'tomato sauce'
        ],
        image: hawaiianPizza
    },
    5: {
        id: 5,
        name: 'Margherita',
        ingredients: [
            'roasted garlic', 'basil', 'mozarella', 'tomato sauce'
        ],
        image: margPizza
    },
    6: {
        id: 6,
        name: 'Salami Veggie',
        ingredients: [
            'salami', 'red pepper', 'jalapeños', 'mozarella', 'tomato sauce'
        ],
        image: salamiVeggiePizza
    }
}