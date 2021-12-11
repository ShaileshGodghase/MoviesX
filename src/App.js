import React, { Component } from 'react';
import FindMovies from './Components/FindMovies';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import UpcomingMovies from './Components/UpcomingMovies';
import LatestMovies from './Components/LatestMovies';
import MovieDetail from './Components/MovieDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/find" exact component={FindMovies} />
        <Route path="/latestmovies" exact component={LatestMovies} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/upcomingmovies" exact component={UpcomingMovies} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
      <Footer />
    </Router>
    </>
    )
  }
}

export default App
