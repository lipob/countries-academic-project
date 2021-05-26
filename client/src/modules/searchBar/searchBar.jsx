import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchCountries } from '../../store/actions/countriesActions'

function SearchBar() {
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState('');

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

    function clearResults(e) {
        e.preventDefault();
        dispatch(searchCountries(''));
        setResults('')
    }
    
    useEffect(() => clearInput())
    console.log(currentCountries.length)

    function resultsMessage() {
        if (currentSearch && currentCountries.length) {
            setResults('Resultados para "' + currentSearch + '"');
        } 
        if (currentSearch && !currentCountries.length) {
            setResults('No encontramos ningún país parecido a "' + currentSearch + '"')
        }
    }

    useEffect(() => {
        resultsMessage()
    }, [currentSearch])

    return (
        <div className="mb3">
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
            {results ? <p>{results}<button onClick={clearResults}>X</button></p> : false}
        </div>
    )
}

export default (SearchBar);