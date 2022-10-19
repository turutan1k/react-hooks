import React, { useState, useTransition } from 'react';
import s from './../../Content/Content.module.scss';

export default function UseTransitionComponent() {
    const [isPending, startTransition] = useTransition();
    const [value, setValue] = useState('');
    const onChangeValue = (e) => {
        startTransition(() => {
            setValue(e.target.value);
        });
    };
    return (
        <div className={s.ContentAlign}>
            <h1 className={s.ContentHeader}>
                UseTransition() - Позволяет сделать отложенный рендер
            </h1>
            <ul>
                Не стоит использовать:
                <li>Любые пользовательские операции;</li>
                <li>Ввод в input(как мой пример);</li>
                <li>Нажатие на кнопку;</li>
                <li>Открытие dropDown;</li>
            </ul>
            <ul>
                Стоит использовать(Во всех случаях, когда рендер стоит выполнить
                параллельно, много отложенных):
                <li>Показать список подсказок</li>
                <li>
                    Перерисовать интерфейс на пользовательское взаимодействие
                </li>
                <li>Переключение tab'a</li>
            </ul>
            <div className={s.ContentExample}>
                {isPending && <h2>Loading...</h2>}
                <input type="text" value={value} onChange={onChangeValue} />
                <pre>{JSON.stringify(value, null, 2)}</pre>
            </div>
        </div>
    );
}
