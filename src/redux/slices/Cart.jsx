import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../../mocks/Cart";

const initialState={
    cart:[],
}
const slice =createSlice({
    name:"cart",
    initialState,
    reducers:{
        createCart(state,action){
            state.cart=action.payload.data;
        },
        getCart(state,action){
            state.cart=action.payload.data;
        },
        updateCart(state,action){
            let data=action.payload.data;
            state.cart=[...state.cart, ...data]
        },
        deleteCart(state,action){
            let id = action.payload
            state.cart= state.cart.filter((item)=> item.id!==id)

        },
        Cartlist(state,action){
            state.cart=action.payload.data;
        }

    }
})
export const {reducer} = slice;

export const getCart = ()=> async (dispatch)=>{
    const result = await cartApi.getCart();
    if(result){
        console.log(result)
        //dispatch for send the data and selector for fetch the data
        await dispatch(slice.actions.getCart(result));
        return true;
    }
    return false;
}
export const updateCart = ()=> async (dispatch)=>{
    const result= await cartApi.updateCart(); 
    if(result){
        await dispatch(slice.actions.updateCart(result));
        return true;
    }
    return false;
}

export const deleteCart= (id) =>async (dispatch)=>{
  const result = await cartApi.deleteCart(id);
  console.log(result)
    if(result){
        await dispatch(slice.actions.deleteCart(id));
        return true;
    }
    return false;
  }  

export const Cartlist= () =>async (dispatch)=>{
    const result = await cartApi.Cartlist();
    if(result){
      await dispatch(slice.actions.Cartlist(result.data));
    return true
    }else{

        return false;
    }
    }  

export const createCart = (data) => async (dispatch)=>{
    const result =await cartApi.createCart(data);
    // console.log(result)
    if(result){
        
        await dispatch(slice.actions.createCart(result.data));
        return true;
    }
    return false;
}
export default slice;