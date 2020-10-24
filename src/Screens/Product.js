import React from 'react';
import { connect } from 'react-redux';
import Card from '../Component/Card';
function Product({products}) {
  return (
  <div>
       {
        products.map((rec,index)=>{
         return(  
            <div style={{}}>
              <Card data={rec} key={index}/>
              </div>
              )
        })
    }
   
   
  </div>
    
   
    
  );
}
const mapStateToProps=(state)=>{
  return{
    products:state.shop.product
  }
}

export default connect(mapStateToProps)(Product)

