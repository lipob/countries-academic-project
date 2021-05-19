import axios from 'axios';
import { COUNTRIES_URL } from '../../constants';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';

export function getCountries() {
    return function(dispatch) {
        return axios
            .get(COUNTRIES_URL)
            .then((response) => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: response.data
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