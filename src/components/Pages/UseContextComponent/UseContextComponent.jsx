import React, { useState } from 'react';
import s from './../Content/Content.module.scss';
import ThemeComponent from './ThemeComponent';
import SimpleContextComponent from './SimpleContextComponent';
import styled from 'styled-components';
import AnotherContextComponent from './AnotherContextComponent';

export const Context = React.createContext();
export const AnotherContext = React.createContext();
export default function UseContextComponent() {
    const [userName, setUserName] = useState('Garry');
    const [value, setValue] = useState(0);
    let showUserName = (userName) => {
        alert(userName);
    };

    let changeValue = () => {
        setValue(value + 1);
    };

    const Styles = styled.div`
        color: red;
    `;
    return (
        <Context.Provider value={{ userName, showUserName, Styles }}>
            <AnotherContext.Provider value={{ value, changeValue }}>
                <ThemeComponent />
                <SimpleContextComponent />
                <pre>-</pre>
                <AnotherContextComponent />
            </AnotherContext.Provider>
        </Context.Provider>
    );
}
