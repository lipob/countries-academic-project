import CountryRow from '../countryRow/countryRow';
import Filters from '../filters/filters';
import Order from '../order/order';
import SearchBar from '../searchBar/searchBar';
import Pagination from '../pagination/pagination';
import { getCountries } from '../../store/actions/countriesActions';
import { connect } from 'react-redux';

function CountriesTable({countries, getCountries}) {
    return (
        <div>
            <h3>Countries</h3>
            <SearchBar />
            <Filters />
            <Order />
            <ul>
                {countries.map((country) => {
                    return <CountryRow flag={country.flag} name={country.name} region={country.region} key={country.id} id={country.id} />
                })}
            </ul>
            <Pagination />
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(CountriesTable);