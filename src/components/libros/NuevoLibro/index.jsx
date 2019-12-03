import React, { Component } from 'react';

class NuevoLibro extends Component {
    state = {
        libro: '',
        cantidad: 0
    };

    getValues = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render () {
        return (
           <form onSubmit={}>
               <div className="form-group">
                   <label>Libro: </label>
                   <input className="form-control" name="libro" type="text"  placeholder="Libro...." onChange={this.getValues} value={this.state.libro} />
               </div>
               <div className="form-group">
                   <label>Cantidad: </label>
                   <input className="form-control" name="cantidad" type="number" placeholder="Ingresa cantidad" onChange={this.getValues} value={this.state.cantidad} />
               </div>
           </form>
        );
    }
}

export default NuevoLibro;