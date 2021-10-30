import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Comments4() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [comments, setComments] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
      
            dispatch({ type: 'COMMENTS4', payload: comments });
            history.push('/review5');
    
        }
    
    return (
        <div>
            <h2>Any Comments you want to leave?</h2>
            <form onSubmit={handleSubmit}>
             
                <input
                    type="text"
                    value={comments}
                    onChange={event => setComments(event.target.value)}
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    );
};




export default Comments4;