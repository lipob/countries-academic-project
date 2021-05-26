import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector, usrDispatch } from 'react-redux';
import { getCountries } from '../../store/actions/countriesActions';
import { POST_ACTIVITY_URL } from '../../constants';
import styles from './Activity.module.css';

function Activity() {
    const [countriesList, setcountriesList] = useState([]);
    const [activityDetails, setActivityDetails] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: ''
    });
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [activityData, setActivityData] = useState({
        newActivity: {},
        countriesId: []
    })
    
    const allCountries = useSelector(state => state.countries);
    const dispatch = useDispatch();

    const season = ['Select season', 'Summer', 'Autumn', 'Winter', 'Spring'];
    const difficulty = ['Difficulty level', 1, 2, 3, 4, 5];

    function handleActivityInputChange(event) {
        setActivityDetails({
            ...activityDetails,
            [event.target.name]: event.target.value
        })
    }
    function handleSelectedCountries(event) {
        let options = event.target.options;
        let selectedOptions = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedOptions.push(options[i].value);
            }
        }
        setSelectedCountries(selectedOptions)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const postData = async () => {
            try {
                const response = await axios.post(POST_ACTIVITY_URL, activityData);
                console.log(response.data);
                alert(`Congratulations! You have created a new activity called ${activityDetails.name}`)
            } catch (error) {
                console.log(error);
            }
        }
        postData();
    }

    /* Sort countries by name to use in selection options */
    function sortCountriesNames() {
        return allCountries.sort((a,b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        })
    }

    useEffect(() => {
        dispatch(getCountries());
    }, [])

    useEffect(() => {
        sortCountriesNames()
        setcountriesList(allCountries);
    }, [allCountries]);

    useEffect(() => {
        setActivityData({
            newActivity: activityDetails,
            countriesId: selectedCountries
        })
    }, [activityDetails, selectedCountries])

    return (
        <div className="container">
            <h2 className="mb3">Add new tourist activity</h2>
            <form className={styles.activityForm} onSubmit={handleSubmit}>
                <div className="mb1">
                    <label>Activity name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Write a name for the activity"
                        onChange={handleActivityInputChange}
                        value={activityDetails.name}
                    />
                </div>
                <div className="mb1">
                    <label>Difficulty</label>
                    <select 
                        name="difficulty" 
                        onChange={handleActivityInputChange}
                        value={activityDetails.difficulty}
                    >
                        {difficulty.map((grade, index) => (
                            <option key={index} value={grade}>{grade}</option>
                        ))}
                    </select>
                </div>
                <div className="mb1">
                    <label>Duration</label>
                    <input 
                        type="text" 
                        name="duration" 
                        onChange={handleActivityInputChange}
                        value={activityDetails.duration}
                        placeholder="Hours"
                    />
                </div>
                <div className="mb1">
                    <label>Season</label>
                    <select 
                        name="season" 
                        onChange={handleActivityInputChange}
                        value={activityDetails.season}
                    >
                        {season.map((seasonName, index) => (
                            <option key={index} value={seasonName.toLowerCase()}>{seasonName}</option>
                        ))}
                    </select>
                </div>
                <div className="mb1">
                    <label>Related countries</label>
                    <select 
                        name="relatedCountries" 
                        multiple={true}
                        onChange={handleSelectedCountries}
                        value={selectedCountries}
                    >
                        {countriesList.map((country, index) => (
                            <option key={index} value={country.id}>{country.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="button mt2">Add activity</button>
            </form>
        </div>
    )
}

export default Activity;