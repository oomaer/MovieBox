import '../AddData/Content/searchbar.css';
import {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import './navsearchbar.css';

function useOutsideAlerter(ref, type) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                document.getElementById(`navbar-searchresults`).style.display = 'none';
            }
            else{
                document.getElementById(`navbar-searchresults`).style.display = 'block';
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

const NavSearchBar = () => {

    const [type, setType] = useState('Movies');
    const [searchInput, setSearchInput] = useState('');
    const [SearchArr, setSearchedArr] = useState([]);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, type);

    const onSearchChange = (event) => {
        setSearchInput(event.target.value);
        if(event.target.value === ''){
            setSearchedArr([]);
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
                        console.log('error searching');
                    }
                    else{
                        response.json().then(result => {
                            setSearchedArr(result);
                        })
                    }
                
                })
                .catch(err => {
                    console.log('error fetching search results');
                });  
        }
    }

    const changeType = (event) => {
        setSearchInput('');
        setSearchedArr([]);
        setType(event.target.value);
    }
    
    const onSearchResultClick = () => {
        setSearchInput('');
        setSearchedArr([]);
    }
    return(
            <div className="search-container" id = {`nav-search-container`}>
                <div className = 'nav-searchbar-type'>
                    <label>{type}</label>
                    <ul>
                        <li><button onClick = {changeType} value = {'Movies'}>Movies</button></li>
                        <li><button onClick = {changeType} value = {'TV Shows'}>TV Shows</button></li>
                        <li><button onClick = {changeType} value = {'Celebrities'}>Celebrities</button></li>
                    </ul>
                </div>
                <div ref = {wrapperRef} className="search-input">
                    <input type="text" value = {searchInput} onChange = {onSearchChange} placeholder="Type to search.."></input>
                    <div className="search-results-box" id = 'navbar-searchresults'>
                        {type === 'Celebrities' ? 
                        SearchArr.map((item, index) => {
                            return (
                                <Link key = {index} to = {`/celebrity/${item.ID}`}>
                                    <li onClick = {onSearchResultClick}>{`${item.NAME} (${item.BIRTHDATE})`}</li>
                                </Link>
                            )
                        })
                        :
                        SearchArr.map((item, index) => {
                            return (
                                <Link key = {index} to = {`/content/${item.ID}`}>
                                    <li onClick = {onSearchResultClick}>{`${item.TITLE} (${item.RELEASEDATE})`}</li>
                                </Link>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
    )
}

export default NavSearchBar;