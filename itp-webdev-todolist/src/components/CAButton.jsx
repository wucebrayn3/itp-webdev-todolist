import "../styles/CAButtonStyle.css";

function CAButton (props){
    return(
        <button className="remove-all" onClick={props.onClickCommand}>DELETE ALL</button>
    )
}

export default CAButton;