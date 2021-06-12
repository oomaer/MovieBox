import React, {Component} from 'react';
import './homepage.css';
import Cover from './Cover';
import TVShowCards from './TVShowCards';
class Homepage extends Component {

    render(){
        return(
            <div className = 'homepage-container'>
                <div className = 'homepage-content'>
                    <Cover />
                    <TVShowCards />
                    
                </div>
            </div>
        )

    }

}

export default Homepage;