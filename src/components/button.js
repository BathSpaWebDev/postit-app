function Button(props){
    const {rounded, buttonText} = props; 
    // destructuring the props object

    return (
        <button className={`button ${rounded ? 'round' : '' }`}>
            {buttonText}
        </button>
    )
}

export default Button;