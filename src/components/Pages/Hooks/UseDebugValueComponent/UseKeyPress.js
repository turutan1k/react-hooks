import { useEffect, useState, useDebugValue } from 'react';

export const useKeyPress = (keyTarget) => {
    const [isKeyPressed, setIsKeyPressed] = useState(false);
    useDebugValue(isKeyPressed ? 'Нажато' : 'Отжато');
    const downHandler = ({ key }) => {
        if (key === keyTarget) setIsKeyPressed(true);
    };
    // const upHandler = ({ key }) => {
    //     if (key === keyTarget) setIsKeyPressed(false);
    // };

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    });
    // useEffect(() => {
    //     window.addEventListener('keyup', upHandler);
    //     return () => {
    //         window.removeEventListener('keyup', upHandler);
    //     };
    // });

    return isKeyPressed;
};
