import React from 'react';

function Pagination({ countriesPerPage, totalCountries, paginate }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;