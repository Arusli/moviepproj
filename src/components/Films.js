import React from 'react';

// const imageBaseUrlLarge = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
const imageBaseUrlSmall = 'https://www.themoviedb.org/t/p/w150_and_h225_bestv2';
class Films extends React.Component {

    //why isn't 'this' definied inside mapImages but it is inside render?
    mapImages(element) {
        if (element.media_type === 'movie') {
            if (element.poster_path && element.release_date) {
                return (
                    <div className="column" key={element.id}>
                        <div className="ui center aligned segment">
                            <img className="ui centered image" src={imageBaseUrlSmall + element.poster_path} alt={element.title} />
                            <h5>{element.title} ({element.release_date.substr(0,4)})</h5>
                        </div>
                    </div>
                )
            } else if (element.poster_path) {
                return (
                    <div className="column" key={element.id}>
                        <div className="ui center aligned segment">
                            <img className="ui centered image" src={imageBaseUrlSmall + element.poster_path} alt={element.title} />
                            <h5>{element.title} </h5>
                        </div>
                    </div>
                )
            }
        } else if (element.media_type !== 'movie') {
            if (element.poster_path && element.first_air_date) {
                return (
                    <div className="column" key={element.id}>
                        <div className="ui center aligned segment">
                            <img className="ui centered image" src={imageBaseUrlSmall + element.poster_path} alt={element.name} />
                            <h5>{element.name} ({element.first_air_date.substr(0,4)})</h5>
                        </div>
                    </div>
                )
            } else if (element.poster_path) {
                return (
                    <div className="column" key={element.id}>
                            <div className="ui center aligned segment">
                            <img className="ui centered image" src={imageBaseUrlSmall + element.poster_path} alt={element.name} />
                            <h5>{element.name} </h5>
                        </div>
                    </div>
                )
            }
        }
            
    }

    render() {        

        if (this.props.filmArray.length > 0) {
            return (
                <div className="ui container">
                    <div className="ui segment" style={{backgroundColor: "skyblue", padding: "20px"}}>
                        <div className="ui stackable grid">
                            <div className="four wide column">
                                <div className="ui center aligned container">
                                    <img className="ui centered image" src={this.props.profileUrlLarge} alt={this.props.actorName} />
                                    <h3>{this.props.actorName}</h3>    
                                </div>
                            </div>
                            <div className="ten wide column">{this.props.actorBio}</div>
                        </div>
                    </div>
                    <div className="ui center aligned container" style={{margin: "25px"}}>
                        <h4>FILM and TV CREDITS</h4>
                        <h4>(cast only)</h4>
                    </div>
                    <div className="ui stackable four column grid">
                        {this.props.filmArray.map(this.mapImages, this)}
                    </div>
                </div>        
            )
        } else {
            return (
                <div style={{display: "none"}}></div>
            )
        }
        
    }

}

//old code, could be useful later
    // if (!element.poster_path && element.release_date) {
            //     return (
            //         <div className="column" key={element.id}>
            //             {/* <div className="ui center aligned segment" style={{height: "100%", minHeight: "80px"}}>
            //                 <img className="ui centered small image" src={this.props.blank} alt={element.title} /> 
            //                 <h5>{element.title} ({element.release_date.substr(0,4)})</h5>
            //             </div> */}
            //              <div className="ui center aligned segment" style={{height: "100%", minHeight: "80px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            //                 {/* <img className="ui centered small image" src={this.props.blank} alt={element.title} />  */}
            //                 <h5>{element.title} ({element.release_date.substr(0,4)})</h5>
            //             </div>
            //         </div>
            //     )
            // } else if (!element.poster_path && !element.release_date) {
            //     return (
            //         <div className="column" key={element.id}>
            //             <div className="ui center aligned segment" style={{height: "100%", minHeight: "80px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            //                 <h5>{element.title}</h5>
            //             </div>
            //         </div>
            //     )
            // } else 

export default Films;