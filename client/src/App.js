import { useEffect } from 'react';
import axios from 'axios';
import { COUNTRIES_URL } from './constants';
import { getCountries } from './store/actions/countriesActions';
import { connect } from "react-redux"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CountriesTable from './modules/countriesTable/countriesTable.jsx';
import CountryDetail from './modules/countryDetail/countryDetail';
import './App.css';

function App({countries, getCountries}) {
    useEffect(() => {
        const getCountriesFunction = async () => {
            const result = await axios(COUNTRIES_URL);
            getCountries(result.data);
        }
        getCountriesFunction();
    }, []);
    return (
        <Router>
            <div className="App">
                <h1>Henry Countries</h1>
                <Link to='/'>Home</Link>
                <Link to='/countries'>Countries</Link>
                <Switch>
                    <Route exact path='/countries' render={() => <CountriesTable />} />
                    <Route path='/countries/:id' render={({match}) => <CountryDetail match={match} />} />
                </Switch>
            </div>
        </Router>
    );
}

const mapStateToProps = state => {
    return {
        countries: state.countries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCountries: country => {
            dispatch(getCountries(country))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
