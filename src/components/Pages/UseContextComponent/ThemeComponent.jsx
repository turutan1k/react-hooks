import React from 'react';
import { Context } from './UseContextComponent';

export default function ThemeComponent() {
    const { Styles } = React.useContext(Context);
    return <Styles>Стилизованный компонент с помощью Context'a</Styles>;
}
