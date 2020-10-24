import {ADD_TO_CART,REMOVE_FROM_CART,ADJUST_QTY,LOAD_CURRENT_ITEM}  from './Shopping_type';

export const addToCart=(itemid)=>{
    console.log("my id",itemid)
    return{
        type:ADD_TO_CART,
        payload:{
            id:itemid
        }
    }
}
export const removeItem=(itemid)=>{
    return{
        type:REMOVE_FROM_CART,
        payload:{
            id:itemid
        }
    }
}
export const quantity=(itemid,value)=>{
return{
    type:ADJUST_QTY,
    payload:{
        id:itemid,
        qty:value
    }
}
}
export const loadCurrentItem=(item)=>{
    return{
    type:LOAD_CURRENT_ITEM,
    payload:{
     id:item
    }
    }
}