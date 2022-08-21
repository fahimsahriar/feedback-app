import Card from "./shared/Card";
import { Link } from "react-router-dom";

function About(){
    return (
        <div className="container">
            <Card
                children={
                    <div className="about">
                        <h1>About project</h1>
                        <p>This is is for leaving feedback for a product or service</p>
                        <p>Version: 1.0.0</p>
                        <Link to='/'>Back to home</Link>
                    </div>
                } 
            />
        </div>
    )
}

export default About;