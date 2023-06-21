import logo from './logo.svg';
import './App.css';

//ref:
  //https://www.youtube.com/watch?v=I1IH96LzDNc&t=49s
  //https://www.youtube.com/watch?v=BeiRU10gzfI&t=2382s   //use this

import React, {useEffect, useState} from 'react';
import ListCourseApi from './ListCourseApi';
import SuggestTag from './SuggestTag';

function App() {

  const name = "visitor";

  return (
    <section className='p-5 bg-light'>
      <section className='bg-secondary p-3'>
        <div className='container'>
          <h2 className='text-info text-center'><b>Greetings {name}!</b></h2>
          <p className='text-white mt-3 text-justify'><b>We are dedicated to providing a transformative educational experience that fosters intellectual growth, advances knowledge, and inspires innovation. Through rigorous academic programs and interdisciplinary approaches, we equip students with the skills and competencies needed for success in a changing global society. 
            <br /><br />Here are some courses we have available at our distinguished institution.</b></p>
        </div>
      </section>

      <section className='bg-white p-5'>
        <div className='container text-center'>
          <h2 className='align-text-center text-secondary'>Available Courses</h2>
          <div>
            <SuggestTag />
          </div>
          <div>
            <ListCourseApi />
          </div>
        </div>
      </section>
      
    </section>

    // <div>
    //   <div>
    //     <p>Greetings {name}!</p>
    //     <p>Here are some courses we have available at our distinguished institution.</p>
    //   </div>
    //   <h2>Available Courses:</h2>
    //   <ListCourseApi />    
    //   <SuggestTag />  
    // </div>
  );
}

export default App;
// hello again