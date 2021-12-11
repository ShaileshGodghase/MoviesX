import React, { Component } from 'react'
import '../Css/FindMovies.css'
import '../Css/App.css'
import axios from 'axios'
import SimilarMovies from './SimilarMovies'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'
// import NoImage from '../Images/NoImage.jpg'

class FindMovies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchQuery: " ",
            searchResult: [],   
            inputValue: "",
            loading: false,
            baseUrl: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB}&query=`
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        this.setState({
            searchQuery: this.state.inputValue,
            loading: true
        },()=>{
            axios.get(this.state.baseUrl + this.state.searchQuery)
            .then(res => {
                const result = res.data;
                this.setState({
                    searchResult: result.results,
                    loading: false
                })
            })
            .catch(error => {
                console.log(error)
            })
        })
    }
    changeHandler(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        const { inputValue, searchResult, loading } = this.state;
        return (
            <>
                <div className="behind-nav"></div>
                <section className="find-movies">
                    <div className="content">
                        <div className="search">
                            <div className="search-container">
                                <form onSubmit={this.submitHandler} >
                                    <input  className="search-container-input" type="text" placeholder="Search.." value={inputValue} onChange={this.changeHandler} required name="search" />
                                    <button className="s-btn" type="submit"><i className="fa fa-search heading"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="latest-movies-title">
                            <h2>Search Results</h2>
                        </div>
                        <div className="all-movies">
                            {searchResult.length === 0 ? "No Results Found" : ""}
                            {loading && <Spinner />}
                            {
                                !loading && searchResult.map(item => {
                                    if (item.poster_path != null) {
                                        return (
                                            <div className="movie border" key={item.id}>
                                                <div className="movie-poster">
                                                    <img src={"https://image.tmdb.org/t/p/w200/" + item.poster_path} alt={item.title} />
                                                </div>
                                                <div className="movie-text">
                                                    {/* <a href="/">{item.title}</a> */}
                                                    <Link to={`/movie/${item.id}`}>{item.title}</Link>
                                                </div>
                                            </div>
                                        )
                                    }else{
                                        return null
                                    }
                                })
                            }
                        </div>
                    </div>
                    <SimilarMovies />
                </section>
            </>
        )
    }
}

export default FindMovies
