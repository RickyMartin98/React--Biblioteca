import React, { Component } from 'react';

class MostrarSuscriptor extends Component {


    deleteSuscriptor = (id) => {
        console.log("Id a eliminar: ",id);
        this.props.eliminarSuscriptorAction(id);
    }

    render () {
        const { nombre,apellidos, carrera, codigo, eliminarSuscriptorAction, id} = this.props;

        return (
            <div className="card text-white bg-secondary mb-3" style={styles.card}>
                 <div className="card-header">Suscriptor No. - {codigo}</div>
                 <div className="card-body">
                    <h4 className="card-title">{nombre } - {apellidos} </h4> 
                    <h3 className="card-parragraph">Carrera: {carrera}</h3> 
                 </div>
                 <div className="card-footer">
                    <button className="btn btn-success">Modificar</button> <button className="btn btn-danger" onClick={() => this.deleteSuscriptor(id)}>Eliminar</button>
                </div>
          </div>
        );
    }
}

const styles = {
    card: {
        maxWidth: '20rem',
        marginTop: '5%',
        marginLeft: '5%',
    }
};

export default MostrarSuscriptor;