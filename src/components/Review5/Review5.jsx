import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Review5(){
const feeling = useSelector(store => store.feeling);



const history = useHistory();

const handleClick = () =>{
    axios({
     method: 'POST',
     url: '/save',
     data:{
     feeling: feeling,
    //  understanding: understanding,
    //  support: support,
    //  comments: comments,
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
  return(
      <div>
          <h2>Review your feed back</h2>
          <h3>Feeling: {feeling} </h3>
          <button onCLick={handleClick}>Submit</button>
      </div>
  );
};

export default Review5; 