import React from 'react';

function Button(props) {
  return (
  
   <div>
        <button  style={Buttonstyle}
        onClick={props.CustomMethod()}>
        {props.data}
        
    </button>
   </div>
   
   
   
    
  );
}

export default Button;

const Buttonstyle={
    height:50,
    width:130,
    background:"pink",
    borderRadius:10,
    margin:'10px 10px 10px 10px',
    
   
   
}
