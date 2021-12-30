//Imports
import React from 'react';
import axios from 'axios';
import {HashRouter as Router, Route} from 'react-router-dom'
import './App.css';

import Feeling1 from '../Feeling1/Feeling1';
import Understanding2 from '../Understanding2/Understanding2';
import Supported3 from '../Supported3/Supported3';
import Comments4 from '../Comments4/Comments4';
import Review5 from '../Review5/Review5';
import Success6 from '../Success6/Success6';
//mui
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    <Router>
    
    <Route path="/" exact>
      <Feeling1 />
    </Route>

    <Route path="/understanding2" exact>
      <Understanding2 />
    </Route>

    <Route path="/supported3" exact>
      <Supported3 />
    </Route>
    
    <Route path="/comments4" exact>
      <Comments4 />
    </Route>

    <Route path="/review5" exact>
      <Review5 />
    </Route>

    <Route path="/success6" exact>
      <Success6 />
    </Route>

    
    </Router>
    </div>
  );
}

export default App;
