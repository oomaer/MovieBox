import React, { Component } from 'react';
import {withRouter, Redirect} from 'react-router-dom';
class EditProfile extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            age: ''
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/getUser', {
            method: 'post',
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringify(
            {
                email: this.props.user
            })
        }).then(response => response.json())
            .then(res => {
                this.setState({
                    name: res[0],
                    email: res[1],
                    password: res[3],
                    age: res[4]
                })
            });        
    }

    onNameChange = (event) =>{
        this.setState({name: event.target.value});
      }
    onPassChange = (event) =>{
        this.setState({password: event.target.value});
      }
    onEmailChange = (event) =>{
        this.setState({email: event.target.value});
      }

    onSaveClick = () => {
        fetch('http://localhost:4000/editUser', {
            method: 'post',
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringify(
            {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            })
        }).then(response => response.json())
        .then(res => console.log(res.message))

    }

    onDeleteClick = () => {
        fetch('http://localhost:4000/deleteUser', {
            method: 'post',
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringify(
            {
                id: this.props.user[0]
            })
        }).then(response => response.json())
        .then(res => {
            if(res.message === 1){
                console.log("user deleted");
                this.props.setUser([]);
            }
        })    
          
    }

    render(){
        const {name, email, password, age} = this.state;
        return(
            <div>
            {this.props.user.length === 0 ? (<Redirect to = '/' />)
            :(<div>
            <p>editing profile</p><br/>
            <p>Name: </p><input onChange = {this.onNameChange} value = {name}></input><br/>
            <p>Email: </p><input onChange = {this.onEmailChange} value = {email}></input><br/>
            <p>Password: </p><input onChange = {this.onPassChange} value = {password}></input><br/>
            <p>Age: </p><input onChange = {this.onAgeChange} value = {age}></input><br/>
            <button onClick = {this.onSaveClick}> Save Changes</button>
            <button onClick = {this.onDeleteClick}> Delete Account</button>
            </div>)
            }
            </div>
        );
    }
}
export default withRouter(EditProfile);