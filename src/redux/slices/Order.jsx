import { createSlice } from "@reduxjs/toolkit";
import { orderApi } from "../../mocks/Order";


const initialState={
    order:{},
}
const slice =createSlice({
    name:"order",
    initialState,
    reducers:{
        createOrder(state,action){
            state.order=action.payload.data;
        },
        getOrder(state,action){
            state.order=action.payload.data;
        },
        updateOrder(state,action){
            let data=action.payload.data;
            state.order=[...state. order, ...data]
        },
        deleteOrder(state,action){
            state.order=action.payload.data
        },
        Orderlist(state,action){
            state.order=action.payload.data;
        }

    }
})
export const {reducer} = slice;


export const getOrder = ()=> async (dispatch)=>{
    const result = await orderApi.getOrder();
    if(result){
        console.log(result)
        //dispatch for send the data and selector for fetch the data
        await dispatch(slice.actions.getOrder(result));
        return true;
    }
    return false;
}
export const updateOrder = ()=> async (dispatch)=>{
    const result= await orderApi.updateOrder(); 
    if(result){
        await dispatch(slice.actions.updateOrder(result));
        return true;
    }
    return false;
}

export const deleteOrder= (id) =>async (dispatch)=>{
  const result = await orderApi.deleteOrder(id);
  console.log(result)
    if(result){
        await dispatch(slice.actions.deleteOrder(result.data));
        return true;
    }
    return false;
  }  

export const Orderlist= () =>async (dispatch)=>{
    const result = await orderApi.Orderlist();
    if(result){
        console.log(result);
      await dispatch(slice.actions.Orderlist(result.data));
    return true

    }else{

        return false;
    }
    }  

export const createOrder = (data) => async (dispatch)=>{
    const result =await orderApi.createOrder(data);
    // console.log(result)
    if(result){
        
        await dispatch(slice.actions.createOrder(result.data));
        return true;
    }
    return false;
}
export default slice;
