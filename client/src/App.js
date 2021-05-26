import { Switch, Route } from "react-router-dom";
import CountriesTable from './modules/CountriesTable/CountriesTable.jsx';
import CountryDetail from './modules/CountryDetail/CountryDetail';
import Activity from './modules/Activity/Activity';
import Homepage from "./modules/Homepage/Homepage.jsx";
import Navbar from "./modules/Navbar/Navbar.jsx";

function App() {
        return (
        <div className="containerFluid">
            <Route path={['/countries', '/activity']}><Navbar /></Route>
            <Switch>
                <Route exact path='/' render={() => <Homepage />} />
                <Route exact path='/countries' render={() => <CountriesTable />} />
                <Route exact path='/countries/:id' render={({match}) => <CountryDetail match={match} />} />
                <Route exact path='/activity' render={() => <Activity />} />
            </Switch>
        </div>
    );
}

export default App;