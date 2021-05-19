import { useEffect } from 'react';
import { getCountryDetail } from '../../store/actions/countriesActions';
import { connect } from "react-redux"

function CountryDetail({countryDetail, getCountryDetail, match}) {
    const countryId = match.params.id
    useEffect(() => {
        getCountryDetail(countryId);
    }, [])
    console.log(countryDetail)
    return (
        <div>
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
                {countryDetail.activities && countryDetail.activities.map(activity => {
                    return <li>{activity.name}</li>
                })}
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