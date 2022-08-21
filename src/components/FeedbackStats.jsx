function FeedbackStats({feedback}) {
    const l = feedback.length;
    let sum = 0;
    function avg(feedback){
        feedback.map(item=>{
            sum = sum + item.rating;
        })
        return (sum=sum/l)
    }
    let avgf = avg(feedback).toFixed(1);
    return (
        <div className="feedback-stats">
            <div>{l} Reviews</div>
            <div>Average Rating: {isNaN(avgf)? '0': avgf }</div>
        </div>
    )
}

export default FeedbackStats;