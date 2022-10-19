import React, { useState } from 'react';
import s from './../../Content/Content.module.scss';

export default function UseStateComponent() {
    let initialCount = 0;
    const [count, setCount] = useState(initialCount);
    // const [state, setState] = useState(initialState);
    return (
        <div className={s.ContentAlign}>
            <h1 className={s.ContentHeader}>
                UseState() - Возвращает значение с состоянием и функцию для его
                обновления.
            </h1>
            {/*
            const [state, setState] = useState(initialState) 
            Изначально state равен inititalState.
            Функция setState - предназначена для обновления состояния. Принимает в () новое значение состояния и перезаписывает state 
            */}
            <div className={s.ContentExample}>
                <pre>-------------------------------------------</pre>

                <button
                    type="button"
                    onClick={() => setCount((count) => count + 1)}
                >
                    +
                </button>
                <span style={{ margin: '0px 10px' }}>{count}</span>
                <button
                    type="button"
                    onClick={() => setCount((count) => count - 1)}
                >
                    -
                </button>
                <button type="button" onClick={() => setCount(initialCount)}>
                    Сброс
                </button>
            </div>
        </div>
    );
}
