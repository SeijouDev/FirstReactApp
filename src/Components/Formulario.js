import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

const Formulario = ({onAddEmployee}) => (
    <div>
        <Row>
            <Col md={3}>
                <form onSubmit={onAddEmployee} >
                    <FormControl type='text' placeholder='Nombre' name='nombre' />
                    <FormControl type='text' placeholder='Email' name='email' />            
                    <Button type="submit" bsSize="md" bsStyle="success">Guardar</Button>
                </form>
            </Col>
        </Row>
    </div>
);

export default Formulario;