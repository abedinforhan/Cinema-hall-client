import { createContext, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

export const UserContext=createContext();

function App() {
  const [user,setUser]=useState({})
  return (
    <UserContext.Provider value={[user,setUser]}>
     <Router>
       <Switch>
          <Route exact  path="/">
            <Home/>
          </Route>
          <Route exact  path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route  path="*">
            <h2> Error 404</h2>
          </Route>
       </Switch>
     </Router>
     </UserContext.Provider>
  );
}

export default App;
