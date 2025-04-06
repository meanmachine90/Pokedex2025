import { useState } from "react";
import { NavLink } from "react-router"


export const Navigation = ({Logo, Title}) => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navigation">
            <div className="container">
                <a href="#">
                    <span className="brand">{Title}</span>
                </a>

                <div className="menutoogle">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="collapsed"
                        aria-controls="navbar-sticky"
                        aria-expanded={menuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                <div className={`menu ${menuOpen ? '' : 'hidden'}`} id="navbar-sticky">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/my-collection">My Collection</NavLink></li>
                        <li><NavLink to="/About">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}