import { useEffect } from 'react';
import { getCountryDetail } from '../../store/actions/countriesActions';
import { connect } from "react-redux"

function CountryDetail({countryDetail, getCountryDetail, match}) {
    const countryId = match.params.id
    useEffect(() => {
        getCountryDetail(countryId);
    }, [])
    return (
        <div key={countryDetail.id}>
            <div>
                <img src={countryDetail.flag} alt={countryDetail.name} />
                <p>{countryDetail.id}</p>
                <h3>{countryDetail.name}</h3>
                <p>Regio: {countryDetail.region}</p>
                <p>Sub-region: {countryDetail.subregion}</p>
                <p>Population: {countryDetail.population}</p>
                <p>Area: {countryDetail.area} Km2</p>
            </div>
            <div>
                <ul>
                    {countryDetail.activities && countryDetail.activities.map(activity => (
                        <li key={activity.id}>
                            <ul>
                                <li>Activity: {activity.name}</li>
                                <li>Difficulty: {activity.difficulty}</li>
                                <li>Duration: {activity.duration}</li>
                                <li>Season: {activity.season}</li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )  
}

const mapStateToProps = state => {
    return {
        countryDetail: state.countryDetail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCountryDetail: countryId => {
            dispatch(getCountryDetail(countryId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);