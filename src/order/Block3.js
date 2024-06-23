import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Orderlist } from '../redux/slices/Order';

function Block3() {
  const router = useRouter();
  const query = router.query
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.order?.order);

  useEffect(() => {
    const fetchOrder = async () => {
      const result = await dispatch(Orderlist());
      console.log(result);
    };
    fetchOrder();
  }, [dispatch]);

  return (
    <>
      {data && data.length > 0 && data.map((item, index) => (
        <div key={index} className='mb-4'>
          {item && item.products && item.products.length > 0 && item.products.map((product, productIndex) => (
            <div key={productIndex} className='overflow-x-auto'>
              <table className='w-full min-w-max'>
                <thead>
                  <tr className='text-[13px] font-[700] font-mulish'>
                    <th className='text-left'>Order #</th>
                    <th className='text-left'>Date and Time</th>
                    <th className='text-left'>Order Total</th>
                    <th className='text-left'>Order Items ID/SKU</th>
                    <th className='text-left'>Status</th>
                    <th className='text-left'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='font-mulish text-[14px]'>
                    <td className='flex items-center space-x-4'>
                      <img src={product?.productId?.image} className='w-14 h-12' alt="" />
                      <p>{product?.productId?.shortTitle}</p>
                    </td>
                    <td>{new Date(item.updatedAt).toLocaleString()}</td>
                    <td>Rs. {product?.productId?.price?.mrp}.00</td>
                    <td>{product?.productId?.id}</td>
                    <td>ORDER CONFIRMED</td>
                    <td>
                      <button onClick={() => router.push(`/orderdetails/${product?.productId?.id}`)} className='text-white text-[12px] px-2 py-1 bg-[#36C2DD]'>
                        View Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default Block3;
