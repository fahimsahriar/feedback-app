import { useState } from "react";
import {v4 as uuidv4} from 'uuid' //unique id generator


import FeedbackList from "./FeedbackList";
import FeedbackData from "../data/FeedbackData"; 
import FeedbackStats from "./FeedbackStats";
import FeedbackWriting from "./FeedbackWriting";
import AboutIcon from "./AboutIcon";


function Home() {
    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) =>{
        if(window.confirm('Are you deleting the feedback?')) {
            setFeedback(feedback.filter( (item)=> item.id!==id  ))
        }
    }
    const addFeedback = (newFeedback)=>{
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback]);
    }
    return (
        <>
            <div className="container">
                <FeedbackWriting handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList 
                    feedback={feedback}
                    handleDelete2 = {deleteFeedback}
                />
            </div>
            <AboutIcon />
        </>
    )
}
export default Home;