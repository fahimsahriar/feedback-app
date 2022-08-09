import ReactPropTypes from "react";
import FeedbackItem from './feedbackItem';

function FeedbackList({feedback,handleDelete2}) {
    if(!feedback || feedback.length === 0) {
        return(<p>No Reviews for this product</p>);
    }
    return (
        <div className="feedback-list">
            {feedback.map( stitem=>{
                return (
                <div key={stitem.id}>
                    <FeedbackItem  
                        item = {stitem}
                        handleDelete = {handleDelete2} 
                    />
                </div>)
            })}
        </div>
    )
}

FeedbackList.ReactPropTypes = {
    feedback: ReactPropTypes.array,
}
export default FeedbackList;