import Card from "./shared/Card";
import {useState} from 'react'

function FeedbackWriting () {
    
    const [text,setText] = useState('');
    const handleChange = (writtenData)=>{
        setText(writtenData.target.value)
    }
    return (
        <Card>
            <form>
                <h3>Give a feedback about our service</h3>
                <div className="input-group">
                    <input type="text" placeholder="Write Here" value={text} onChange={handleChange} />
                    <button>Submit</button>
                </div>
            </form>
        </Card>
    )
}
export default FeedbackWriting;