import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './Navbar.module.scss';
export default function Docbar() {
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
                            to="accessibility"
                        >
                            Accessibility
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="code-splitting"
                        >
                            Code-Splitting
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="context"
                        >
                            Context
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="error-boundaries"
                        >
                            Error Boundaries
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="forwarding-refs"
                        >
                            Forwarding Refs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="fragments"
                        >
                            Fragments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="higher-order-components"
                        >
                            Higher-Order Components
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="integrating-with-other-libraries"
                        >
                            Integrating with Other Libraries
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="jsx-in-depth"
                        >
                            JSX In Depth
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="optimizing-performance"
                        >
                            Optimizing Performance
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="portals"
                        >
                            Portals
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="profiler"
                        >
                            Profiler
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="react-without-es6"
                        >
                            React Without ES6
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="react-without-jsx"
                        >
                            React Without JSX
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="reconsiliation"
                        >
                            Reconciliation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="refs-and-the-dom"
                        >
                            Refs and the DOM
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="render-props"
                        >
                            Render Props
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="static-type-checking"
                        >
                            Static Type Checking
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="strict-mode"
                        >
                            Strict Mode
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="typechecking-with-prop-types"
                        >
                            Typechecking With PropTypes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="uncontrolled-components"
                        >
                            Uncontrolled Components
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive
                                    ? `${s.AppNavbarLinkActive}`
                                    : `${s.AppNavbarLink}`
                            }
                            to="web-components"
                        >
                            Web Components
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
