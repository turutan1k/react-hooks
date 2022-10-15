import React, { useDeferredValue, useState } from 'react';
import s from './../Content/Content.module.scss';

export default function UseDeferredValueComponent() {
    const [value, setValue] = useState('');
    const deferredValue = useDeferredValue(value);
    const onChangeValue = (e) => {
        setValue(e.target.value);
        console.log(deferredValue);
    };
    return (
        <div>
            <div className={s.ContentHeader}>
                <h1 style={{ fontSize: '30px' }}>
                    UseDifferedValue() - Позволяет сделать отложенный рендер (То
                    же самое, что и
                    <span style={{ color: 'green' }}>UseTransition()</span>, но
                    все вычисления и действия выполняет сам реакт).
                </h1>
                <div style={{ background: '#282c99' }}>
                    Создает небольшой перерыв между написанием и
                    отображением(для избежания пролагов).
                </div>
            </div>

            <div className={s.ContentExample}>
                <input
                    type="text"
                    value={deferredValue}
                    onChange={onChangeValue}
                />
                <pre>{JSON.stringify(value, null, 2)}</pre>
            </div>
        </div>
    );
}
