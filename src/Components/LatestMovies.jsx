import React, { Component } from 'react'
import axios from "axios";
import '../Css/LatestMovies.css'
import '../Css/App.css'
import SimilarMovies from './SimilarMovies';
import {Link} from "react-router-dom"
import Spinner from './Spinner';

class LatestMovies extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Movies: [],
             loading: false,
             baseUrl: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB}&language=en-US&page=1`
        };
    }
    componentDidMount(){
        this.setState({
            loading: true
        })
        axios.get(this.state.baseUrl)
        .then(res => {
            const movies = res.data;
            this.setState({
                Movies: movies.results,
                loading: false
            })
        })
    }    
    render() {
        const{Movies, loading } = this.state;
        return (
            <> 
                <div className="behind-nav"></div>
                <section className="latest-movies">
                    <div className="content">
                        <div className="latest-movies-title">
                            <h2>Latest Movies</h2>
                        </div>
                        <div className="all-movies">
                            { loading && <Spinner />}
                            {
                                !loading && Movies.map(item =>{
                                    if(item.poster_path != null)
                                    {
                                        return (
                                            <div className="movie border" key={item.id}>
                                                <div className="movie-poster">
                                                    <img src={"https://image.tmdb.org/t/p/w200/" +item.poster_path} alt={item.title} />
                                                </div>
                                                <div className="movie-text">
                                                    <Link to={`/movie/${item.id}`}>{item.title}</Link>
                                                </div>
                                            </div>
                                        )
                                    }
                                    else{
                                        return null
                                    }
                                })
                            }
                        </div>
                    </div>
                </section>
                <SimilarMovies />
            </>
        )
    }
}

export default LatestMovies
