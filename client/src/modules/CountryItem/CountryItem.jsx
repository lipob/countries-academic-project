import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CountryItem.module.css';

function CountriesList(props) {
    return (
        <Link to={`/countries/${props.id}`} key={props.id} className={styles.countryListing}>
            <li className="mb05 p05">
                <img src={props.flag} alt={props.name} className="mr1" />
                <div className={styles.countryDetails}>
                    <span className={styles.countryName}>{props.name}</span>
                    <span className={styles.countryRegion}>{props.region}</span>
                </div>
            </li>
        </Link>
    );
};

export default (CountriesList);