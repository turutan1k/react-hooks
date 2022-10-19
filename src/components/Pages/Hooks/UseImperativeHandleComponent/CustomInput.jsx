import React, { useImperativeHandle } from 'react';

function CustomInput({ style, ...props }, ref) {
    useImperativeHandle(
        ref,
        () => {
            return { alertHi: () => alert('hi') };
        },
        []
    );
    return (
        <input
            {...props}
            style={{
                border: 'none',
                backgroundColor: 'lightPink',
                padding: '.25em',
                borderBottom: '.1em solid black',
                borderTopRightRadius: '.25em',
                borderTopLeftRadius: '.25em',
                ...style,
            }}
        />
    );
}

export default React.forwardRef(CustomInput);
