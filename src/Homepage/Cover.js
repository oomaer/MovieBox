import React, {useState} from 'react';
import './cover.css';
import {useSwipeable} from 'react-swipeable'

const contentData = [
    ['https://i.ibb.co/n0GwnDf/the-nutcracker-and-the-four-realms-4k-8k-1920x1080.jpg',
    'The Nutcraker and The Four Realms', 2020, 'Action, Adventure, Family',
    '1hr 49 mins'],
    ['https://images2.alphacoders.com/507/507061.jpg',
    'Hobbit, An Unexpected Journey', 2012, 'Adventure, Fantasy',
    '2hr 49 mins'],
    ['https://images.alphacoders.com/675/675369.jpg',
    'The Intern', 2015, 'Comedy, Drama',
    '1hr 42 mins'],
    ['https://images8.alphacoders.com/106/1061766.jpg',
    'Thor: Ragnarok', 2017, 'Action, Adventure, Comedy',
    '2hr 10 mins'],
    ['https://images7.alphacoders.com/112/1125972.jpg',
    'The Mandalorian', 2019, 'Action, Adventure, Sci-Fi',
    '40 mins'],
    ['https://images4.alphacoders.com/115/115126.jpg',
    'WALL-E', 2008, 'Animation, Adventure, Family',
    '1hr 38 mins']
]

const Cover = () => {

    const [data] = useState(contentData);
    const [currentIndex, setCurrentIndex]  = useState(0);
    const [animation_class, setAnimationClass] = useState('');
    
     const handlers = useSwipeable({
        onSwipedLeft: () => changeCover(currentIndex + 1),
        onSwipedRight: () => changeCover(currentIndex - 1),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });

    // componentDidMount() {
    //     this.interval = setInterval(() => this.setState({currentIndex : (this.state.currentIndex+1) % 6}), 6000);
    // }
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    const changeCover = (index) => {
        index = index % 6;
        if(index === -1){
            index = 5;
        }
        if(index > currentIndex){
            setAnimationClass('animate__slideInRight');
        }
        else{
            setAnimationClass('animate__slideInLeft');
        }
        setCurrentIndex(index);
    }


        const backgroundimage = {'background-image': `url(${data[currentIndex][0]})`};
        return(
            <div className = 'cover-page'>
            <div key = {currentIndex} id = 'the-main-cover' {...handlers}
            className = {`cover-container animate__animated animate__faster ${animation_class}`} style = {backgroundimage}>
               
                <div className = 'cover-content' >
                    <div className = 'content-details'> 
                        <div className = 'small-details'>
                            <label>{data[currentIndex][2]}</label>
                            <label> | {data[currentIndex][3]}</label>
                            <label> | {data[currentIndex][4]}</label>
                        </div>
                        <h1>{data[currentIndex][1]}</h1>
                    </div>
                </div>

            </div>
            <div className = 'covers-list'>
      
                        {data.map((value, index) => {
                            return (
                                currentIndex === index ? (
                                    <div className = 'cover-card active-cover'>
                                        <img src = {data[index][0]} alt = 'covers'></img>
                                    </div>
                                )
                                :
                                (
                                    <div className = 'cover-card' onClick = {() => changeCover(index)}>
                                        <img src = {data[index][0]} alt = 'covers'></img>
                                    </div>
                                )                             
                            )
                        })}
                             
            </div>
            </div>
            
        )


}

export default Cover;