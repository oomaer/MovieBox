
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './cardssection1.css';

const CardsSection1 = () => {

    const [data, setData] = useState([{COVER:''}]);

    useEffect(() => {
        fetch('http://localhost:4000/filterContent', {
                method: 'post',
                headers : {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    type: 'movie',
                    filter: 'popularity',
                    rows: 7
                })
            }).then(response => {
                if(!response.ok){  
                    console.log('error fetching data') 
                }
                else{
                    response.json().then(result => {
                        console.log(result)
                        setData(result)
                    })
                }
            
            })
            .catch(err => {
                this.setState({statusMsg: 'Error Connecting to Server'})
            });

    }, []); 

    return(
        <div className = 'cardssection1-container'>
            <div className = 'cardssection1-content'>
                <div className = 'cardsection1-header'>
                    <h2>Trending Movies</h2>
                </div>
                <div className = 'cardsection1-leftcard-container'>
                    <div className = 'cardsection1-leftcard-content' style = {{'background' : `url(${data[0].COVER})`}}>
                        <label>Name</label>
                    </div>
                </div>
                <div className = 'cardsection2-rightcards-container'>

                </div>
            </div>
        </div>
    )

}

export default CardsSection1;