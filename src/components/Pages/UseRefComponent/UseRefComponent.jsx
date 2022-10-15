import React, { useEffect, useRef, useState } from 'react';
import s from './../Content/Content.module.scss';

export default function UseRefComponent() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [counter, setCounter] = useState(0);

    const inputEl = useRef(null);
    const onButtonCLick = () => {
        inputEl.current.focus();
    };
    const ref = useRef(null);
    useEffect(() => {
        ref.current = {
            counter: 0,
        };
    }, []);
    const nameInputRef = useRef();
    const surnameInputRef = useRef();
    const nameHandlerKeyUp = (e) => {
        if (e.key === 'Enter') surnameInputRef.current.focus();
    };
    const surnameHandlerKeyUp = (e) => {
        if (e.key === 'Enter') nameInputRef.current.focus();
    };
    return (
        <div>
            <h1 className={s.ContentHeader}>
                UseRef() - возвращает ref-объект, в котором хранится свойство
                .current, в котором хранится записанное ранее значение.
            </h1>
            <div className={s.ContentExample}>
                <button type="button" onClick={() => ref.current.counter++}>
                    На меня нажали {counter} раз(а)
                </button>
                <button
                    type="button"
                    onClick={() => setCounter(ref.current.counter)}
                >
                    Обновить
                </button>
                <pre>---------------------------------------------------</pre>
                <input ref={inputEl} type="text" />
                <button type="button" onClick={onButtonCLick}>
                    Установить фокус на поле ввода
                </button>
                <pre>---------------------------------------------------</pre>
                <form>
                    <input
                        ref={nameInputRef}
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyUp={nameHandlerKeyUp}
                    />
                    <input
                        ref={surnameInputRef}
                        type="text"
                        placeholder="Фамилия"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        onKeyUp={surnameHandlerKeyUp}
                    />
                </form>
            </div>
        </div>
    );
}
