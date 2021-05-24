import axios from 'axios';
import { COUNTRIES_URL } from '../../constants';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const FILTER_COUNTRIES_BY_REGION = 'FILTER_COUNTRIES_BY_REGION';
export const FILTER_COUNTRIES_BY_ACTIVITY = 'FILTER_COUNTRIES_BY_ACTIVITY';
export const SORT_COUNTRIES_BY_NAME = 'SORT_COUNTRIES_BY_NAME';
export const SORT_COUNTRIES_BY_POPULATION = 'SORT_COUNTRIES_BY_POPULATION';

export function getCountries() {
    return function(dispatch) {
        return axios
            .get(COUNTRIES_URL)
            .then((response) => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: response.data,
                });
            });
    }
}

export function searchCountries(value) {
    return function(dispatch) {
        return axios
            .get(`${COUNTRIES_URL}?name=${value}`)
            .then((response) => {
                dispatch({
                    type: SEARCH_COUNTRIES,
                    payload: response.data,
                    value
                });
            });
    }
}

export function getCountryDetail(countryId) {
    return function(dispatch) {
        return axios
            .get(`${COUNTRIES_URL}/${countryId}`)
            .then((response) => {
                dispatch({
                    type: GET_COUNTRY_DETAIL,
                    payload: response.data
                })
            })
    }
}

export function filterCountriesByRegion(region) {
    return {
        type: FILTER_COUNTRIES_BY_REGION,
        payload: region
    }
}

export function filterCountriesByActivity(activity) {
    return {
        type: FILTER_COUNTRIES_BY_ACTIVITY,
        payload: activity
    }
}

export function sortCountriesByName(order) {
    return {
        type: SORT_COUNTRIES_BY_NAME,
        payload: order
    }
}

export function sortCountriesByPopulation(order) {
    return {
        type: SORT_COUNTRIES_BY_POPULATION,
        payload: order
    }
}