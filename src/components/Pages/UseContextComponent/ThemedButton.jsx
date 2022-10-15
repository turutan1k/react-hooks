import React, { useContext } from 'react';
import { Context } from './context';
export default function ThemedButton() {
    const { user } = useContext(Context);
    return <div>{user}</div>;
}
