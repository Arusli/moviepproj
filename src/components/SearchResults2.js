import React from 'react';
import Actor from './Actor'
const imageBaseUrlLarge = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
const imageBaseUrlSmall = 'https://www.themoviedb.org/t/p/w150_and_h225_bestv2';
const blankProfile = 'https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg'
class SearchResults2 extends React.Component {

    state = {}
    //adjust state here with onclick. pass this state to app.js with a callback prop, e.g. this.props.adjustState(this.state.state)

//BIG QUESTION: Is there a way to pass the e.id below in another way other than assigning it to the id of the div??

   mapArray(e) {
       if (e.profile_path) {
            return (
                <Actor 
                    actorId={e.id}
                    actorName={e.name}
                    profilePath={imageBaseUrlSmall + e.profile_path}
                    matchState={this.props.matchState}
                    click={this.props.click}
                />
            )
       } else {
           return (
                <Actor 
                    actorId={e.id}
                    actorName={e.name}
                    profilePath={blankProfile}
                    matchState={this.props.matchState}
                    click={this.props.click}
                />
            )
       }
      
   }

    render() {
        return (
            <div className="ui stackable four column grid" style={{display: this.props.display}}>
                {this.props.personArray.map(this.mapArray, this)}
            </div>
        )  
    }
}

export default SearchResults2;