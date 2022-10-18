import React from 'react';
import { AnotherContext } from './UseContextComponent';

export default function AnotherContextComponent() {
    const { value, changeValue } = React.useContext(AnotherContext);
    return (
        <div>
            <div>{value}</div>
            <button onClick={changeValue}>Click me to change value</button>
        </div>
    );
}
