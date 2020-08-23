import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Pokedex
            </Link>

            {/*<div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/hello-world"
                    >
                        Hello World
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/bye-bye-world"
                    >
                        Bye Bye Wolrd
                    </NavLink>
                </div>
            </div>*/}
        </nav>
    )
}
