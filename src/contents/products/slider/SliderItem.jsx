import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
// import { useNavigate } from 'react-router-dom';

const SliderContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  borderRadius: "5px",
  flexDirection: "column",
  alignItems: "center",
  background: "white",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Fixed box-shadow property
  backgroundColor: "#eeefef",
  padding: theme.spacing(2),
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
  "@media (max-width: 900px)": {
    height: "400px",
  },
  "@media (max-width: 600px)": {
    height: "170px",
  },
}));

const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  borderRadius: "5px",
  backgroundColor: "#e01f1f",
  height: "100%",
  position: "relative",
  background: "#F2F2F2",
  margin: theme.spacing(2, 0),
  "@media (max-width: 900px)": {
    height: "600px",
  },
  "@media (max-width: 600px)": {
    height: "800px",
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "100%",
  backgroundColor: "#e01f1f",
  objectFit: "cover",
  borderRadius: "4px",
  "@media (max-width: 900px)": {
    height: "400px",
  },
  "@media (max-width: 600px)": {
    width: "100%",
    height: "60%",
    objectFit: "cover" ,
  },
});

const FavoriteIcon = styled(FavoriteBorderSharpIcon)(({ theme, color, size }) => ({
  color: color === 'red' ? 'white' : color || theme.palette.text.primary,
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: color === 'red' ? 'red' : "white",
  borderRadius: "50%",
  padding: theme.spacing(1.5),
  fontSize: size || "2rem", // Adjust the size dynamically
  cursor: "pointer",     
  transition: "background-color 0.3s, color 0.3s, font-size 0.3s",
}));

const SliderItem = ({ posterLinks }) => {
  const [color, setColor] = useState();
  const [size, setSize] = useState("2rem");
  // const navigate = useNavigate();

  const handleClick = () => {
    setColor(color === 'red' ? '' : 'red');
    setSize("3rem"); // Increase size on click
    
  };

  return (
    <SliderContainer>
      <ImageContainer>
        <FavoriteIcon
          onClick={handleClick}
          color={color}
          size={size}
        />
        <Box sx={{ width: "100%", height: "100%" }}>
          <Image src={posterLinks?.path} alt="divineyogpeeth yoga" />
        </Box>
      </ImageContainer>
      {/* Additional content such as price and name can be added here */}
    </SliderContainer>
  );
};

export default SliderItem;
