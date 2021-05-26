import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchCountries } from '../../store/actions/countriesActions'

function SearchBar() {
    const [keyword, setKeyword] = useState('');

    const dispatch = useDispatch();
    const currentSearch = useSelector(state => state.countrySearch);
    const currentCountries = useSelector(state => state.countries);

    function onHandleChange(e) {
        var value = e.target.value;
        setKeyword(value)
    }

    function onSearch(e) {
        e.preventDefault();
        dispatch(searchCountries(keyword))
    }

    function clearInput() {
        document.getElementById('searchInput').value = ''
    }
    
    useEffect(clearInput)
    
    var results = ''
    if (keyword) {
        if (currentCountries.length) {
            results = 'Resultados para "' + currentSearch + '"';
        } else {
            results = 'No encontramos ningún país parecido a "' + currentSearch + '"'
        }
    }

    return (
        <div>
            <h4 className="mb05">Search countries</h4>
            <input 
                id="searchInput"
                type="text"
                placeholder="Search countries..."
                value={keyword}
                onChange={onHandleChange}
                className="mr1"
            />
            <button onClick={onSearch} className="button">Search</button>
            <p>{results}</p>
        </div>
    )
}

export default (SearchBar);