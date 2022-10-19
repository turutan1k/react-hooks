import React, { useEffect, useState, useMemo } from 'react';
import s from './../../Content/Content.module.scss';

export default function UseMemoComponent() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [counter, setCounter] = useState(0);
    function createUser(name, surname) {
        const user = { name, surname };
        console.log(user);
        return user;
    }
    useEffect(() => {
        document.title = `На меня нажали ${counter} раз`;
    });
    const user = useMemo(() => createUser(name, surname), [name, surname]);
    return (
        <div className={s.ContentAlign}>
            <h1 className={s.ContentHeader}>
                UseMemo - возвращает сохраненный результат вычисления значений
                объекта, если не было изменений в зависимостях этого объекта
            </h1>
            <div className={s.ContentExample}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
                <pre>{JSON.stringify(user, null, 2)}</pre>
                <pre>-------------------------------</pre>
                <button type="button" onClick={() => setCounter(counter + 1)}>
                    На меня нажали {counter} раз
                </button>
            </div>
        </div>
    );
}
