import React from 'react';
import './scss/styles.scss';


export default function App(props) {
  return(
    <div className='App'>

      {props.children}

    </div>
  ) 
} 