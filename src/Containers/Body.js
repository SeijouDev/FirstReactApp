import React from 'react';
import ListaEmpleados from '../Components/ListaEmpleados'
import Formulario from '../Components/Formulario'

export default class Body extends React.Component {

    constructor (){
        super();
        this.state = {
            empleados: [
                {id: 1 , nombre: 'Marlon' , email: 'alejo.1395@hotmail.com'},
                {id: 3 , nombre: 'Alejandro' , email: 'marloncastillo@misena.edu.co'}
            ]
        };
    }

    render () {
        return (
            <div id="body-container">
                <h1>Lista empleados</h1>
                <Formulario onAddEmployee={this.handleOnAddEmployee.bind(this)}/>
                <ListaEmpleados empleados={this.state.empleados} />
            </div>
        );
    }

    handleOnAddEmployee (event){
        event.preventDefault();
        let empleado = {
            nombre: event.target.nombre.value,
            email: event.target.email.value
        };
        this.setState({
            empleados: this.state.empleados.concat([empleado])
        });
    }
}

