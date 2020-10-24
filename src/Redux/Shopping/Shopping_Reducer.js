import {ADD_TO_CART,ADJUST_QTY,REMOVE_FROM_CART,LOAD_CURRENT_ITEM}  from './Shopping_type'
const initial_state={
    product:[
       
            
          {
              "itemId": "1",
              "itemname":"Maria.B",
              "itemimage1":"https://www.mariab.pk/media/catalog/product/cache/1/thumbnail/800x1200/040ec09b1e35df139433887a97daa66f/d/w/dw-w20-12-black.jpg",
              "itemimage2":"https://www.mariab.pk/media/catalog/product/cache/1/thumbnail/450x675/9df78eab33525d08d6e5fb8d27136e95/d/w/xdw-w20-12-blackb.jpg.pagespeed.ic.7U6tbOyoBU.webp",
              "price":"PKR 14,990",
              "size":"Size:  XS S M L XL",
              "description":'Suit Black DW-W20-12',
              "qty":1
              
              },
              {
               "itemId": "2",
               "itemname":"Maria.B",
               "itemimage1":"https://www.mariab.pk/media/catalog/product/cache/1/thumbnail/800x1200/040ec09b1e35df139433887a97daa66f/s/f/sf-ea20-11-coffee.jpg",
               "itemimage2":"https://www.mariab.pk/media/catalog/product/cache/1/thumbnail/450x675/9df78eab33525d08d6e5fb8d27136e95/s/f/xsf-ea20-11-coffeeb.jpg.pagespeed.ic.otL007F1me.jpg",
               "price":"PKR 14,990",
               "size":"Size:  XS S M L XL",
               "description":'Suit Black DW-W20-12',
               "qty":1
               
               },
               {
                  "itemId": "3",
                  "itemname":"Maria.B",
                  "itemimage1":"https://www.mariab.pk/media/catalog/product/cache/1/thumbnail/800x1200/040ec09b1e35df139433887a97daa66f/s/f/sf-ea20-14-green.jpg",
                  "itemimage2":"https://www.mariab.pk/media/catalog/product/cache/1/thumbnail/450x675/9df78eab33525d08d6e5fb8d27136e95/s/f/xsf-ea20-14-greenb.jpg.pagespeed.ic.4joBlnOxNl.webp",
                  "price":"PKR 14,990",
                  "size":"Size:  XS S M L XL",
                  "description":'Suit Black DW-W20-12',
                  "qty":1
                  
                  },
                  {
                     "itemId": "4",
                     "itemname":"Maria.B",
                     "itemimage1":"https://www.mariab.pk/media/catalog/product/cache/1/thumbnail/800x1200/040ec09b1e35df139433887a97daa66f/s/f/sf-ea20-11-teal-blue.jpg",
                     "itemimage2":"https://www.mariab.pk/media/catalog/product/cache/1/thumbnail/450x675/9df78eab33525d08d6e5fb8d27136e95/s/f/xsf-ea20-11-teal-blueb.jpg.pagespeed.ic.Ut_sPe2AVq.jpg",
                     "price":"PKR 14,990",
                     "size":"Size:  XS S M L XL",
                     "description":'Suit Black DW-W20-12',
                     "qty":1
                     
                     },
                    
                        
                        
      
      
        ],
    cart:[],
    currentitem:null
}
export default (state=initial_state,action)=>{
    console.log("My Action is :",action)
  switch(action.type)
  {
    
          case ADD_TO_CART:
          ///get item from product array
          const item=state.product.find(prod=>prod.itemId===action.payload.id)
          ///chaeck idf item is allready incart
          const incart=state.cart.find(item=>item.itemId===action.payload.id ?true:false)
         
          return{
              ...state,
              cart:incart?
              state.cart.map(item=>item.itemId===action.payload.id
                ?{...item,qty:item.qty+1}:
                item):[state.cart,{...item,qty:1}]};
              
      case REMOVE_FROM_CART:
          
            return{
                ...state,cart:state.cart.filter(item=>item.itemId===action.payload.id)
            }
         
          case ADJUST_QTY:
              return{
                ...state,cart:state.cart.map(item=>item.itemId===action.payload.id?
                    {...item,qty:action.payload.qty}
                    :item)
              };
              case LOAD_CURRENT_ITEM:
                  return{
                  ...state,
                  currentitem:action.payload
                  }
                  default:
                      return state
  }
}