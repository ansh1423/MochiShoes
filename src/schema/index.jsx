import * as  Yup from 'yup';

export const SignUpSchema =Yup.object().shape({
    firstName:Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email('Invalid email').required('Please enter your email'),
    password: Yup.string().min(6).required("Please enter your password"),
    phone:Yup.string().min(2).max(25).required("Please enter your number"),
    // confirmpassword:Yup.string().required().oneOf([Yup.ref('password'),null],'Password must match'),
   

    
})