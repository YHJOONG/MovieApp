import React from 'react';
import { BrowserRouter as Router, useRoutes,} from 'react-router-dom';
import './css/App.css';

import About from "./pages/About";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function AppRoutes() {
  const routes = useRoutes(
    [
      {path:'/',element:<Home/>},
      {path:'/about',element:<About/>}
    ]
  )
  return routes;
}

function App(){
  return(
    <Router>
        <Navigation/>
        <AppRoutes/>
    </Router>
  );
}


export default App;
