import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Homepage from './components/Homepage'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import './styles/App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/cart" component={Cart} />
            </div>
        </BrowserRouter>
    )
}

export default App
