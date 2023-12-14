import * as  Yup from 'yup';

export const UpdateAddressSchema=Yup.object().shape({
    FirstName:Yup.string().min(2).max(25).required("Please enter your name"),

    
    
})