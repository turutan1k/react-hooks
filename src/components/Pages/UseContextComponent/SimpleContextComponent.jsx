import React from 'react';
import { Context } from './UseContextComponent';

export default function SimpleContextComponent() {
    const { userName, showUserName } = React.useContext(Context);
    return (
        <div>
            <button onClick={() => showUserName(userName)}>
                Показать имя!
            </button>
        </div>
    );
}
