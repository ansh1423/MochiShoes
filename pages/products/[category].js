import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Block1 from '../../src/contents/products/Block1';
import Navabar from '../../src/layouts/Navabar/index';
import Block2 from '../../src/contents/products/Block2';
import Block3 from '../../src/contents/products/Block3';
import Footer from '../../src/layouts/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../../src/redux/slices/Product';
import { useRouter } from 'next/router';

function Index() {
  const router = useRouter();
  const [query, setQuery] = useState();
  const [filter, setFilter] = useState({ "category": query });
  const [sort, setSort] = useState(null); // State for sort value
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      console.log(sort,"sortvaluecheck")
      const result = await dispatch(listProduct({ ...filter, sort }));
      console.log(result.data);
      setLoading(false); // Set loading to false after data is fetched
    };
    getProduct();
  }, [filter, query, sort, dispatch]); // Include sort in dependency array

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleSortChange = (sortValue) => {
    console.log('Sort value:', sortValue);
    setSort(sortValue); // Update the sort state
  };

  return (
    <>
      <div>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src="/loader.gif" alt="Loading..." />
          </div>
        ) : (
          <>
            <Navabar setQuery={setQuery} />
            <Block1 />
            <Block2 onSortChange={handleSortChange} /> {/* Pass the sort change handler */}
            <Block3 filter={filter} setFilter={setFilter} />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default Index;
