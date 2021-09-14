import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NoteState from './context/notes/NoteState'
import Alert from './components/Alert'
import Login from './components/Login'
import Signup from './components/Signup'
// import NotFound from './components/NotFound'
/* -------------------------------------------------------------------------- */

const App = () => {
    const [alert, setAlert] = useState(null)

    const showAlert = (msg, type = 'warning') => {
        setAlert({ msg, type })
        setTimeout(() => setAlert(null), 3000)
    }

    useEffect(() => {
        showAlert('Welcome to iNotebook!', 'primary')
    }, [])

    return (
        <div>
            <NoteState>
                <Router>
                    <Navbar />
                    <Alert alert={alert} />

                    <div className='container my-4'>
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>

                            <Route exact path='/about'>
                                <About />
                            </Route>
                            <Route exact path='/login'>
                                <Login />
                            </Route>
                            <Route exact path='/signup'>
                                <Signup />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </NoteState>
        </div>
    )
}

export default App
