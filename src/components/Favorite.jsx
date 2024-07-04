/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import {
  BoxItems,
  CardArea,
  ImageDiv,
  Typographys,
} from "../styledComponents/Dashboard";
import PrimaryHeader from "./PrimaryHeader";
import { addItems } from "../redux/actions/action";
import { ToastContainer, toast } from "react-toastify";

const Favorite = ({ theme }) => {
  const favoriteItem = useSelector((state) => state?.favoriteItem);
  const addFavToCart = useSelector((state) => state?.data);
  const dispatch = useDispatch();

  const handleFavToCart = (id) => {
    const findData = addFavToCart.find((element) => element.id === id);
    if (findData) {
      dispatch(addItems(findData));
    } else {
      null;
    }
    toast.success("Item added to cart successfully.", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <Box>
      <PrimaryHeader />
      <ToastContainer
        style={{
          width: "310px",
          top: "7%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <CardArea sx={{ gap: "25px" }}>
        {favoriteItem?.map((item, index) => (
          <Box key={index}>
            <BoxItems
              sx={{
                background: theme ? "#39393D" : "#fff",
                color: theme ? "#fff" : "#39393D",
              }}
            >
              <ImageDiv src={item.image} alt={item.title} />
              <Typographys>{item.title}</Typographys>
              <h4>${item.price}</h4>
              <Box sx={{ margin: "0px 25px" }}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => handleFavToCart(item.id)}
                >
                  ADD
                </Button>
              </Box>
            </BoxItems>
          </Box>
        ))}
      </CardArea>
    </Box>
  );
};

export default Favorite;
