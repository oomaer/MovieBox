
import SearchBar from './SearchBar';
import SearchBarForCast from './SearchBarForCast';
import './addelement.css';

const AddPeople = ({type, added_arr, addItem, removeItem}) => {
    return(
        <div className = 'add-content-element-container'>
            <div className = 'add-content-element-content'>
                <h3>{type}</h3>
                {type === 'Cast Members' 
                ? (<SearchBarForCast type = {type} addItem = {addItem}/>)
                : (<SearchBar type = {type} addItem = {addItem}/>)
                }
                <ul className = 'added-elements'>
                    {added_arr.map((item, index) => {
                        return(
                            <li key = {index} className = 'added-element-card'>
                                    <label className = 'added-element-card-name'>{item.NAME}</label>
                                    <label className = 'added-element-card-cross' onClick = {() => removeItem(type, index, item)}>x</label>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}

export default AddPeople;