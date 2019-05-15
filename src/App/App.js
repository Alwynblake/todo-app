import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Landing from '../Landing/Landing';
import './App.scss';
import image from '../assets/image.png';

export default class App extends React.Component {
  render(){
    const HOME_ROUTE = '/';
    return(

        <main className="app">
          <BrowserRouter>
            <nav>
              <ul>
                <li><Link to={HOME_ROUTE}>Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
                {/*  place a header image here */}
              <img className='app-image' alt='icon' src={image}/>
            </nav>
            <Route exact path={HOME_ROUTE} component={Landing}/>
            <Route exact path="/dashboard" component={Dashboard}/>
          </BrowserRouter>
        </main>
    );
  }
}