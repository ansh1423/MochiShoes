import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "../../mocks/Product";

const initialState = {
    product:{},
}
const slice =createSlice({
    name:"product",
    initialState,
    reducers:{
        getProduct(state,action){
            state.product=action.payload.data;
        },
        updateProduct(state,action){
            let data=action.payload.data;
            state.product=[...state.product, ...data]
        },
        deleteProduct(state,action){
            state.product=[]
        },
        listProduct(state,action){
            state.product=action.payload.data;
        }

    }
})
export const {reducer} = slice;




export const getProduct = ()=> async (dispatch)=>{
    const result = await productApi.getProduct();
    if(result){
        console.log(result)
        //dispatch for send the data and selector for fetch the data
        await dispatch(slice.actions.getProduct(result));
        return true;
    }
    return false;
}
export const updateProduct = ()=> async (dispatch)=>{
    const result= await productApi.updateProduct(); 
    if(result){
        await dispatch(slice.actions.updateProduct(result));
        return true;
    }
    return false;
}

export const deleteProduct= () =>async (dispatch)=>{
  const result = await productApi.deleteProduct();
  if(result){
    await dispatch(slice.actions.deleteProduct());
    if(result){
        await dispatch(slice.actions.deleteProduct(result));
        return true;
    }
    return false;
  }  
}

export const listProduct = (query) => async (dispatch)=>{
    const result =await productApi.listProduct(query);
    console.log(result)
    if(result){
        await dispatch(slice.actions.listProduct(result));
        return true;
    }
    return false;
}
export default slice;