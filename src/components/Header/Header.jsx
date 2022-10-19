import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

export default function Header() {
    return (
        <div className={s.Header}>
            <h1 className={s.HeaderLogo}>react-hooks</h1>
            <div className={s.HeaderList}>
                <NavLink
                    className={(navData) =>
                        navData.isActive
                            ? `${s.HeaderLinkActive}`
                            : `${s.HeaderLink}`
                    }
                    to="hooks"
                >
                    Hooks
                </NavLink>
                <NavLink
                    to="documentation"
                    className={(navData) =>
                        navData.isActive
                            ? `${s.HeaderLinkActive}`
                            : `${s.HeaderLink}`
                    }
                >
                    Documentation
                </NavLink>
            </div>
        </div>
    );
}
