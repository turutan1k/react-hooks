import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';
export default function Navbar() {
    return (
        <div className={s.AppNavbar}>
            <nav className={s.AppNavbarMenu}>
                <ul className={s.AppNavbarList}>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-state"
                    >
                        useState()
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-effect"
                    >
                        useEffect()
                    </NavLink>
                    {/* <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-context"
                    >
                        useContext()
                    </NavLink> */}
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-reducer"
                    >
                        useReducer()
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-callback"
                    >
                        useCallback()
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-memo"
                    >
                        useMemo()
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-ref"
                    >
                        useRef()
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-imperative-handle"
                    >
                        useImperativeHandle()
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-layout-effect"
                    >
                        useLayoutEffect()
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-debug-value"
                    >
                        useDebugValue()
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-deferred-value"
                    >
                        useDeferredValue()
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-transition"
                    >
                        useTransition()
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-id"
                    >
                        useId
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-sync-external-storage"
                    >
                        useSyncExternalStore()
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/use-insertion-effect"
                    >
                        useInsertionEffect()
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}
