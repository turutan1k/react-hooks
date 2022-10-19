import React from 'react';
import s from './../../Content/Content.module.scss';

import EmailForm from './EmailForm';
import useIdResult from './msg458026634-82183.jpg';
export default function UseIdComponent() {
    return (
        <div className={s.ContentAlign}>
            <h1 className={s.ContentHeader}>
                UseId() - Решает проблему с ключами и Айдишниками
            </h1>
            <div className={s.ContentExample}>
                <EmailForm />
                <article style={{ marginBlock: '1rem' }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </article>
                <EmailForm />
                <img src={useIdResult} alt="use id result" />
            </div>
        </div>
    );
}
