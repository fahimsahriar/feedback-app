import Card from "./shared/Card";
import {useState} from 'react'
import Button from "./shared/Button";

function FeedbackWriting () {
    
    const [text,setText] = useState('');
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message,setMessage] = useState('');

    const handleChange = (writtenData)=>{
        if(text===''){
            setBtnDisabled(true);
            setMessage(null);
        } else if(text!='' && text.trim().length<=10) {
            setBtnDisabled(true);
            setMessage('Must be at least 10 character');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(writtenData.target.value);
    }
    return (
        <Card>
            <form>
                <h3>Give a feedback about our service</h3>
                <div className="input-group">
                    <input type="text" placeholder="Write Here" value={text} onChange={handleChange} />
                    <Button type='submit' isDisabled={btnDisabled}>Submit</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
            
        </Card>
    )
}
export default FeedbackWriting;