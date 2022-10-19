import React, {
    useLayoutEffect,
    // useEffect,
    useState,
} from 'react';
import s from './../../Content/Content.module.scss';

export default function UseLayoutEffectComponent() {
    const [value, setValue] = useState(0);
    useLayoutEffect(() => {
        if (value === 0) {
            setValue(Math.random() * 9 + 99);
        }
    }, [value]);
    console.log('render', value);
    return (
        <div className={s.ContentAlign}>
            <h1 className={s.ContentHeader}>
                UseLayoutEffect() - тоже самое что и UseEffect, только действия
                выполняются синхронно
            </h1>
            <div className={s.ContentExample}>value:{value}</div>
            <button onClick={() => setValue(0)}>Click to reset </button>
        </div>
    );
}
