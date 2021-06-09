import React, {Component} from 'react';
import './homepage.css';
import Cover from './Cover';

class Homepage extends Component {

    render(){
        return(
            <div className = 'homepage-container'>
                <div className = 'homepage-content'>
                    <Cover />
                </div>
            </div>
        )

    }

}

export default Homepage;