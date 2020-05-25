import React, { Component } from 'react'
import getMovies from '../services/omdb-api'

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
        const movies = await getMovies(keyword)
        this.setState({
            movies: movies
        })
    }


    render() {
        return (
           <> 
            <h1>Ombd Search</h1>
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
                    {
                        this.state.movies.map( (movie, i) =>
                        <h3 key={i}>{movie.Title}</h3>
                        )
                    }
                </div>
            </div>
           </>
        )
    }
}

export default OmdbSearch;