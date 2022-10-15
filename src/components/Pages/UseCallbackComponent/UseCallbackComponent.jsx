import React, { useCallback, useEffect, useState } from 'react';
import s from './../Content/Content.module.scss';

export default function UseCallbackComponent() {
    const [
        message,
        // setMessage
    ] = useState('Message');
    const [counter, setCounter] = useState(0);
    const greeting = useCallback((text) => {
        console.log(text);
    }, []);

    useEffect(() => {
        greeting(message);
    }, [greeting, message]);
    return (
        <div>
            <h1 className={s.ContentHeader}>
                UseCallback - возвращает сохраненный результат вычисления
                функции, если не было изменений в зависимостях этой функции.
                Сохраняет результат вычисления и дает ссылку на одну и ту же
                функцию, даже после перерендера
            </h1>
            <button type="button" onClick={() => setCounter(counter + 1)}>
                На меня нажали {counter} раз
            </button>
        </div>
    );
}
