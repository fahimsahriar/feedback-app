import { useState } from "react";
import FeedbackItem from "./feedbackItem";

function FeedbackList(feedback) {
    console.log(feedback.length);
    if(!feedback || feedback.length === 0) {
        return(<p>No Reviews for this product</p>);
    }
    return (
        <div className="feedback-list">
            <p>Reviews for this product</p>
        </div>
    );
}

export default FeedbackList;