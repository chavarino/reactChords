import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



let Home =() =>
{
    return  (<span class="row">HOME</span>);
}
let About =() =>
{
    return  (<span class="row">About</span>);
}

class Header extends Component {

    
    render() {
        return (<span>!HEADER</span> );
    }

}


class Routes extends Component{
    
    
    constructor()
    {
        super();
    }
    render()
    {
        return (
        <Router>
            <div>
                <Header />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
               
            </div>
        </Router>);
    }
}



export default Routes;