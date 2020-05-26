import React, { Component } from 'react'

import getMovies from '../services/omdb-api'
import Movies from './movies'

class OmdbSearch extends Component {

    state= {
        keyword: '',
        movies: [],
    }

    keywordChanged = event => {
        this.setState( {
            keyword: event.target.value
        })
    }

    searchMovie = async () => {
        const keyword = this.state.keyword;
        const search = await getMovies(keyword)
        this.setState({
            movies: search
        })
    }


    render() {

        const moviesState = this.state.movies;
        let movies;
        if (moviesState) {
           movies = < Movies movies={this.state.movies} /> 
        } else {
           movies = <h2>No Movies Match That Search</h2>
        }


        return (
           <> 
            <h1>Omdb Search</h1>
            <div>
                <input 
                value={this.state.keyword} 
                className="omdb-search" 
                onChange={this.keywordChanged}
                placeholder="Enter a Movie Title"
                />
                <button 
                onClick={this.searchMovie}>
                    Search
                </button>
                <div className="movies-list">
                    {movies}
                </div>
            </div>
           </>
        )
    }
}

export default OmdbSearch;