
const Button = ({ onPress, name }) => {
    return (
        <button onClick={onPress} style={{
            color: 'white',
            fontSize: 30,
            borderRadius: 10,
        }}>
            {name}
        </button>
    );
}

export default Button;