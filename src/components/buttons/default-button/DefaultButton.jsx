import './DefaultButton.css'

const DefaultButton = ({ type, text, size, action}) => {
    return (
        <button
            className={`default-button ${type} ${size}`}
            onClick={action}
        >
            {text}
        </button>
    )
} 

export default DefaultButton;