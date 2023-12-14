import axios from "axios";

class OrderApi{

    async getOrder(id){
      // ${process.env.NEXT_PUBLIC_HOST}
      console.log("data from cart");
       const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/userapp/order/get/${id}`,{
      
        method: "get",
        headers: { 
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
          }
       
      });
      console.log("data from cart",response)
       if(response.data.status==='SUCCESS'){
       console.log(response)
       return response.data;
       }
       else
        return false;
    }

    async Orderlist(){

      const data={
        
            "query":{},
            "options": {
              "collation": "",
              "sort": {"name":1},
              "populate": "products.productId",
              "projection": "",
              "lean": false,
              "leanWithId": true,
              "page": 1,
              "limit": 10,
              "pagination": true,
              "useEstimatedCount": false,
              "useCustomCountFn": false,
              "forceCountFn": false,
              "read": {},
              "options": {}
            },
            "isCountOnly": false
          }
        // ${process.env.NEXT_PUBLIC_HOST}
        console.log("data from cart");
         const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/userapp/order/list`,data,{
        
          method: "post",
          headers: { 
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
         
        });
        console.log("data from cart",response)
         if(response.data.status==='SUCCESS'){
         console.log(response.data)
         return response.data;
         }
         else
          return false;
      } 
    
async updateOrder(data,id){
    // ${process.env.NEXT_PUBLIC_HOST}
    console.log("data from cart");
     const response = await axios.put(`${process.env.NEXT_PUBLIC_HOST}/userapp//order/update/${id}`,data,{
    
      method: "put",
      headers: { 
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
          }
     
    });
    console.log("data from cart",response)
     if(response.data.status==='SUCCESS'){
     console.log(response)
     return response.data;
     }
     else
      return false;
  }

  async createOrder(data){
    console.log("data from cart");
    const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/userapp/order/create`,data,{
   
     method: "post",
     headers: { 
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
    
   });
   console.log("data from cart",response)
    if(response.data.status==='SUCCESS'){
    console.log(response)
    return response.data;
    }
    else
     return false;

  }
 
  async deleteOrder(id){
    console.log("data from cart");
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_HOST}/userapp/order/delete/${id}`,{
     headers: { 
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
    
   });
   console.log("data from cart",response)
    if(response.data.status==='SUCCESS'){
    console.log(response)
    return response.data;
    }
    else
     return false;

  }
    }     
     
    export const orderApi = new OrderApi();