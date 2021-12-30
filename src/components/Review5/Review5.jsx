import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Button from '@mui/material/Button';



function Review5() {
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);



    const history = useHistory();

    const handleClick = () => {

        axios({
            method: 'POST',
            url: '/save',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comments
            }
        })
            .then(response => {
                console.log('handleClick response', response);
            })
            .catch(error => {
                console.log('handleClick error', error);
            });

        history.push('/success6');

    }
    console.log({ support })
    return (
        <div>
            <h2>Review your feed back</h2>
            <h3>Feeling: {feeling} </h3>
            <h3>Understanding: {understanding} </h3>
            <h3>Support: {support} </h3>
            <h3>Comments: {comments} </h3>


            <Button onClick={handleClick}
                sx={{ height: '22px' }}
                variant="contained"
                size="small"
                type="submit">Next</Button>

        </div>
    );
};

export default Review5;