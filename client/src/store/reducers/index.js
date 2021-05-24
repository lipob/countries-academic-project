import { GET_COUNTRIES, SEARCH_COUNTRIES, GET_COUNTRY_DETAIL, FILTER_COUNTRIES_BY_REGION, FILTER_COUNTRIES_BY_ACTIVITY } from '../actions/countriesActions';

const initialState = {
    countries: [],
    countryDetail: [],
    countrySearch: '',
    filterRegion: '',
    filterActivity: '',
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            };
        case SEARCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countrySearch: action.value
            };
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            };
        case FILTER_COUNTRIES_BY_REGION:
            return {
                ...state,
                filterRegion: action.payload
            };
        case FILTER_COUNTRIES_BY_ACTIVITY:
            return {
                ...state,
                filterActivity: action.payload
            }   
        default:
            return {
                ...state,
            };
    };
}

export default reducers;