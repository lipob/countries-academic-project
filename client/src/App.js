import { Switch, Route, Link } from "react-router-dom";
import CountriesTable from './modules/CountriesTable/CountriesTable.jsx';
import CountryDetail from './modules/CountryDetail/CountryDetail';
import Activity from './modules/Activity/Activity';
import './App.css';

function App() {
        return (
        <div className="App">
            <h1>Henry Countries</h1>
            <Link to='/'>Home</Link>
            <Link to='/countries'>Countries</Link>
            <Link to='/activity'>Create activity</Link>
            <Switch>
                <Route exact path='/countries' render={() => <CountriesTable />} />
                <Route exact path='/countries/:id' render={({match}) => <CountryDetail match={match} />} />
                <Route exact path='/activity' render={() => <Activity />} />
            </Switch>
        </div>
    );
}

export default App;