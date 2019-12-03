import React, { Component } from 'react';
import MostrarSuscriptor from '../MostrarSuscriptor';


class Suscriptores extends Component {
    state = {
        suscriptores: [
            {id: 0, nombre: 'carlos antonio', apellidos: 'juarez mendez', carrera: 'Ing quimica', codigo: 33201},
            {id: 1, nombre: 'juan miguel', apellidos: 'hernandez ochoa', carrera: 'Ing civil', codigo: 323401},
            {id: 2, nombre: 'ana karen', apellidos: 'perez prado', carrera: 'lic. pedagodia', codigo: 30431},
            {id: 3, nombre: 'pedro michael', apellidos: 'juarez hernandez', carrera: 'ing. industrial', codigo: 205431}
        ]
    };

    render () {
        const { suscriptores, eliminarSuscriptorAction, id } = this.props;
        console.log(suscriptores);
        if (suscriptores != null) {
            return (
                this.props.suscriptores.map((sus)=> <MostrarSuscriptor
                id={id}
                nombre={sus.nombre}
                apellidos={sus.apellidos}
                carrera={sus.carrera}
                codigo={sus.codigo}
                eliminarSuscriptorAction={eliminarSuscriptorAction}
                /> )
            )
        }else {
            return (
                <p className="alert alert-danger">No hay suscriptores</p>
            )
        }
        
    }
}

export default Suscriptores;