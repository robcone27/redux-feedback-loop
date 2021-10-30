import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Understanding2() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (understanding > 0 && understanding <= 5) {
            dispatch({ type: 'UNDERSTANDING2', payload: understanding });
            history.push('/supported3');
        } else {
            alert('Please enter a number 1 - 5');
        }
    };
    return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={handleSubmit}>
             
                <input
                    type="text"
                    value={understanding}
                    onChange={event => setUnderstanding(event.target.value)}
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    );
};




export default Understanding2;