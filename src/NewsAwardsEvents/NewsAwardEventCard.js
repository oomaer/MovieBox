
import './newawardseventcard.css';
const NewsAwardEventCard = ({item}) => {

    return(
        <div className = 'newawardevent-container'>
            <div className = 'newawardevent-content'>
                <div className = 'newsawardevent-headeranddate'>
                    <h1>{item.NAME}</h1>
                    <label classsName = 'newsawardsevents-date'>{item.PUBLISHDATE || item.YEAR}</label>
                </div>
                <img className = 'newsawardevent-image' alt = 'newsaward' src = {item.IMAGE}></img>
                <p className = 'newsawardevent-discription'>{item.DISCRIPTION}</p>
            </div>
        </div>
    )
}

export default NewsAwardEventCard;