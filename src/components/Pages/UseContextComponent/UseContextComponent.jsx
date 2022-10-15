import React, { useState } from 'react';
import s from './../Content/Content.module.scss';
import Toolbar from './Toolbar';
import { Context } from './context';

export default function UseContextComponent() {
    const [user, setUser] = useState('Garry');
    return (
        <Context.Provider value={{ user }}>
            <div>
                <h1 className={s.ContentHeader}>
                    UseContext() - Принимает какое-то значение(объект),
                    описанный в родительской компоненте, которое поле можно
                    использовать в дочерних компонентах
                </h1>
                <div className={s.ContentExample}>
                    <h1>{`Hello ${user}!`}</h1>
                    <Toolbar />
                </div>
                <button onClick={() => setUser((user) => 'Nikita')}>
                    Click me
                </button>
            </div>
        </Context.Provider>
    );
}
