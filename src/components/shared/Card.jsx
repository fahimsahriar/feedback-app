import ReactPropTypes from "react";

function Card({children, reverse}) {
    // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    return (
        <div className="card" style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.3)' : '#fff',
            color: reverse ? '#fff' : '#000'
        }}>{children}</div>
    )
}
Card.defaultProps = {
    reverse: true,
}

Card.ReactPropTypes = {
    children: ReactPropTypes.node,
    reverse: ReactPropTypes.bool,

}
export default Card;