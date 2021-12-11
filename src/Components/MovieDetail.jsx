import React, { Component } from 'react'
import axios from 'axios';
import '../Css/MovieDetail.css'
import Spinner from './Spinner';
class MovieDetail extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        
        this.state = {  
            loading: false,
            movieInfo: {},
            imdbID: "",
            Tmdbendpoint: "https://api.themoviedb.org/3/movie/",
            TmdbApiKey: `/external_ids?api_key=${process.env.REACT_APP_MOVIE_DB}&language=en-US`,
            OmdbendPoint: "https://www.omdbapi.com/?i=",
            OmdbApiKey: `&apikey=${process.env.REACT_APP_TMDB}`
        }
    }
    // inWords (number,decimals,recursiveCall) {
    //     const decimalPoints = decimals || 2;
    //     const noOfLakhs = number / 100000;
    //     let displayStr;
    //     let isPlural;
    //     // Rounds off digits to decimalPoints decimal places
    //     function roundOf(integer) {
    //         return +integer.toLocaleString(undefined, {
    //             minimumFractionDigits: decimalPoints,
    //             maximumFractionDigits: decimalPoints,
    //         });
    //     }
    //     if (noOfLakhs >= 1 && noOfLakhs <= 99) {
    //         const lakhs = roundOf(noOfLakhs);
    //         isPlural = lakhs > 1 && !recursiveCall;
    //         displayStr = `${lakhs} Lakh${isPlural ? 's' : ''}`;
    //     } else if (noOfLakhs >= 100) {
    //         const crores = roundOf(noOfLakhs / 100);
    //         const crorePrefix = crores >= 100000 ? this.inWords(crores, decimals, true) : crores;
    //         isPlural = crores > 1 && !recursiveCall;
    //         displayStr = `${crorePrefix} Crore${isPlural ? 's' : ''}`;
    //     } else {
    //         displayStr = roundOf(+number);
    //     }
    //     return displayStr;
    // }
    componentDidMount(){
        this._isMounted = true;
        const{match} = this.props;
        this.setState({
            loading: true
        })
        axios.get(this.state.Tmdbendpoint + match.params.id + this.state.TmdbApiKey)
        .then(res => {
            const data = res.data;
            this.setState({
                imdbID: data.imdb_id
            },()=>{
               axios.get(this.state.OmdbendPoint + this.state.imdbID + this.state.OmdbApiKey)
               .then(res =>{
                   const movies = res.data;
                   this.setState({
                       movieInfo: movies,
                       loading: false
                   })
               }) 
            })
        })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    // addComma(arr){
    //     let temp = "";
    //     arr.forEach((item)=>{
    //         temp+=item.name + ", "
    //     })
    //     return temp.slice(0,-2)+".";
    // }
    render() {
        const{movieInfo, loading} = this.state;
        return (
            <>
                <div className="behind-nav"></div>
                <section className="movie-detail">
                    <div className="content">
                        <div className="latest-movies-title">
                            <h2>Movie</h2>
                        </div>
                        <div className="details">
                            { loading && <Spinner />}
                                {!loading && <div className="movie-detail-content">
                                    <div className="left-content">
                                        <img src={movieInfo.Poster} alt={movieInfo.Title} />
                                    </div>
                                    <div className="right-content">
                                        <div className="right-top-section">
                                            <h3>{movieInfo.Title}</h3>
                                            <span className="imdb-rating" style={{color:"white"}}>IMDB : <i className="fas fa-star" style={{color:"#f5c518",margin:"0 5px"}}></i>{movieInfo.imdbRating}</span>
                                            <h4>Overview : &nbsp; <span className="movie-info-item">{movieInfo.Plot}</span></h4>
                                        </div>
                                        <div className="right-bottom-section">
                                            <div className="bottom-left">
                                                <h4>Released: &nbsp; <span className="movie-info-item">{movieInfo.Released}.</span></h4>
                                                <h4>Genre : <span className="movie-info-item">{movieInfo.Genre}.</span></h4>
                                                <h4>Director : <span className="movie-info-item">{movieInfo.Director}.</span></h4>
                                                <h4>Casts : <span className="movie-info-item">{movieInfo.Actors}.</span></h4>
                                                <h4>BoxOffice : &nbsp; <span className="movie-info-item">{movieInfo.BoxOffice}.</span></h4>
                                                <h4>Writers : &nbsp; <span className="movie-info-item">{movieInfo.Writer}.</span></h4>
                                                <h4>Runtime : &nbsp; <span className="movie-info-item">{movieInfo.Runtime}.</span></h4>
                                                <h4>Awards : &nbsp; <span className="movie-info-item">{movieInfo.Awards}.</span></h4>
                                                <h4>Country : &nbsp; <span className="movie-info-item">{movieInfo.Country}.</span></h4>
                                            </div>
                                            <div className="bottom-right">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </section>
            </>
            )
    }
}

export default MovieDetail
