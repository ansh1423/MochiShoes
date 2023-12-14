import { authApi } from "../../mocks/Auth";
import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    user:{},
}
const slice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        getUser(state,action){
         state.user = action.payload.data;
        
        },
        updateUser(state,action){
            let data = action.payload.data;
        state.user = {...state.user, ...data}
        },
        deleteUser(state,action){ 
         state.user = {}
        },
        logoutUser(state,action){
            state.user = {}
        },
   
    }

});

export const {reducer} = slice;




export const getUser = () => async (dispatch) =>{

    const result = await authApi.getUser();

    if(result){
        //dispatch for send the data and selector for fetch the data
        await dispatch(slice.actions.getUser(result));
        return true;
    }
    return false;
}

export const updateUser = (data,id)=> async (dispatch) =>{
    const result = await authApi.updateUser(data,id);
    if(result){
        await dispatch(slice.actions.updateUser(result))
        return true
    }
    return false
    
}

export const deleteUser = (id)=> async (dispatch) =>{
 
        await dispatch(slice.actions.deleteUser( ));
 
    
}
export const logoutUser = ()=> async (dispatch) =>{
    
    await dispatch(slice.actions.logoutUser())
    
}

export const register = (data) => async (dispatch) =>{
    // console.log("hello")
    const result = await authApi.register(data);
    // console.log("result");
    if(result)
        return true
    return false  
}
export const login = (data,users) => async (dispatch) =>{
    const result = await authApi.login(data);
    if(result){
    // console.log(result)
        localStorage.setItem("accessToken", result.data.token)
        return result.data;
    }else{
        return false;
    }
}

export const ForgetPass = (data) => async (dispatch) =>{
    const result = await authApi.ForgetPass(data);
    if(result){
    // console.log(result)

        return result;
    }else{
        return false;
    }
}

export const ResetPass = (data) => async (dispatch) =>{
    const result = await authApi.ResetPass(data);
    if(result){
    // console.log(result)

        return result.data;
    }else{
        return false;
    }
}
export default slice;