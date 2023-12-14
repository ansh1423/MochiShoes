import * as  Yup from 'yup';

export const AddressSchema =Yup.object().shape({
    locality: Yup.string().min(5).required('Please enter Your locality'),
    city: Yup.string().min(6).required("Please enter your city"),
    state: Yup.string().min(6).required("Enter the state"),
    country:Yup.string().min(6).required("Enter the country"),
    zipcode:Yup.number().min(3).required("Enter the zip code")
    
    
})