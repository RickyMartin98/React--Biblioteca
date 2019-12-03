import React, { Component } from 'react';
import  { database2 } from '../../../firebase';
import { connect } from 'react-redux';
import { agregarSuscriptorAction } from '../../../actions/suscriptoresActions';

class NuevoSuscriptor extends Component {
    state = {
        nombre: '',
        apellidos: '',
        carrera: '',
        codigo: '',
    };

    styleBorder = {
      
    };

    getValues = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    sendData = (e) => {
        e.preventDefault();
        const newSuscriber = {
            nombre: this.state.nombre,
            apellidos: this.state.apellidos,
            carrera: this.state.carrera,
            codigo: this.state.codigo
        };

       /* database2.push(newSuscriber);*/
       this.props.agregarSuscriptorAction(newSuscriber);
        this.setState({
            nombre: '',
            apellidos: '',
            carrera: '',
            codigo: ''
        });
    }

    render () {
         const { nombre, apellidos, carrera, codigo} = this.state;
        return (
            <div>
                <form onSubmit={this.sendData}>
                    <div className="form-group">
                        <label>Nombre: <input className="form-control" name="nombre" type="text" placeholder="Ingresa nombre" style={this.styleBorder} value={nombre} onChange={this.getValues} /></label>
                    </div>
                    <div className="form-group">
                        <label>Apellidos: <input type="text" className="form-control" name="apellidos" onChange={this.getValues} value={apellidos} placeholder="Ingresa tus apellidos"/></label>
                    </div>
                    <div className="form-group">
                        <label>Carrera: <input type="text" name="carrera" onChange={this.getValues} value={carrera} placeholder="Ingresa Tu carrera" className="form-control"/></label>
                    </div>
                    <div className="form-group">
                        <label>Codigo: <input  className="form-control" type="text" name="codigo" onChange={this.getValues} value={codigo} placeholder="Ingresa codigo" /></label>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Enviar datos" />
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        suscriptores: state.suscriptores
    }
}

export default connect(mapStateToProps,{agregarSuscriptorAction}) (NuevoSuscriptor);