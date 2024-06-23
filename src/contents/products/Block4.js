import React, { useRef, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { HomeSlider } from '../../constants/home/HomeSlider';
import SliderItem from './slider/SliderItem';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

import { Box, styled, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const SliderContainer = styled('div')({
  width: "22%",
  height: "22%",
  overflow: "hidden",
  backgroundColor: 'white',
  position: 'relative',
  borderRadius: '8px',
  boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  transition: "all 0.3s ease-in-out",
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: "0 4px 15px rgba(104, 104, 104, 1)",
  },
  '@keyframes tiltRight': {
    '0%, 100%': { transform: 'rotate(0deg)' },
    '50%': { transform: 'rotate(3deg)' },
  },
  '@keyframes tiltLeft': {
    '0%, 100%': { transform: 'rotate(0deg)' },
    '50%': { transform: 'rotate(-3deg)' },
  },
  '@media (max-width: 900px)': {
    marginTop: '20px',
    width: "100%",
    height: "400px",
  },
  '@media (max-width: 600px)': {
    // marginTop: '80px',
    width: "50%",
    height: "auto",
  },
});

const SliderInnerContainer = styled('div')({
  width: '100%',
  height: 'auto',
  backgroundColor: '#EBEBEB',
  borderRadius: '8px 8px 0 0',
  overflow: "hidden",
  "@media (max-width: 900px)": {
    height: 'auto',
  },
  "@media (max-width: 600px)": {
    height: 'auto',
  },
});

const ProductInfo = styled(Box)({
  backgroundColor: '#eeefef',
  borderBottom: '1px solid #ddd',
  padding: '16px',
  borderRadius: '0 0 8px 8px',
  textAlign: 'left',
  transition: "all 0.3s ease-in-out",
  '&:hover': {
    backgroundColor: '#ddd',
  },
});

const ProductTitle = styled(Typography)({
  fontSize: '16px',
  fontWeight: 700,
  marginBottom: '4px',
  color: '#333',
});

const ProductSubtitle = styled(Typography)({
  fontSize: '14px',
  fontWeight: 500,
  marginBottom: '4px',
  color: '#666',
});

const ProductPrice = styled(Typography)({
  fontSize: '18px',
  fontWeight: 900,
  color: '#000',
});

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBack sx={{ color: 'black', zIndex: '100', background: 'white', borderRadius: '50px', fontSize: '40px', marginLeft: '50px' }} />
    </div>
  );
}

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForward sx={{ color: 'black', fontSize: '40px', background: 'white', borderRadius: '50px', marginLeft: '-30px' }} />
    </div>
  );
}


const Block4 = ({ data }) => {
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const scrollObserver = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const datae = useSelector((state) => state?.product);
  console.log(datae);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 200,
          arrows: false,
          autoplay: true,
        },
      },
    ]
  };

  console.log(data);

  return (
    <>
   
      <SliderContainer sx={{ borderBottom: 2 }}>
        <SliderInnerContainer onClick={() => router.push(`/product/${data.id}`)}>
          <Slider {...settings} ref={scrollObserver}>
            {data && data.productImages.length > 0 && data.productImages.map((item) => (
              <SliderItem key={item} posterLinks={item} />
              
            ))}
          </Slider>
        </SliderInnerContainer>

        <ProductInfo>
          <ProductTitle>Mochi</ProductTitle>
          <ProductSubtitle>{data?.title?.shortTitle}</ProductSubtitle>
          <ProductPrice>Rs. {data?.price?.mrp}.00</ProductPrice>
        </ProductInfo>
      </SliderContainer>

    </>
  )
}

export default Block4;
