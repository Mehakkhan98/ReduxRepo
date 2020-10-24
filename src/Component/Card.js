import React from 'react';
import Image from './Image'
import {connect} from 'react-redux';
import {addToCart} from '../Redux/Shopping/Shopping_Action'
 const Card=(props)=> {
    
    const image= props.data.itemimage1;
    const description=props.data.description
    const size=props.data.size
    const price=props.data.price
    const name=props.data.itemname
    const id=props.data.itemId
   
  return (
  
    <div style={card}>
          <div>
            <Image 
            data={image}/>
            </div>
            <div style={{marginTop:20,marginLeft:20}}>
            <p style={descriptionstyle}>{description}</p>
            <p style={sizestyle}>{size}</p>
            <p style={sizestyle}>{price}</p>
            <p style={sizestyle}>{name}</p>
            </div>
  
             <div style={{marginTop:25,marginLeft:30}}>
                 <div>

                 <button
                  style={Buttonstyle} 
                  onClick={()=>addToCart(id)}>
                    view card</button>
               
                 </div>
            
             <div>
             <button
                  style={Buttonstyle} 
                  onClick={() => addToCart(id)}>
                    add to cart</button>
               
           
             </div>
            
             </div>
  
       
   
    </div>
   
    
  );
}
const mapDispatchToProps = dispatch => {
  return {
    addtocart: Id => dispatch(addToCart(Id))
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Card)

const card={
     background:'#FFFFFF',
    // background:'pink',
    
    borderRadius:10,
    width:600,
    height:200,
    display:'flex',
    flexDirection:'row',
    boxShadow: "1px 3px 1px #c9c9c9",
    alignSelf:"center",
    marginTop:30,
    marginBottom:30,
    marginLeft:50
  }
  const descriptionstyle={
      fonSize:14,
      fontWeight:'bold'
  }
  const sizestyle={
      fontSize:10
  }
  const Buttonstyle={
    height:50,
    width:130,
    background:"pink",
    borderRadius:10,
    margin:'10px 10px 10px 10px',
    
   
   
}