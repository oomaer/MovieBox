import './searchbar.css';
import {useState} from 'react';

const SearchBar = ({type, addItem}) => {

    const [searchInput, setSearchInput] = useState('');
    const [SearchPeople, setSearchPeople] = useState([]);

    const onSearchChange = (event) => {
        setSearchInput(event.target.value);
        if(event.target.value === ''){
            setSearchPeople([]);
        }
        else{
            fetch('http://localhost:4000/search', {
                    method: 'post',
                    headers : {'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        match: event.target.value,
                        from: type
                    }
                    )
                }).then(response => {
                    if(!response.ok){
                        console.log('error searching celebs');
                    }
                    else{
                        response.json().then(result => {
                            setSearchPeople(result);
                        })
                    }
                
                })
                .catch(err => {
                    console.log('error feching celeb search results');
                });  
        }
    }

    const onListItemClick = (item) => {
        setSearchInput('');
        setSearchPeople([]);
        addItem(item);
    }

    return(
            <div className="search-container">
                <div className="search-input">
                    <input type="text" value = {searchInput} onChange = {onSearchChange} placeholder="Type to search.."></input>
                    <div className="search-results-box">
                        {SearchPeople.map((item) => {
                            return (<li onClick = {() => onListItemClick(item)}>{item.NAME}</li>)
                        })
                        }
                    </div>
                </div>
            </div>
    )
}

export default SearchBar;