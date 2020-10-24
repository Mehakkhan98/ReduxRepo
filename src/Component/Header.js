import React from 'react';
import MyButton from '../Component/CartButton';

function Header() {
  const displaycart=()=>{
   alert("i am invoked")
  }
  return (
  
    <div  style={headerdiv1}>
      <div style={row}>
      <p style={heading}>Redux Shopping Cart</p>
                 <div style={{position:'absolute',right:10,top:25}}>
                 <MyButton data="My Cart" CustomMethod={()=>displaycart}/>
                 </div>
      </div>
   
    </div>
   
    
  );
}

export default Header;
const heading={
fontSize:24,
color:'white',
fontWeight:'bold',
position:'absolute',
top:30,
left:50
}
const headerdiv1={
    background:'purple',
    top:0,
    // width:'98%',
    height:140,
    marginBottom:3,
    boxShadow: "1px 3px 1px #c9c9c9"
  }
  const row={
    display:'flex',
    flexDirection:'row'
  }