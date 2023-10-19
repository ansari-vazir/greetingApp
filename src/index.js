import React from 'react' ;
import ReactDOM from 'react-dom';
import './index.css';

let currTime = new Date();
currTime = currTime.getHours();

let greeting='';
const greetCol ={ };

if(currTime>=1 && currTime<12){
  greeting='Good Morning';
  greetCol.color='green';
}else if(currTime>=12 && currTime<18){
  greeting='Good Afternoon';
  greetCol.color='orange';
}else{
  greeting='Good Evening';
  greetCol.color='blue';
}


ReactDOM.render(
  <>
  <div>
    <h1> Hello Visitor , <span style={greetCol}>{greeting}</span></h1>
  </div>
  </>

  ,document.getElementById('root')
);
