


import "./App.css";
import { useCallback, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Users(props) {
  return <div>{props.condition ? <h2>Ye to khaali hai😂</h2> : "Can't access without Login"}</div>;
}

function Dashboard(props) {
  return (
    <div>{props.condition ? <h2>Dashboard</h2> : "Can't access without Login"}</div>
  );
}

function App() {
    const [isTextChanged, setIsTextChanged] = useToggle();
    
    return (
       
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </nav>
    

    <div className="main">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users condition = {isTextChanged} />
              </Route>
              <Route path="/dashboard">
              <Dashboard condition={isTextChanged} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <button className="appss" onClick={setIsTextChanged}>{isTextChanged ? 'Logout' : 'Login'}</button>
    
          </div>
</div>
        </Router>);
        
}

const useToggle = (initialState = false) => {
 
    const [state, setState] = useState(initialState);
    
       const toggle = useCallback(() => setState(state => !state), []);
    
    return [state, toggle]
}

function Home() {
  return <h2 className="appss">Home</h2>;
}

function About() {
  return <h2 className="appss">About</h2>;
}


export default App;