import { useState } from "react";
import Header from "./components/header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData"; 
import FeedbackStats from "./components/FeedbackStats";
import FeedbackWriting from "./components/FeedbackWriting";
import {v4 as uuidv4} from 'uuid'

function App()
{
    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) =>{
        if(window.confirm('Are you deleting the feedback?')) {
            setFeedback(feedback.filter( (item)=> item.id!=id  ))
        }
    }
    const addFeedback = (newFeedback)=>{
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback]);
    }
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackWriting handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList 
                    feedback={feedback}
                    handleDelete2 = {deleteFeedback}
                />
            </div>
        </>
    )
}
export default App