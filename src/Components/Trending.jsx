import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
class Trending extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Movies: [],
             baseUrl: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB}&language=en-US&page=1`
        };
    }
    componentDidMount(){
        axios.get(this.state.baseUrl)
        .then(res => {
            const movies = res.data;
            movies.results.sort((a, b) => {
                return b.popularity - a.popularity;
            });
            this.setState({
                Movies: movies.results.slice(0,4)
            })
        })
    }    
    render() {
        const{Movies} = this.state;
        return (
            <>
                <section className="latest-movies">
                    <div className="content">
                        <div className="latest-movies-title">
                            <h2 className="heading">Trending</h2>
                        </div>
                        <div className="all-movies">
                            {
                                Movies.map(item =>{
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
            </>
        )
    }
}

export default Trending
