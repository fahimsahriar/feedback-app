const allRating = [1,2,3,4,5,6,7,8,9,10];

function FeedbackRating ({getRating,reverse}) {
    return (
        <ul className="rating">
            {Array.from(allRating, (i)=>{
                return (
                    <li key={`rarting-${i}`}>
                        <input 
                            type="radio" 
                            id={`num${i}`} 
                            name="ratingSet" 
                            value={i}
                            onChange={getRating} 
                            //checked={1}
                        />
                        <label style={{color: reverse ? '#000' : '#fff'}} htmlFor={`num${i}`}>{i}</label>
                    </li>
                )
            })}
            {/* <li>
                <input 
                    type="radio" 
                    id='num1' 
                    name="ratingSet" 
                    value='1'
                    onChange={handleChange} 
                    //checked={1}
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input 
                    type="radio" 
                    id='num2' 
                    name="ratingSet" 
                    value='2'
                    onChange={handleChange} 
                />
                <label htmlFor="num2">2</label>
            </li> */}
        </ul>
    )
}
FeedbackRating.defaultProps = {
    reverse: true,
}
export default FeedbackRating;