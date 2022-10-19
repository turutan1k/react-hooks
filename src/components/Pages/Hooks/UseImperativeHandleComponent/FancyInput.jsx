import React, { forwardRef, useImperativeHandle, useRef } from 'react';

export default function FancyInput(props, ref) {
    const inputRef1 = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef1.current.focus();
        },  
    }));
    return <input ref={inputRef1} />;
}

FancyInput = forwardRef(FancyInput);
