import React, { useContext } from 'react';
import { Context } from './UseContextComponent';

export default function SimpleContextComponent() {
    const { userName, showUserName } = useContext(Context);
    return (
        <div>
            <button onClick={() => showUserName(userName)}>
                Показать имя!
            </button>
        </div>
    );
}
