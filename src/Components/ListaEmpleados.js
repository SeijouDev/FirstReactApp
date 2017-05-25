import React from 'react';

import Empleado from './Empleado'

const ListaEmpleados = ({empleados}) => (         
    <ul>
        <h3>{ empleados.map( e => ( <Empleado key={e.id} nombre={e.nombre} email={`${e.email}`} /> ))}</h3>
    </ul>
);

export default ListaEmpleados;
