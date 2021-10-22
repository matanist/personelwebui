import './App.css';
import PersonList from './Components/PersonList';
import EditPersonel from './Components/EditPersonel';
import YeniPersonel from './Components/YeniPersonel';
import { Route, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import ChooseLanguage from './Components/ChooseLanguage';

function App() {
  return (
    <>
      <ChooseLanguage />
      <Switch>
        <Route exact path="/" component={PersonList} />
        <Route exact path="/edit/:id" component={EditPersonel} />
        <Route exact path="/yeniPersonel" component={YeniPersonel} />
      </Switch>
    </>
  );
}

export default App;
