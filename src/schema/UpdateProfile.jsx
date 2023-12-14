import * as  Yup from 'yup';

export const LoginSchema =Yup.object().shape({
    username: Yup.string().email('Invalid email').required('Please enter Your email'),
    password: Yup.string().min(6).required("Please enter your password"),
    
    
})