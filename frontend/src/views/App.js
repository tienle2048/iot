
import './App.scss';
import '../styles/styles.scss'

import System from './System'
import Login from './login';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  return (
    <Router>
          <Switch>
            <Route path="/system">
              <System/>
            </Route>
            <Route path="/">
              <Login/>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;
