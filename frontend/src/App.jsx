import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

/* -------------------------------------------------------------------------- */

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <div className='container text-center my-5'>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>

                        <Route exact path='/about'>
                            <About />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App
