
import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from '../Component/Header'
import Product from '../Screens/Product'
import Detail from '../Screens/ViewDetail'
 export default class Routes extends React.Component{
    
     render()
    
     {
      
         
         return(
            
             <div>
      
            <Router>
            <Header/>
            <Route exact path="/" component={Product} />
            <Route path="/Detail" component={Detail} />
           
        
           
           
           
           
        </Router>
     
        
        </div>
      
         )
     }
 
 }
