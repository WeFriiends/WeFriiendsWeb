import './buttonActive.css'

const ButtonActive = (props) => {
    return (
        <button className="btn-active" onClick={props.onClick}>{props.name}</button>
    )
}

export default ButtonActive