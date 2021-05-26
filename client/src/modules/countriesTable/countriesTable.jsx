import React, { useState, useEffect } from 'react';
import { getCountries } from '../../store/actions/countriesActions';
import { useDispatch, useSelector } from "react-redux";
import CountryItem from '../CountryItem/CountryItem';
import Filters from '../Filters/Filters';
import Sort from '../Sort/Sort';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';

function CountriesTable() {
    const [listedCountries, setListedCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);

    var countries = useSelector(state => state.countries);
    const filterRegion = useSelector(state => state.filterRegion);
    const filterActivity = useSelector(state => state.filterActivity);
    const sortCountriesNames = useSelector(state => state.sortCountriesNames);
    const sortCountriesPopulation = useSelector(state => state.sortCountriesPopulation);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getCountries());
    }, []);
    
    useEffect(() => {
            setListedCountries(countries)
    }, [countries, filterRegion, filterActivity, sortCountriesNames, sortCountriesPopulation]);

    useEffect(() => {
        setCurrentPage(1)
    }, [filterRegion, filterActivity])

    /* Filter countries by region */
    if (filterRegion && filterRegion !== 'All regions' ) {
        countries = countries.filter(country => country.region === filterRegion)
    }
    /* Filter countries by activities */
    if (filterActivity && filterActivity !== 'All activities') {
        countries = countries.filter(country => 
            country.activities.some(activity => activity.name === filterActivity))
    }

    /* Sort countries by name */
    if (sortCountriesNames && sortCountriesNames !== 'selectOrder') {
        if (sortCountriesNames === 'AZ') {
            countries = countries.sort((a,b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            })
        }
        if (sortCountriesNames === 'ZA') {
            countries = countries.sort((a,b) => {
                if (a.name > b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
                return 0;
            })
        };
    }
    /* Sort countries by population */
    if (sortCountriesPopulation && sortCountriesPopulation !== 'selectOrder') {
        if (sortCountriesPopulation === 'asc') {
            countries = countries.sort((a,b) => {
                if (a.population > b.population) {
                    return 1;
                }
                if (a.population < b.population) {
                    return -1;
                }
                return 0;
            })
        }
        if (sortCountriesPopulation === 'desc') {
            countries = countries.sort((a,b) => {
                if (a.population > b.population) {
                    return -1;
                }
                if (a.population < b.population) {
                    return 1;
                }
                return 0;
            })
        };
    }

    /* Pagination set up */
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = listedCountries.slice(indexOfFirstCountry, indexOfLastCountry);
    /* Change page */
    function paginate(pageNumber) {
        setCurrentPage(pageNumber)
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
            <Pagination 
                countriesPerPage={countriesPerPage} 
                totalCountries={listedCountries.length} 
                paginate={paginate} 
            />
        </div>
    )
}

export default (CountriesTable);