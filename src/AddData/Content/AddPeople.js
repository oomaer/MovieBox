
import SearchBar from './SearchBar';
import './addpeople.css';

const AddPeople = ({type, added_arr, addItem, removeItem}) => {
    return(
        <div className = 'add-content-people-container'>
            <div className = 'add-content-people-content'>
                <h3>{type}</h3>
                <SearchBar type = {type} addItem = {addItem}/>
                <ul className = 'added-members'>
                    {added_arr.map((item, index) => {
                        return(
                            <li className = 'added-member-card'>
                                    <label className = 'added-member-card-name'>{item.NAME}</label>
                                    <label className = 'added-member-card-cross' onClick = {() => removeItem(index)}>x</label>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}

export default AddPeople;