import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  border: '2px solid black', // Border around images
  borderRadius: '8px', // Rounded corners
  overflow: 'hidden', // Ensure images stay within border
}));

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

function Block3() {
  const router = useRouter();
  const path = router.query.ProductId;

  const data = useSelector((state) => state?.product?.product?.data);

  const dataItem = data && data.length > 0 && data.find((item) => item.id === path);

  const [likedImages, setLikedImages] = useState([]);

  const handleClick = (index) => {
    setLikedImages((prevLikedImages) =>
      prevLikedImages.includes(index)
        ? prevLikedImages.filter((i) => i !== index)
        : [...prevLikedImages, index]
    );
  };

  return (
    <div className="relative my-4 bg-white shadow-lg rounded-lg">
      <div className="grid max-sm:mx-4 grid-cols-2 gap-4">
        {dataItem &&
          dataItem.productImages &&
          dataItem.productImages.map((item, index) => (
            <ImageWrapper key={index} className="w-full h-64">
              <Image src={item.path} alt={`Image ${index + 1}`} />
              {likedImages.includes(index) ? (
                <FavoriteSharpIcon
                  onClick={() => handleClick(index)}
                  sx={{ position: 'absolute', top: '10px', right: '10px', zIndex: '1', color: 'red', cursor: 'pointer' }}
                />
              ) : (
                <FavoriteBorderSharpIcon
                  onClick={() => handleClick(index)}
                  sx={{ position: 'absolute', top: '10px', right: '10px', zIndex: '1', color: 'black', cursor: 'pointer' }}
                />
              )}
            </ImageWrapper>
          ))}
      </div>
    </div>
  );
}

export default Block3;
