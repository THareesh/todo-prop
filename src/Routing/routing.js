import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './../components/Main'

class Routing extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact={true} path='/' component={Main} />
                    </Switch>
                </Router>

            </React.Fragment>
        )
    }

}

export default Routing