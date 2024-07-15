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
import { addItems, removeFavoriteItem } from "../redux/actions/action";
import { ToastContainer, toast } from "react-toastify";

const Favorite = ({ theme }) => {
  const favoriteItem = useSelector((state) => state?.favoriteItem);
  const dispatch = useDispatch();
  console.log(favoriteItem, "favoriteItem");

  const handleFavToCart = (id) => {
    const addData = favoriteItem.find((element) => element.id === id);
    if (addData) {
      dispatch(addItems(addData));
    }
    toast.success("Item added to cart successfully.", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const handleRemoveFavCart = (id) => {
    const removedData = favoriteItem.filter((element) => element.id !== id);
    if (removedData) {
      dispatch(removeFavoriteItem(removedData));
    } else {
      null;
    }
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
      <CardArea sx={{ gap: "25px", marginTop: "95px" }}>
        {favoriteItem?.map((item, index) => (
          <Box key={index}>
            <BoxItems
              sx={{
                background: theme ? "#39393D" : "#fff",
                color: theme ? "#fff" : "#39393D",
                height: "345px",
              }}
            >
              <ImageDiv src={item.image} alt={item.title} />
              <Typographys>{item.title}</Typographys>
              <h4>${item.price}</h4>
              <Box sx={{ margin: "0px 25px", display: "flex", gap: "30px" }}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => handleFavToCart(item.id)}
                >
                  ADD
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => handleRemoveFavCart(item.id)}
                >
                  REMOVE
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
