import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home"
import Grupos from "./grupos/Grupos"

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
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link to="/" >Inicio</Link>
                    
                </li>
                <li className="nav-item">
                    <Link to="/grupos/"  >Grupos</Link>
                    
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
                <Header/>

                <Route exact path="/" component={Home} />
                <Route path="/grupos" component={Grupos} />
               
            </div>
        </Router>);
    }
}



export default Routes;