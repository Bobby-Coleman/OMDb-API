import React, { Component } from 'react'

class OmdbSearch extends Component {
    render() {
        return (
           <> 
            <h1>Ombd Search</h1>
            <div>
                <input className="omdb-search" placeholder="Enter a Movie Title"/>
                <button>Search</button>
            </div>
           </>
        )
    }
}

export default OmdbSearch;