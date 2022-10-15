import React, { useRef, useState } from 'react';
import s from './../Content/Content.module.scss';
import CustomInput from './CustomInput';
import FancyInput from './FancyInput';

export default function UseImperativeHandleComponent() {
    const [value, setValue] = useState('red');
    const inputRef = useRef();
    const onHandleClick = () => {
        inputRef.current.alertHi();
    };
    return (
        <div>
            <h1 className={s.ContentHeader}>
                UseImperativeHandle() - используется так: Родительский компонент
                передает свой ref в дочерний компонент, в дочернем компоненте
                есть свой ref, допустим с current.focus, используя данный хук,
                мы можем добавить к ref родительской компоненты дополнительную
                функцию ref-a дочерней компоненты, и теперь в родительской
                компоненте у нас будет +1 функция current.focus
            </h1>
            <div className={s.ContentExample}>
                <CustomInput
                    ref={inputRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <br />
                <button onClick={onHandleClick}>Focus</button>
                <pre>----------------------------------------</pre>
                <FancyInput />
            </div>
        </div>
    );
}
