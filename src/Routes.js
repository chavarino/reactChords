import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home"


let About =() =>
{
    return  (<span class="row">About</span>);
}

class Header extends Component {

    /*
<li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
                </li>
<li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
    */
    render() {
        return (
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <Link to="/"  >Inicio</Link>
                    
                </li>
                <li class="nav-item">
                    <Link to="/chords/"  >Canciones</Link>
                    
                </li>
                
            </ul> 
            );
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
                <Route path="/chords/list" component={Chords} />
               
            </div>
        </Router>);
    }
}



export default Routes;