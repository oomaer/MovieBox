import { useRouteMatch } from 'react-router';
import './contentdetailscard.css';

const ContentDetailsCard = ({content, details}) => {
    let {path} = useRouteMatch();
    console.log(details)
    return(
        <div className = 'content-details-card-container'>
            <div className = 'content-details-card'>
                <div className = 'content-details-card-topbar'>
                    <div className = 'content-details-card-topbar-left'>
                        <div>
                            <label className = 'contentdetailscard-topbar-left-toplbl' id = 'content-details-card-topbar-left-rating'>
                                {content.VOTEAVG}<span>/10</span>
                            </label>
                            <label className = 'contentdetailscard-topbar-left-btmlbl'>
                                {content.VOTECOUNT}
                            </label>
                        </div>
                        <div>
                            <label className = 'contentdetailscard-topbar-left-toplbl'>Popularity</label>
                            <label className = 'contentdetailscard-topbar-left-btmlbl'>
                                {content.POPULARITY}
                            </label>
                        </div>
                        <div>
                            <label className = 'contentdetailscard-topbar-left-toplbl'>Released</label>
                            <label className = 'contentdetailscard-topbar-left-btmlbl' id = 'contentdetailscard-topbar-releasedate'>
                                {content.RELEASEDATE}
                            </label>
                        </div>
                    </div>
                    <div className = 'content-details-card-topbar-right'>
                        <a href = {`${window.location.href.split('/#contentdetails-otherdetails-crew')[0]}/#contentdetails-otherdetails-crew`} >Full Cast and Crew</a>
                        <a href = '' >User Reviews</a>
                    </div>
                </div>


                <div className = 'content-details-card-body'>
                    <div className = 'content-details-card-body-details'>
                        <div className = 'card-body-details-topdetails'>
                            <img alt = 'content' src = {content.IMAGE}></img>
                            <div className = 'card-details-overview-stars-crew'>
                                <p id = 'content-details-card-overview'>{content.OVERVIEW}</p>
                                {content.TYPE === 'movie' 
                                ?(
                                    <div className = 'card-details-overview-stars-crew-crew'>
                                        <label>Director:  </label> 
                                        {details.crew.map((item, index) => {
                                            if(item.ROLE === 'Director'){
                                                if(index === 0){
                                                    return <label className = 'contentdetails-fg2'>{item.NAME} </label>
                                                }
                                                else{
                                                    return <label className = 'contentdetails-fg2'>, {item.NAME} </label>
                                                }
                                            }
                                        })}
                                    </div>
                                ):
                                (
                                    <div className = 'card-details-overview-stars-crew-crew'>
                                        <label>Creators:  </label> 
                                        {details.creators.map((index, item) => {
                                            if(index === 0){
                                                return <label className = 'contentdetails-fg2'>{item.NAME} </label>
                                            }
                                            else{
                                                return <label className = 'contentdetails-fg2'>, {item.NAME} </label>
                                            }
                                        })}
                                    </div>
                                )}

                                <div className = 'card-details-overview-stars-crew-stars'>
                                    <label>Stars: </label> 
                                    {details.cast.map((item, index) =>{
                                        if(index === 0){
                                            return <label className = 'contentdetails-fg2'> {item.NAME} </label>
                                        }
                                        else{
                                            return <label className = 'contentdetails-fg2'>, {item.NAME} </label>
                                        }
                                    })}

                                </div>
                            </div>
                        </div>

                    {/* lower portion of the card body */}
                        <div className = 'contentcard-contentdetails-otherdetails'>
                            <div id = 'contentdetails-otherdetails-cast' className = 'contentdetails-otherdetails-castandcrew'>
                                <h2>Cast</h2>
                                {details.cast.map(item => {
                                    return (
                                        <div className = 'contentdetails-otherdetails-member'>
                                            <label>{item.NAME}</label>
                                            <label>{item.CHARACTER}</label>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className = 'contentdetails-storyline contentdetails-block'>
                                <h2>Storyline</h2>
                                <div className = 'contentdetails-contentelement'>
                                    <h4 className = 'contentdetails-contentelement-headerlbl'>Plot Keywords:  </h4>
                                    {details.plot_keywords.map((item, index) => {
                                        if(details.plot_keywords.length - 1 === index){
                                            return <label>{item.NAME}  </label>    
                                        }
                                        else{
                                            return <label>{item.NAME},  </label>
                                        }
                                    })}
                                </div>
                                <div className = 'contentdetails-contentelement'>
                                    <h4 className = 'contentdetails-contentelement-headerlbl'>Genres: </h4> 
                                    {details.genres.map((item, index) => {
                                        if(details.genres.length - 1 === index){
                                            return <label>{item.NAME}  </label>    
                                       }
                                       else{
                                           return <label>{item.NAME},  </label>
                                       }
                                    })}   
                                </div>
                                    <div className = 'contentdetails-contentelement'>
                                    <h4 className = 'contentdetails-contentelement-headerlbl'>Tagline: </h4> 
                                    <label>{content.TAGLINE}</label>   
                                </div>
                            </div>

                            <div className = 'contentdetails-details contentdetails-block'>
                                <h2>Details </h2>
                                <div className = 'contentdetails-contentelement'>
                                    <h4 className = 'contentdetails-contentelement-headerlbl'>Release Date: </h4>
                                    <label>{content.RELEASEDATE}</label>
                                </div>
                                <div className = 'contentdetails-contentelement'>
                                    <h4 className = 'contentdetails-contentelement-headerlbl'>Languages: </h4>
                                    {details.languages.map((item, index) => {
                                        if(details.languages.length - 1 === index){
                                            return <label>{item.NAME}  </label>    
                                        }
                                        else{
                                            return <label>{item.NAME},  </label>
                                        }
                                    })}
                                </div>
                                <div className = 'contentdetails-contentelement'>
                                    <h4 className = 'contentdetails-contentelement-headerlbl'>Filming Locations: </h4>    
                                    {details.locations.map((item, index) => {
                                        if(details.locations.length - 1 === index){
                                            return <label>{item.NAME}  </label>    
                                        }
                                        else{
                                            return <label>{item.NAME},  </label>
                                        }
                                    })}
                                </div>
                                <div className = 'contentdetails-contentelement'>
                                    <h4 className = 'contentdetails-contentelement-headerlbl'>Runtime: </h4>
                                    <label>{content.RUNTIME}  minutes</label>
                                </div>
                                <div className = 'contentdetails-contentelement'>
                                    <h4 className = 'contentdetails-contentelement-headerlbl'>Rating: </h4>
                                    <label>{content.VOTEAVG} / 10</label>
                                </div>
                                <div className = 'contentdetails-contentelement'>
                                    <h4 className = 'contentdetails-contentelement-headerlbl'>Total Votes: </h4>
                                    <label>{content.VOTECOUNT}</label>
                                </div>
                            </div>
                            <div className = 'contentdetails-companycredits contentdetails-block'>
                                <h2>Company Credits</h2>
                                <div className = 'contentdetails-contentelement'>
                                    <h4 className = 'contentdetails-contentelement-headerlbl'>Production Companies: </h4>
                                    {details.production_co.map((item, index) => {
                                    if(details.production_co.length - 1 === index){
                                        return <label>{item.NAME}  </label>    
                                    }
                                    else{
                                        return <label>{item.NAME},  </label>
                                    }
                                    })}
                                </div>
                            </div>

                            <div id = 'contentdetails-otherdetails-crew' className = 'contentdetails-otherdetails-castandcrew'>
                                <h2>Crew</h2>
                                {details.crew.map(item => {
                                    return (
                                        <div className = 'contentdetails-otherdetails-member'>
                                            <label>{item.NAME}</label>
                                            <label>{item.ROLE}</label>
                                        </div>
                                    )
                                })}
                            </div>


                        </div>


                    </div>



                    <div className = 'content-details-card-body-pictures'>
                        {details.pictures.map(item => {
                            return <img alt = 'link' src = {item.LINK}></img>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentDetailsCard;