import { useEffect } from 'react';
import { getCountryDetail } from '../../store/actions/countriesActions';
import { connect } from "react-redux";
import styles from './CountryDetail.module.css';

function CountryDetail({countryDetail, getCountryDetail, match}) {
    const countryId = match.params.id
    useEffect(() => {
        getCountryDetail(countryId);
    }, [])
    return (
        <div key={countryDetail.id} className={`${countryDetail} container`}>
            <div className={styles.countryDetailInfo}>
                <img src={countryDetail.flag} alt={countryDetail.name} />
                <div>
                    <p>{countryDetail.id}</p>
                    <h2>{countryDetail.name}</h2>
                    <p><b>Region:</b> {countryDetail.region}</p>
                    <p><b>Sub-region:</b> {countryDetail.subregion}</p>
                    <p><b>Population:</b> {countryDetail.population}</p>
                    <p><b>Area:</b> {countryDetail.area} Km2</p>
                </div>
            </div>
            <div className={styles.countryDetailActivities}>
                <h3>Tourist Activities</h3>
                <ul>
                    {countryDetail.activities && countryDetail.activities.map(activity => (
                        <li key={activity.id}>
                            <ul className={styles.activitiesList}>
                                <li><b>Activity:</b> {activity.name}</li>
                                <li><b>Difficulty:</b> {activity.difficulty}</li>
                                <li><b>Duration:</b> {activity.duration} hs.</li>
                                <li><b>Season:</b> {activity.season}</li>
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