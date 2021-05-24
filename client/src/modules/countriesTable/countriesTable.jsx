import React, { useState, useEffect } from 'react';
import { getCountries } from '../../store/actions/countriesActions';
import { useDispatch, useSelector } from "react-redux";
import CountryItem from '../CountryItem/CountryItem';
import Filters from '../Filters/Filters';
import Sort from '../Sort/Sort';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';

function CountriesTable() {
    var currentCountries = useSelector(state => state.countries);
    const filterRegion = useSelector(state => state.filterRegion);
    const filterActivity = useSelector(state => state.filterActivity);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getCountries());
    }, []);

    /* Filter countries by region */
    if (filterRegion && filterRegion !== 'All regions' ) {
        currentCountries = currentCountries.filter(country => country.region === filterRegion)
    }
    /* Filter countries by activities */
    if (filterActivity && filterActivity !== 'All activities') {
        currentCountries = currentCountries.filter(country => 
            country.activities.some(activity => activity.name === filterActivity))
    }

    return (
        <div>
            <h3>Countries</h3>
            <SearchBar />
            <Filters />
            <Sort />
            <ul>
                {currentCountries.map(country => 
                    <CountryItem 
                        id={country.id} 
                        name={country.name} 
                        flag={country.flag} 
                        region={country.region} 
                        key={country.id} />
                )}
            </ul>
            <Pagination />
        </div>
    )
}

export default (CountriesTable);