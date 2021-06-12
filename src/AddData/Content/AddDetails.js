import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import AddPeople from './AddPeople';
import './adddetails.css';

class AddDetails extends Component{
    
    constructor(){
        super();
        this.state = {
            added_cast: [],
            added_crew: []
        }
    }
    
    

    containsObject = (array, object) => {
        for(let i = 0; i < array.length; i++){
            if(array[i].ID === object.ID){
                return true;
            }
        }
        return false;
    }

    addCast = (celeb) => {
        if(!(this.containsObject(this.state.added_cast, celeb))){
            let cast_arr = this.state.added_cast;
            cast_arr.push(celeb);
            this.setState({added_cast: cast_arr});
        }
    }

    removeCast = (index) => {
        let cast_arr = this.state.added_cast;
        cast_arr.splice(index, 1);
        this.setState({added_cast: cast_arr});
    }

    addCrew = (member) => {
        if(!(this.containsObject(this.state.added_crew, member))){
            let crew_arr = this.state.added_crew;
            crew_arr.push(member);
            this.setState({added_crew: crew_arr});
        }
    }

    removeCrew = (index) => {
        let crew_arr = this.state.added_crew;
        crew_arr.splice(index, 1);
        this.setState({added_crew: crew_arr});
    }

    render(){
        const id = this.props.match.params.contentid;
        const {added_cast, added_crew} = this.state;
        return(
            <div className = 'add-content-details-container'>
                <div className = 'add-content-details-main'>
                    <AddPeople type = 'Cast Members' added_arr = {added_cast} addItem = {this.addCast} removeItem = {this.removeCast}/>
                    <AddPeople type = 'Crew Members' added_arr = {added_crew} addItem = {this.addCrew} removeItem = {this.removeCrew}/>
                </div> 
            </div>
        )
    }
}

export default withRouter(AddDetails);