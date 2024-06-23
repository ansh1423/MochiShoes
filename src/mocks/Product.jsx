import axios from "axios";
import { listProduct, updateProduct } from "../redux/slices/Product";

class ProductApi{

    async getProduct(){
      // ${process.env.NEXT_PUBLIC_HOST}
      console.log("data from product");
       const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/userapp/product/get/64e353cea474fca8fa0107eb`,{
      
        method: "get",
       
      });
      console.log("data from product",response)
       if(response.data.status==='SUCCESS'){
       console.log(response)
       return response.data;
       }
       else
        return false;
    } 
    
async updateProduct(data){
    // ${process.env.NEXT_PUBLIC_HOST}
    console.log("data from product");
     const response = await axios.put(`${process.env.NEXT_PUBLIC_HOST}/userapp/product/update/63ffd0d9a024069685150c14`,data,{
    
      method: "put",
     
    });
    console.log("data from product",response)
     if(response.data.status==='SUCCESS'){
     console.log(response.data)
     return response.data;
     }
     else
      return false;
  } 
  
  async  listProduct(params) {
    const { filter, sort } = params; // Destructure filter and sort from params
    console.log(sort, "sortvaluelist");
    console.log(filter, "listing products");
  
    let query = {};
    if (filter) {
      query = {
        $or: [
          { category: { $regex: filter, $options: 'i' } },
          { 'title.shortTitle': { $regex: filter, $options: 'i' } },
          { 'title.longTitle': { $regex: filter, $options: 'i' } }
        ]
      };
    }
  
    const data = {
      query: query,
      options: {
        collation: "",
        sort: {
          "price": sort
        }, // Use the sort parameter dynamically
        populate: "",
        projection: "",
        lean: false,
        leanWithId: true,
        page: 1,
        limit: 20,
        pagination: true,
        useEstimatedCount: false,
        useCustomCountFn: false,
        forceCountFn: false,
        read: {},
        options: {}
      },
      isCountOnly: false
    };
  
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/userapp/product/list`, data, {
        method: "post",
      });
  
      if (response.data.status === 'SUCCESS') {
        console.log(response.data, "responsedata");
        return response.data;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      return false;
    }
  }
 

  

  

}    
     
    export const productApi = new ProductApi();