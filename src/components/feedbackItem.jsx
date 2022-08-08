import {useState} from 'react';

function FeedbackItem() {
    const [rating, setRate] = useState(5);
    const [reviewText, setText] = useState('This product is amazing');
    
    return (
        <div className='card'>
            <div className="num-display">{rating}</div>
            <div className="text-display">{reviewText}</div>
        </div>
    );
}

export default FeedbackItem;