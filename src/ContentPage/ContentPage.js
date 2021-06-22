import {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './contentpage.css';
import ContentPageCover from './ContentPageCover';
import ContentDetailsCard from './ContentDetailsCard';
class ContentPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            id : this.props.match.params.id,
            content: {RELEASEDATE: ''},
            details: {  
                        creators: [],
                        genres: [],
                        pictures: [],
                        cast: [],
                        crew: [],
                        plot_keywords : [],
                        languages: [],
                        locations: [],
                        production_co: []},
            found: true
            
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/getContentData', {
                method: 'post',
                headers : {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    id : this.state.id
                })
            }).then(response => {
                if(!response.ok){  
                    this.setState({found: false});  
                }
                else{
                    response.json().then(result => {
                        this.setState({content: result})
                    })
                }
            
            })
            .catch(err => {
                this.setState({statusMsg: 'Error Connecting to Server'})
            });

            
            fetch('http://localhost:4000/getContentDetails', {
                method: 'post',
                headers : {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    content_id : this.state.id
                })
            }).then(response => {
                if(!response.ok){  
                    this.setState({found: false});  
                }
                else{
                    response.json().then(result => {
                        console.log(result);
                        this.setState({details: result})
                    })
                }
            
            })
            .catch(err => {
                this.setState({statusMsg: 'Error Connecting to Server'})
            });

    }


    render(){
        const {content, details} = this.state
        return(
            <div className = 'contentpage-container'>
                <div className = 'contentpage-content'>
                    <ContentPageCover content = {content} details = {details}/>
                    <ContentDetailsCard content = {content} details = {details}/>
                </div>
            </div>
        )
    }
}

export default withRouter(ContentPage);