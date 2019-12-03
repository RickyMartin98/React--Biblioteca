import React, { Component } from 'react';

class EditarSuscriptor extends Component {
    state = {};
    render () {
            return (
                <div>
                    <form>
                        <div className="form-group">
                            <label>Nombre: </label>
                            <input className="form-control" type="text" placeholder="Ingresa Nombre"/>
                        </div>
                        <div>
                            <label>
                                Apellidos:
                                <input class="form-control" type="text" placeholder="Ingresa tus apellidos"/>
                            </label>
                        </div>
                        <input type="submit" value="Enviar datos"/>
                    </form>
                </div>
            );
    }
}

export default EditarSuscriptor;