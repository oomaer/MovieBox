import './searchbar.css';
import {useState, useEffect, useRef} from 'react';

function useOutsideAlerter(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                document.getElementById("search-results-Crew Members").style.display = 'none';
            }
            else{
                document.getElementById("search-results-Crew Members").style.display = 'block';
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
}

const SearchBar = ({type, addItem}) => {

    const [searchInput, setSearchInput] = useState('');
    const [SearchPeople, setSearchPeople] = useState([]);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

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
                    console.log('error fetching celeb search results');
                });  
        }
    }

    const onListItemClick = (item) => {
        setSearchInput('');
        setSearchPeople([]);
        addItem(type, item);
    }

    return(
            <div className="search-container" id = {`search-container-${type}`}>
                <div ref = {wrapperRef} className="search-input">
                    <input type="text" value = {searchInput} onChange = {onSearchChange} placeholder="Type to search.."></input>
                    <div className="search-results-box" id = {`search-results-${type}`}>
                        {SearchPeople.map((item, index) => {
                            return (<li key = {index} onClick = {() => onListItemClick(item)}>{item.NAME}</li>)
                        })
                        }
                    </div>
                </div>
            </div>
    )
}

export default SearchBar;