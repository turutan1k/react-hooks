import React, { useState } from 'react';
import s from './../Content/Content.module.scss';
import { useKeyPress } from './UseKeyPress';
import DebugImg from './msg458026634-82168.jpg';

export default function UseDebugValueComponent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    //!----------------------------------------------
    const isJapanPressed = useKeyPress('j');
    const isChinaPressed = useKeyPress('c');
    const isBelarusPressed = useKeyPress('b');
    const isAustraliaPressed = useKeyPress('a');

    //!----------------------------------------------
    return (
        <div>
            <h1 className={s.ContentHeader}>
                UseDebugValue() - Используется, если есть необходимость
                проверить текущее хранимое значение через DevTools
            </h1>
            <div className={s.ContentExample}>
                FirstName:{''}
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter name"
                />
                <br />
                LastName:{''}
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter surname"
                />
                <pre>--------------------------------------</pre>
                <span>
                    useDebugValue(isKeyPressed ? 'Нажато' : 'Отжато'); // only
                    for custom hooks (Показывается в DevTools)
                </span>
                <pre>--------------------------------------</pre>
                <span>Click buttons [J], [C], [S],[A]</span>
                {isJapanPressed && <div>🇯🇵</div>}
                {isChinaPressed && <div>🇨🇳</div>}
                {isBelarusPressed && <div>🇧🇾</div>}
                {isAustraliaPressed && <div>🇦🇺</div>}
                <pre>--------------------------------------</pre>
                <img src={DebugImg} alt="debug img result" />
                <pre>--------------------------------------</pre>
            </div>
        </div>
    );
}
