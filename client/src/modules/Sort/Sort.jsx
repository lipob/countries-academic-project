import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortCountriesByName, sortCountriesByPopulation } from '../../store/actions/countriesActions';

function Order() {
    const [sortByNameOrder, setSortByNameOrder] = useState('');
    const [sortByPopulationOrder, setSortByPopulationOrder] = useState('');

    const dispatch = useDispatch();

    /* Handle sorting options */
    function handleSortByName(event) {
        setSortByNameOrder(event.target.value);
    }
    function handleSortByPopulation(event) {
        setSortByPopulationOrder(event.target.value);
    }

    /* Updates the store with current sorting options */
    useEffect(() => {
        dispatch(sortCountriesByName(sortByNameOrder));
    }, [sortByNameOrder]);
    useEffect(() => {
        dispatch(sortCountriesByPopulation(sortByPopulationOrder));
    }, [sortByPopulationOrder]);

    return (
        <div className="mr3">
            <div className="mb2">
                <h4 className="mb05">Sort by name</h4>
                <select value={sortByNameOrder} onChange={handleSortByName}>
                    <option value="selectOrder">Select order</option>
                    <option value="AZ">A-Z</option>
                    <option value="ZA">Z-A</option>
                </select>
            </div>
            <div className="mb2">
                <h4 className="mb05">Sort by population</h4>
                <select value={sortByPopulationOrder} onChange={handleSortByPopulation}>
                    <option value="selectOrder">Select order</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </div>
    )
}

export default Order;