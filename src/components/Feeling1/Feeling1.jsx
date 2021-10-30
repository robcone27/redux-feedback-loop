import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Feeling1() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (feeling > 0 && feeling <= 5) {
            dispatch({ type: 'FEELING1', payload: feeling });
            history.push('/understanding2');
        } else {
            alert('Please enter a number 1 - 5');
        }
    };
return (
<div>
    <h2>How are you feeling today?</h2>
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={feeling}
        onChange={event => setFeeling(event.target.value)}
        />
        <button type="submit">NEXT</button>
    </form>
</div>
);
};


export default Feeling1