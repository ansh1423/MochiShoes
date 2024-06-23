import React from 'react';
import Block4 from './Block4';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Pagination, Stack } from '@mui/material';

function Block6() {
  const router = useRouter();
  const productpage = useSelector((state) => state?.product?.product);
  const product = productpage?.data || [];
  
  const itemsPerPage = 8; // Number of items to display per page
  const totalNoOfPage = Math.ceil(productpage?.paginator?.itemCount / itemsPerPage) || 1;
  
  const currentPage = parseInt(router.query.page) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  const handleChangePage = (event, value) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: value },
    });
  };

  return (
    <>
    <div className='max-sm: max-sm:items-center max-sm:justify-center'>
      <div className='flex flex-wrap gap-10 max-sm:gap-0'>
        {product.slice(startIndex, endIndex).map((item, index) => (
          <Block4 data={item} key={index} />
        ))}
      </div>
      <div className='flex items-center justify-center'>
        <Stack spacing={2} sx={{ justifyContent: 'center', marginTop: '20px' }}>
          <Pagination
            count={totalNoOfPage} // Total number of pages
            page={currentPage} // Current page number
            onChange={handleChangePage} // Function to handle page change
            shape="rounded"
          />
        </Stack>
      </div>
      </div>
    </>
  );
}

export default Block6;
