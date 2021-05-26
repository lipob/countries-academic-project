import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div className="containerFluid bgPrimary mb3">
            <div className={`${styles.container} container py2 px2`}>
                <h1>
                    <Link to='/'>Henry Countries</Link>
                </h1>
                <nav className={styles.navbarLinks}>
                    <Link to='/countries'>Countries</Link>
                    <Link to='/activity'>Create activity</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;