import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';

function Homepage() {
    return (
        <div className={styles.homepageContainer}>
            <div>
                <h1 className="homeTitle">Henry Countries</h1>
                <Link to='/countries' className="button">Enter</Link>
            </div>
        </div>
    )
}

export default Homepage;