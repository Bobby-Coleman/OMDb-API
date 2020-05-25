import React, { Component } from 'react'

class OmdbSearch extends Component {

    state= {
        keyword: ''
    }

    keywordChanged = event => {
        console.log(event.target.value)
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
                <button>Search</button>
            </div>
           </>
        )
    }
}

export default OmdbSearch;