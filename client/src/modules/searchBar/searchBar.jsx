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
    
    var results = 'Mensaje de resultados'
    if (keyword) {
        if (currentCountries.length) {
            results = 'Resultados para "' + currentSearch + '"';
        } else {
            results = 'No encontramos ningún país parecido a "' + currentSearch + '"'
        }
    }

    return (
        <div>
            <input 
                id="searchInput"
                type="text"
                placeholder="Buscar"
                value={keyword}
                onChange={onHandleChange}
            />
            <button onClick={onSearch}>Buscar</button>
            <p>{results}</p>
        </div>
    )
}

export default (SearchBar);