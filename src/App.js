import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import { database2 } from './firebase';
import Encabezado from './Layout/Encabezado';
import NuevoSuscriptor from './components/suscriptores/NuevoSuscriptor';
import MostrarSuscriptor from './components/suscriptores/MostrarSuscriptor';
import Suscriptores from './components/suscriptores/Suscriptores';
import { connect } from 'react-redux';
import { obtenerSuscriptorAction, eliminarSuscriptorAction } from './actions/suscriptoresActions';
import './App.css';
import './bootstrap.css';
import _ from 'lodash';

class App extends Component {
  state = {
    libro: '',
    cantidad: 0,
    libros: {},
  };

  componentDidMount () {
    this.props.obtenerSuscriptorAction(); 
  }

  render () {
    const { obtenerSuscriptorAction, suscriptores, eliminarSuscriptorAction, id} = this.props;
    console.log("Props en app:" ,obtenerSuscriptorAction);
  
  return (
    <div className="App">
       <Router>
          <Encabezado />
           <Switch>
                <Route exact path="/" render={()=><header className="App-header"><Suscriptores suscriptores={suscriptores} id={id} eliminarSuscriptorAction={eliminarSuscriptorAction} /> </header> }/>
                <Route exact path="/Suscriptores"  />
                <Route exact path="/Nuevo-suscriptor" render={() => <NuevoSuscriptor />  } />
                <Route />
                <Route />
           </Switch>
        </Router>
    </div>
  );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    suscriptores: state.suscriptores.suscriptores.suscriptor,
    id: state.suscriptores.suscriptores.id
  };
}

export default connect(mapStateToProps, { obtenerSuscriptorAction, eliminarSuscriptorAction }) (App);
