import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './Navbar.module.scss';
export default function Hookbar() {
    return (
        <div className={s.AppNavbar}>
            <nav className={s.AppNavbarMenu}>
                <ul className={s.AppNavbarList}>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="use-state"
                        >
                            useState()
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="use-effect"
                        >
                            useEffect()
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="use-context"
                        >
                            useContext()
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="use-reducer"
                        >
                            useReducer()
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="use-callback"
                        >
                            useCallback()
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="use-memo"
                        >
                            useMemo()
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="use-ref"
                        >
                            useRef()
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="use-imperative-handle"
                        >
                            useImperativeHandle()
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="use-layout-effect"
                        >
                            useLayoutEffect()
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="use-debug-value"
                        >
                            useDebugValue()
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="use-deferred-value"
                        >
                            useDeferredValue()
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="use-transition"
                        >
                            useTransition()
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="use-id"
                        >
                            useId
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}
