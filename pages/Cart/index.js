import React, { useEffect } from 'react';
import Block1 from '../../src/contents/Cart/Block1';
import Navabar from '../../src/layouts/Navabar/index';
import { useDispatch } from 'react-redux';
import { Cartlist } from '../../src/redux/slices/Cart';
import { getUser } from '../../src/redux/slices/Auth';

function Index() {
  const dispatch = useDispatch();

  const fetchdata = async () => {
    const result = await dispatch(Cartlist());
    console.log(result);
  };

  useEffect(() => {
    const fetchDataAndUser = async () => {
      await dispatch(getUser());
      await fetchdata();
    };

    fetchDataAndUser();
  }, [dispatch, fetchdata]);

  return (
    <>
      <Navabar />
      <Block1 />
      {/* <Footer/> */}
    </>
  );
}

export default Index;
