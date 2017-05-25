import React from 'react'

const Empleado = ({nombre, email}) => (
    <li>
        <hr/>
        <p>{`Nombre: ${nombre}`}</p>
        <p>{`Email: ${email}`}</p>
        <hr/>
    </li>
);

export default Empleado;