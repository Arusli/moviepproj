import React from 'react';
import Results from './Results';

class SearchBar extends React.Component {

    state = {searchterm: 'actor'};

    onInputChange = (event) => {
        this.setState({searchterm: event.target.value});
        console.log(this.state.searchterm);
    }

    render() {
        return (
            <div>
                <h3>Filmography of: {this.state.searchterm}</h3>  
                {/* onSubmit */}
                <form> 
                    <input type="text" onChange={this.onInputChange} />
                </form>
                <Results searchterm={this.state.searchterm} />
            </div>         
        )
    }
}

export default SearchBar;