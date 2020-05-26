
import getMovieTitle from '../services/getMovieTitle'
import React, { Component } from 'react';

class Actors extends Component {
    
    // title = this.props.Title
    
    getMovie = async () => {
        let movie = await getMovieTitle(this.title)
    }

    render() {
        return (
        <div>
            <p>{this.props.title}</p>
        </div>
        )
    }
}

export default Actors;
