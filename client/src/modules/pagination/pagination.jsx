import React from 'react';
import styles from './Pagination.module.css';

function Pagination({ countriesPerPage, totalCountries, paginate }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} className={styles.paginationPages}>
                        <button onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;