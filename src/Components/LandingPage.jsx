import React, { Component } from 'react'
import '../Css/App.css'
import '../Css/LandingPage.css'
import MoneyHeist from '../Images/MoneyHeist.png'
import Marvel from '../Images/MarvelTv.png'
import SectionWithImage from './SectionWithImage'
import { Link } from 'react-router-dom'
import Trending from './Trending'
import UpcomingMovies from './UpcomingMovies'


class LandingPage extends Component {
    render() {
        return (
            <>
                <div className="behind-nav"></div>
                <section className="landing-page">
                    <section className="title-section">
                        <div className="main-title">
                            <div className="content">
                                <div className="main-title-content">
                                    <div className="main-title-text">
                                        <h1>Unlimited movies, TV shows and more.</h1>
                                        <h3>Ready to Explore? Find the best Movie for You..!</h3>
                                        <Link className="red-btn" to="/find">Explore</Link>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </section>
                    <section className="trending">
                        <div className="content">
                            <UpcomingMovies />
                        </div>
                    </section>
                    <section className="trending">
                        <div className="content">
                            <Trending />
                        </div>
                    </section>
                    <section className="section-with-image">
                        <SectionWithImage 
                         h2="Enjoy on your TV."
                         h3="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                         img1={Marvel}
                         order="2"
                        />
                    </section>
                    <section className="section-with-image">
                        <SectionWithImage 
                         h2="Watch everywhere."
                         h3="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
                         img1={MoneyHeist}
                         order={"-1"}
                        />
                    </section>
                    <section className="get-started">
                        <div className="content">
                            <div className="get-started-content">
                                <h3>Check Out New Movies and TV Shows Here..!</h3>
                                <Link className="red-btn" to="/find">Explore</Link>
                            </div>
                        </div>
                    </section>
                </section>
            </>
        )
    }
}

export default LandingPage
