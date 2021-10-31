import { useHistory } from 'react-router-dom';

function Success6() {
    const history = useHistory();
    //reset values 
    const handleCLick = () => {
        //return to home screen
        history.push('/');
    };

    return (
        <div>
            <h2>Thank You!</h2>
            <button onClick={handleCLick}>Leave New Feedback</button>
        </div>
    );
};

export default Success6;