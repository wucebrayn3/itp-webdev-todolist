import "../styles/AboutStyle.css";

function About(){
    return(
        <div className="about">
            <h1>To-do list by: Valdez, Samuel, C.</h1>
            <h3>BSIT-2A</h3>
            <h3>Features:</h3>
            <ul>
                <li>Add/Remove task individually</li>
                <li>Clear all task</li>
                <li>Data persistence utilizing the browser's localStorage</li>
            </ul>
        </div>
    )
};

export default About;