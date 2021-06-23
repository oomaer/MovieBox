import {Link} from 'react-router-dom';
import './filterresultcard.css';

const FilterResultCard = ({item}) => {
    
    return(
        <div className = 'filterresultcard-container'>
            <div className = 'filterresultcard-content'>
                <Link to = {`/content/${item.ID}`}>
                    <div className = 'filterresultcard-image-container'>
                        <img alt = 'card' src = {item.IMAGE}></img> 
                    </div>
                </Link>
                <div className = 'filterresultcard-details'>
                    <label id = 'filterresultcard-details-releasedate'>{item.RELEASEDATE.split('-')[0]}</label>
                    <div className = 'filterresultcard-titleandrating'>
                        <Link to = {`/content/${item.ID}`}>
                            <h3 id = 'filterresultcard-details-title'>{item.TITLE}</h3>
                        </Link>
                        <label id = 'filterresultcard-details-rating'>★ {item.VOTEAVG}</label>
                    </div>
                    <p id = 'filterresultcard-detail-overview'>{item.OVERVIEW}</p>
                </div>

            </div>
        </div>
    )
}
export default FilterResultCard;