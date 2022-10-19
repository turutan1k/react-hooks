import React, { createContext, useState } from 'react';
import s from './../../Content/Content.module.scss';
import ThemeComponent from './ThemeComponent';
import SimpleContextComponent from './SimpleContextComponent';
import styled from 'styled-components';
import AnotherContextComponent from './AnotherContextComponent';

export const Context = createContext();
export const AnotherContext = createContext();
export default function UseContextComponent() {
    const [userName] = useState('Garry');
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
        <div className={s.ContentAlign}>
            <Context.Provider value={{ userName, showUserName, Styles }}>
                <AnotherContext.Provider value={{ value, changeValue }}>
                    <ThemeComponent />
                    <SimpleContextComponent />
                    <pre>-</pre>
                    <AnotherContextComponent />
                </AnotherContext.Provider>
            </Context.Provider>
        </div>
    );
}
