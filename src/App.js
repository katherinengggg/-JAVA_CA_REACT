import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from 'react';
import ListCourseApi from './ListCourseApi';
import SuggestTag from './SuggestTag';

function App() {

  const name = "visitor";

  return (
    <div>
      <div>
        <p>Greetings {name}!</p>
        <p>Here are some courses we have available at our distinguished institution.</p>
      </div>
      <h2>Available Courses:</h2>
      <ListCourseApi />    
      <SuggestTag />  
    </div>
  );
}

export default App;
