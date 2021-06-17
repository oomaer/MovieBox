import React, {Component} from 'react';
import '../Content/addcontent.css';
import {withRouter} from 'react-router-dom';

class EditPerson extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.personid,
            name : '',
            gender: '',
            department: '',
            job: '',
            popularity: '',
            birthdate: '',
            biography: '',
            image: '',
            type: '',
            statusMsg: '',
            redirect: 'false'
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/getPerson', {
                method: 'post',
                headers : {'Content-Type' : 'application/json'},
                body: JSON.stringify(
                    {id: this.state.id}
                )
            }).then(response => {
                if(!response.ok){
                    this.setState({redirect: true});    
                }
                else{
                    response.json().then(result => {
                        this.setState({
                            name : result.NAME,
                            gender: result.GENDER,
                            department: result.DEPARTMENT,
                            popularity: result.POPULARITY,
                            type: result.TYPE,
                        });
                        if(result.TYPE === 'celebrity'){
                            this.setState({birthdate: result.BIRTHDATE,
                                            biography: result.BIOGRAPHY,
                                            image: result.IMAGE})
                        }
                        else{
                            this.setState({job: result.JOB})
                        }
                    })
                }
            
            })
            .catch(err => {
                this.setState({statusMsg: 'Error Connecting to Server'})
            });


    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onDepartmentChange = (event) => {
        this.setState({department: event.target.value});
    }

    onPopularityChange = (event) => {
        if(!(event.target.value > 100)){
            this.setState({popularity: event.target.value});
        }
    }

    onImageChange = (event) => {
        this.setState({image: event.target.value});
    }

    onBiographyChange = (event) => {
        this.setState({biography: event.target.value});
    }

    onGenderChange = (event) => {
        this.setState({gender: event.target.value});
    }

    onBirthdateChange = (event) => {
        this.setState({birthdate: event.target.value});
    }

    onJobChange = (event) => {
        this.setState({job: event.target.value});
    }

    validData = () => {
        const {name, department, job, birthdate, gender, image, type} = this.state;
        if(name === ''){
            this.setState({statusMsg: 'Name cannot be left empty'});
        }
        else if(department === ''){
            this.setState({statusMsg: 'Department cannot be left empty'});
        }
        else if(gender === ''){
            this.setState({statusMsg: 'Gender is required'});
        }
        else if(type === 'crew_member' && job === ''){
            this.setState({statusMsg: 'Job cannot be left empty'});
        }
        else if(type === 'celebrity' && birthdate === ''){
            this.setState({statusMsg: 'Date of birth is required'});
        }
        else if(type === 'celebrity' && image === ''){
            this.setState({statusMsg: 'Image link is required'});
        }
        else{
            this.setState({statusMsg: ''})
            return true;
        }
        return false;
    }

    confirmChanges = () => {
        if(this.validData()){
            fetch('http://localhost:4000/addPerson', {
                method: 'post',
                headers : {'Content-Type' : 'application/json'},
                body: JSON.stringify(
                    this.state
                )
            }).then(response => {
                if(!response.ok){
                    this.setState({statusMsg : 'Error Adding data'});    
                }
                else{
                    this.setState({statusMsg: 'Added Successfully'});
                }
            
            })
            .catch(err => {
                this.setState({statusMsg: 'Error Connecting to Server'})
            });

            }
    }
 

    render(){
        const {name, department, gender, popularity, type, birthdate, biography, image, job, statusMsg} = this.state;
        return(
            <div className = 'add-content-container'>
                <div className = 'add-content-main'>
                    <h1>Edit Content</h1>
                    <div className = 'add-content-inputs'>
                        <label>Name</label>
                        <input value = {name} maxLength = '55' onChange = {this.onNameChange}></input>
                        
                        <label>Department</label>
                        <input value = {department} maxLength = '32' onChange = {this.onDepartmentChange}></input>
                        
                        <label>Gender</label>
                        <input  maxLength = '15' value = {gender} onChange = {this.onGenderChange}></input>
                        
                        <label>Popularity</label>
                        <input type = 'number' value = {popularity} onChange = {this.onPopularityChange}></input>                    

                        {type === 'celebrity' ? 
                            (   <div className = 'add-movie-details'>
                                    <label>Biography</label>
                                    <textarea maxLength = '1000' id = 'movie-overview' value ={biography} onChange ={this.onBiographyChange}></textarea>
                                    <label>Date of Birth: </label>
                                    <input type = 'date' onChange = {this.onBirthdateChange} value = {birthdate}></input>
                                    <label>Image Link</label>
                                    <input type = 'url' maxLength = '500' value = {image} onChange = {this.onImageChange}></input>
                                </div>
                            ):(
                                <div className = 'add-tvshow-details'>
                                    <label>Job</label>
                                    <input maxLength = '25' onChange = {this.onJobChange} value = {job}></input>
                                </div>
                            )
                            }
                            <button className= 'add-content-btn' onClick = {this.confirmChanges}>Confirm</button>
                            <label id = 'add-content-status-msg'>{statusMsg}</label>
                    </div>
                    
                </div>
            </div>
        )   

    }
}

export default withRouter(EditPerson);