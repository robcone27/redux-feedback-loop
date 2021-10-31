import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

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
            <Button onClick={handleCLick}>Leave New Feedback</Button>
        </div>
    );
};

export default Success6;