import React from 'react';


function Image(props) {
  return (
  
   
    <img 
    style={Imagestyle}
    src={props.data}
     alt="Logo" />
   
   
    
  );
}

export default Image;

const Imagestyle={
    height:175,
    width:175,
    margin:"25px 10px 10px 10px"
}