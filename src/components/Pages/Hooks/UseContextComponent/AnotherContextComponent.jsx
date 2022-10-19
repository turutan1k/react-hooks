import React from 'react';
import { AnotherContext } from './UseContextComponent';

export default function AnotherContextComponent() {
    return (
        <AnotherContext.Consumer>
            {(data) => (
                <>
                    <div>{data.value}</div>
                    <button onClick={data.changeValue}>Click me</button>
                </>
            )}
        </AnotherContext.Consumer>
    );
}
