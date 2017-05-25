import React from 'react';
import ReactDOM from 'react-dom';
import Body from './Containers/Body'

import './index.css';


const MyApp = () => (
    <Body />
);

ReactDOM.render(<MyApp /> , document.getElementById('app'))
