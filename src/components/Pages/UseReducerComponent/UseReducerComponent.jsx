import React, { useReducer } from 'react';
import s from './../Content/Content.module.scss';

function init(initialState) {
    return { count: initialState };
}
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}
export default function UseReducerComponent() {
    //state - текущий стейт
    //reducer - функция, которая сравнивает хранимый type в dispatch, с описанным в себе case-ом, и возвращает измененный state.
    const initialState = 0;
    const [state, dispatch] = useReducer(reducer, initialState, init);
    return (
        <div>
            <h1 className={s.ContentHeader}>
                UseReducer() - альтернатива для useState. Используется при
                сложной логике состояния, котораая включает в себя несколько
                значений.
            </h1>
            <div className={s.ContentExample}>
                <button
                    type="button"
                    onClick={() => dispatch({ type: 'decrement' })}
                >
                    -
                </button>
                {state.count}
                <button
                    type="button"
                    onClick={() => dispatch({ type: 'increment' })}
                >
                    +
                </button>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({ type: 'reset', payload: initialState })
                    }
                >
                    reset
                </button>
            </div>
        </div>
    );
}
