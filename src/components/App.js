import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Films from './Films';
import axios from 'axios';


const key = 'b48c4b54c6c63147c8e82f9fe931740c';
const imageBaseUrlLarge = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
const imageBaseUrlSmall = 'https://www.themoviedb.org/t/p/w150_and_h225_bestv2';
const blankProfile = 'https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg'
const blank = 'https://cdn-d8.nypl.org/s3fs-public/styles/hero_header_focal_point_320x400/public/2020-07/background-hero-image2_3.png?h=ef32067e&itok=2c3EYYaK'
// link: https://developers.themoviedb.org/3/search/search-movies

//photo endpoints:
// https://www.themoviedb.org/t/p/w150_and_h225_bestv2/
// https://www.themoviedb.org/t/p/w600_and_h900_bestv2/65TtWF5yOHnd5O6CiZGoezaBBgl.jpg
class App extends React.Component {

    state = {
        response: null,
        actorId: null,
        searchTerm: '',
        personResults: [],
        personArray: [],
        imageUrl: '',
        imageUrlSmall: '',
        filmArray: [],
        actorBio: '',
        resultsDisplay: 'none',
        actorName: '',
        profileUrl: '',
        profileUrl2: '',
        blank: blank
    };

    onSubmit = async (term) => {
        const personArray = [];
        const response = await axios.get('https://api.themoviedb.org/3/search/person', {
            params: {
                api_key: key,
                query: term
            } 
        })

        this.setState({
            filmArray: [],
            response: response.data, 
            personResults: response.data.results,
            resultsDisplay: 'inline',
            searchTerm: term.toUpperCase()
        });


        this.state.personResults.forEach(
            (e) => {
                personArray.push({name: e.name, id: e.id, profile_path: e.profile_path});
            });

        this.setState({personArray: personArray});

    }; //end onSubmit


//creates default actor image for use in imageless films //
    changeDefaultImage = async () => {
        const imageResponse = await axios.get(`https://api.themoviedb.org/3/person/${this.state.actorId}/images`, {
            params: {
                api_key: key,
            }
        });

        console.log(imageResponse.data);

        if (imageResponse.data.profiles.length > 0) {
            this.setState({
                imageUrl: imageBaseUrlLarge + imageResponse.data.profiles[0].file_path,
                imageUrlSmall: imageBaseUrlSmall + imageResponse.data.profiles[0].file_path
            });
  
        } else {
            this.setState({
                imageUrl: blankProfile,
                imageUrlSmall: blankProfile
            });
        };
    }
        
//end: creates default actor image for use in imageless films //


    getCredits = async () => {
        const response2 = await axios.get(`https://api.themoviedb.org/3/person/${this.state.actorId}/combined_credits`, {
            params: {
                api_key: key
            }
        })
        
        const response3 = await axios.get(`https://api.themoviedb.org/3/person/${this.state.actorId}`, {
            params: {
                api_key: key
            }
        })
           
        this.setState({filmArray: response2.data.cast}); //movies/tv shows in which this person was in the CAST!

        //this array SHOULD BE SORTED BY POPULARITY/RELEASE DATE IF POSSIBLE
        
        if (response3.data.biography) {
            this.setState({
                actorBio: response3.data.biography,
                actorName: response3.data.name,
                profileUrl: imageBaseUrlLarge + response3.data.profile_path,
                actorName: response3.data.name
                });
        } else {
            this.setState({
                actorBio: 'Biography unavailable.',
                actorName: response3.data.name
            });
        }
      
        console.log(response2.data);
        console.log(response3.data);
        console.log(this.state.profileUrl)
    }

    changeFilms() {
        this.getCredits();
        this.changeDefaultImage();
    }
   
    logger() {
        console.log('logger!');
    }

    //pass as prop
    onClick = async (event) => {
        await this.setState({actorId: event.currentTarget.id});
        await this.setState({filmArray: []});
        this.changeFilms();
        this.setState({resultsDisplay: 'none'});
        console.log(this.state.resultsDisplay);
    };
 
 

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSubmit} display={this.state.resultsDisplay} />
                <SearchResults 
                    image={this.state.imageUrl} 
                    personArray={this.state.personArray} 
                    click={this.onClick} 
                    display={this.state.resultsDisplay} 
                    searchTerm={this.state.searchTerm}
                    />
                <Films 
                    filmArray={this.state.filmArray} 
                    actorImage={this.state.imageUrlSmall} 
                    actorBio={this.state.actorBio} 
                    name={this.state.actorName}
                    blank={this.state.blank}
                />
            </div>
            
        );
    };
};

export default App;