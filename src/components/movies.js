import React, { Component } from 'react'

class Movies extends Component {
    render() {
        return (
        <div>
           { 
            this.props.movies.map( (movie, i) =>
            <h3 key={i}>{movie.Title}</h3>
            )
           }
        </div>
        )
    }
}

export default Movies;