import React, { useEffect, useState } from 'react';
import s from './../Content/Content.module.scss';

export default function UseEffectComponent() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            document.title = `You clicked ${count}`;
        }, 1000);
    });

    return (
        <div>
            <h1 className={s.ContentHeader}>
                UseEffect() - Принимает функцию, которая содержит императивный
                код, возможно, с эффектами. Используя этот хук, мы сообщаем
                React, что должно произойти после перерендеринга.
            </h1>
            {/* То есть, Данный хук используется для
                создания побочных эффектов, которые недопустимы в исполнение
                основного тела функционального компонента. */}
            {/* Функция, переданная в useEffect, запускается во время отложенного события после разметки и отрисовки. */}
            <div className={s.ContentExample}>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click</button>
            </div>
        </div>
    );
}
