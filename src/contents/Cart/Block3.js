import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../redux/slices/Cart";
import { Button } from "@mui/material";
import { Router, useRouter } from "next/router";

function Block3() {
  const data = useSelector((state) => state.cart.cart);
  console.log(data);
  const router=useRouter();
  const handleShopping = () => {
    // Navigates to the "/checkout" route
    router.push('/products');
  };
 
  const dispatch = useDispatch();
  const handleDelete = async(id) => {
    console.log(id)
    try {
      const res = await dispatch(deleteCart(id));
      console.log(res)
    if(res){
        
    }
    // else{
    //   return false;
    // }
    } catch (error) {
      console.log(error);
    }
    
  };
  return (
    <>
      <div>
        {data &&
          data.length > 0 &&
          data.map((item,index) => (
            <div key={index} className="flex justify-between ">
              <div className="mx-4 my-4  flex">
                <div className="flex py-4 mx-3 ">
                  <div className="text-sm">Items(1) </div>
                  
                  <div>
                   
                    <img
                      src={
                        item &&
                        item.products.length > 0 &&
                        item.products[0].productId &&
                        item.products[0].productId.image
                      }
                      alt="hhd"
                      className="w-48 h-48 mr-5"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      {" "}
                      {item &&
                        item.products.length > 0 &&
                        item.products[0].productId &&item.products[0].productId.title&&
                        item.products[0].productId.title.shortTitle}
                    </p>
                    <p className="text-base my font-bold ">
                      Rs.
                      {item &&
                        item.products.length > 0 &&
                        item.products[0].productId &&item.products[0].productId.title&&
                        item.products[0].productId.price.mrp}
                      .00
                    </p>
                    <p className="text-sm text-blue-400">
                      (Inclusive of all taxes)
                    </p>
                    <div className="text-sm m-2">
                    <label for="size">Size: </label>
                    <select id="size" name="size">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                    </div>
                    <Button variant="outlined" onClick={()=>handleDelete(item.id)} >
                     Remove Cart
                    </Button>
                    
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-light py-2">Quantity</p>
                <p className="text-sm font-light py-2">1</p>
              </div>
              <div>
                <p className=" text-sm font-light mx-10 py-2">Subtotal</p>
                <p className="text-sm mx-10 font-[500] py-2">
                 
                      Rs.
                      {item &&
                        item.products.length > 0 &&
                        item.products[0].productId &&item.products[0].productId.title&&
                        item.products[0].productId.price.mrp}
                      .00
                  
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-between mx-4">
        <h1 onClick={()=>{router.push('/home')}} className="py-3 mx-8 cursor-pointer px-4 border-2 rounded-md text-xs font-base">
          ADD MORE FROM WISHLIST
        </h1>
        <h1 onClick={handleShopping} className="py-3  cursor-pointer px-4 border-2 rounded-md text-xs font-base ">
          CONTINUE SHOPPING
        </h1>
      </div>
      <button  onClick={() => onRemove(product.id)}  className="p-[5px] border-x-green-600 text-white rounded-md">
        Remove from cart
      </button>
    </>
  );
}

export default Block3;
