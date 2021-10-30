import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Supported3() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [supported, setSupported] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (supported > 0 && supported <= 5) {
            dispatch({ type: 'SUPPORTED3', payload: supported });
            history.push('/comments4');
        } else {
            alert('Please enter a number 1 - 5');
        }
    };
    return (
        <div>
            <h2>How well are you being supported?</h2>
            <form onSubmit={handleSubmit}>
             
                <input
                    type="text"
                    value={supported}
                    onChange={event => setSupported(event.target.value)}
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    );
};




export default Supported3;