import "../styles/HeaderStyle.css";
import CAButton from "./CAButton.jsx";

function Header(props){
    return(
        <header>
            <h1>To-Do List:</h1>
            <CAButton onClickCommand={props.command}></CAButton>
        </header>
    );
};

export default Header;