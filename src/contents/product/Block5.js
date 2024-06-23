import React from 'react';
import { useSelector } from 'react-redux';

function Block5() {
  const products = useSelector((state) => state.product.product.data);
 console.log(products, 'productsimage')
  return (
    <>
      <div>
        <p className="flex justify-center py-4 text-3xl z-100">Shop More Formal Shoes</p>
        <div className="flex justify-evenly max-sm:hidden z-100">
          <span className="border-2 border-[#14B8A6] font-[900] text-[#14B8A6] py-2 my-4 px-12 rounded-3xl">
            Men Lace Up
          </span>
          <span className="border-2 border-[#14B8A6] font-[900] text-[#14B8A6] py-2 my-4 px-12 rounded-3xl">
            Men Formal Shoes
          </span>
          <span className="border-2 border-[#14B8A6] font-[900] text-[#14B8A6] py-2 my-4 px-12 rounded-3xl">
            Mochi Formal Shoes
          </span>
        </div>
      </div>
      <div>
        <p className="flex justify-center font-[600] py-8 my-4 text-xl">SIMILAR PRODUCT</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {products &&
            products.map((product, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  <img
                    src={product?.image}
                    // alt={product.title.shortTitle}
                    className="w-full auto object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">{product?.title?.shortTitle}</h3>
                <p className="text-center text-gray-700">Rs.{product?.price?.mrp}.00</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Block5;
