import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterCountriesByRegion, filterCountriesByActivity } from '../../store/actions/countriesActions';

function Filters() {
    const [regions, setRegions] = useState([]);
    const [activities, setActivities] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedActivity, setSelectedActivity] = useState('');

    const currentCountries = useSelector(state => state.countries);
    const dispatch = useDispatch()
    
    /* Get all regions in an array */
    function getAllRegions() {
        var allRegions = ['All regions'];
        currentCountries.map(country => 
            country.region && allRegions.push(country.region));
        return [...new Set(allRegions)];
    }

    /* Get all unique activities in an array */
    function getAllActivities() {
        var allActivities = [];
        var allActivitiesNames = ['All activities'];
        currentCountries.map(country => 
            country.activities && allActivities.push(country.activities));
        allActivities.map(currentActivities => 
            currentActivities.length && currentActivities.map(activity => 
                allActivitiesNames.push(activity.name)));
        return [...new Set(allActivitiesNames)];
    }

    /* Set regions and activities states when component did mount */
    useEffect(() => {
        setRegions(getAllRegions);
    }, [currentCountries]);
    useEffect(() => {
        setActivities(getAllActivities);
    }, [currentCountries]);

    /* Handle selectors changes */
    function handleChangeSelectedRegion(event) {
        setSelectedRegion(event.target.value);
    }
    function handleChangeSelectedActivity(event) {
        setSelectedActivity(event.target.value);
    }

    /* Updates the store with current filters keywords */
    useEffect(() => {
        dispatch(filterCountriesByRegion(selectedRegion));
    }, [selectedRegion]);
    useEffect(() => {
        dispatch(filterCountriesByActivity(selectedActivity));
    }, [selectedActivity]);

    return (
        <div>
            <div>
                <h4>Filter by region</h4>
                <select value={selectedRegion} onChange={handleChangeSelectedRegion}>
                    {regions && regions.map((region, index) => 
                        <option value={region} key={index}>{region}</option>)}
                </select>
            </div>
            <div>
                <h4>Filter by activity</h4>
                <select value={selectedActivity} onChange={handleChangeSelectedActivity}>
                    {activities && activities.map((activity, index) => 
                        <option vlaue={activity} key={index}>{activity}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Filters;