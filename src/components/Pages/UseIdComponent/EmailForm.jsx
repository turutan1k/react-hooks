import React, { useId } from 'react';

export default function EmailForm() {
    const id = useId();
    return (
        <div>
            <label htmlFor="email">Email:</label>
            <input id={id} type="email" placeholder="Enter your E-mail" />
        </div>
    );
}
