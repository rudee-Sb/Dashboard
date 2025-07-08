// src/components/NavLinkAdapter.jsx
import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkAdapter = forwardRef(({ to, className, children, ...rest }, ref) => (
    <NavLink
        to={to}
        ref={ref}
        className={({ isActive }) =>
            `${className ?? ''} ${isActive ? 'ps-active' : ''}`
        }
        {...rest}
    >
        {children}
    </NavLink>
));

export default NavLinkAdapter;
