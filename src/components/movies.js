import React, { Component } from 'react'
import Actors from './actors'


class Movies extends Component {


    
    render() {
        return (
        <>
        <div>
          <ul>
            { 
             this.props.movies.map( (movie, i) =>
             <div key={i} className="movie-card">
                 <li>{movie.Title}</li>
                 <li>{movie.Year}</li>
                 {/* <Actors title={movie.Title} /> */}
             </div> 
             )
            }
          </ul>
        </div>
        </>
        )
    }
}

export default Movies;