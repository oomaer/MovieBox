import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import '../Filter/filterresultcard.css';
import './contentreviews.css';


const ContentReviews = ({user}) => {
    const [content, setContent] = useState({});
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    const [reviews, setReviews] = useState([]);
    const [found, setFound] = useState(true);

    useEffect(() => {
        fetch('http://localhost:4000/getContentReviews', {
                method: 'post',
                headers : {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    id: content.ID,
                    user_id: user.id
                })
            }).then(response => {
                if(!response.ok){  
                      
                }
                else{
                    response.json().then(result => {
                        console.log(result);
                        setReviews(result);
                    })
                }
            
            })
            .catch(err => {
                console.log('Error Connecting to Server')
            });

    }, [content, user]); 

    return(
        <div className = 'content-reviews-container'>
            {found === false ? (<h1>404 not found</h1>)
            :(
            <div className = 'content-reviews-content'>
                <h1>{content.TITLE}</h1>
                <label id = 'fetchedreviewscount'>({reviews.length} reviews)</label>
                <div className = 'content-ratecontent'>
                    <input type = 'number' placeholder = 'rating'></input>
                    <textarea maxLength = '500' placeholder = 'comment...'></textarea>
                </div>
                <ul>
                    {reviews.map(review => {
                        return (<li>
                            <div className = 'filterresultcard-container'>
                                <div className = 'filterresultcard-content'>
                                    <div className = 'filterresultcard-details'>
                                        <label id = 'filterresultcard-details-releasedate'>{review.REVIEW_DATE.split}</label>    
                                        <div className = 'filterresultcard-titleandrating'>
                                            <h3 id = 'filterresultcard-details-title'>{review.USERNAME}</h3>
                                            <label id = 'filterresultcard-details-rating'>★ {review.RATING}</label>
                                        </div>
                                        <p id = 'filterresultcard-detail-overview'>{review.COMMENT}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        )
                    })}
                </ul>
            </div>
            )}
        </div>
    )
}

export default ContentReviews;