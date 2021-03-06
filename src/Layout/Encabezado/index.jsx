import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

class Encabezado extends Component {
    state = {

    };
     style = {
        width: 50,
        height: 50
    };

    render () {
        return (
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className ="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" >Home  <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Suscriptores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Nuevo-suscriptor" >Agregar Suscriptor</Link>
                           
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" >Algo</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
    
}

export default Encabezado;