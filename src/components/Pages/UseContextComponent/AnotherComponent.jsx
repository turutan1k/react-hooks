import React from 'react';
import { AnotherContext } from './AnotherContextComponent';

export default function AnotherComponent() {
    const { value, changeValue } = React.useContext(AnotherContext);
    return (
        <AnotherContext.Consumer>
            {(value) => <div>{value}</div>}
            <button onClick={changeValue}>Click me to change value</button>
        </AnotherContext.Consumer>
    );
}
