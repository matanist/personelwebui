import './App.css';
import PersonList from './Components/PersonList';
import EditPersonel from './Components/EditPersonel';
import YeniPersonel from './Components/YeniPersonel';
import { Route, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="container-fluid">
      <Navigation />
      <Switch>
        <Route exact path="/" component={PersonList} />
        <Route exact path="/edit/:id" component={EditPersonel} />
        <Route exact path="/yeniPersonel" component={YeniPersonel} />
      </Switch>
    </div>
  );
}

export default App;
