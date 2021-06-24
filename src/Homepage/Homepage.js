import React, {Component} from 'react';
import './homepage.css';
import Cover from './Cover';
import CardsSection1 from './CardsSection1';
class Homepage extends Component {

    render(){
        return(
            <div className = 'homepage-container'>
                <div className = 'homepage-content'>
                    <Cover />
                    <CardsSection1 />
                    
                </div>
            </div>
        )

    }

}

export default Homepage;