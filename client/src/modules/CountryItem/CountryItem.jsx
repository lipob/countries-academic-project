import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CountriesList(props) {
    return (
        <Link to={`/countries/${props.id}`} key={props.id}>
            <li>
                <img src={props.flag} alt={props.name} />
                <span>{props.name}</span>
                <span>{props.region}</span>
            </li>
        </Link>
    );
};

export default (CountriesList);