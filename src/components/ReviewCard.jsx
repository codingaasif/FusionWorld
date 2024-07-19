/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Button,
  ButtonGroup,
  CardActions,
  Rating,
  styled,
} from "@mui/material";
import { useSelector } from "react-redux";
import { removeItem } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import PrimaryHeader from "./PrimaryHeader";
import ShareIcon from "@mui/icons-material/Share";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

import {
  BoxContainer,
  CardContainer,
  CardContents,
  CardMedias,
} from "../styledComponents/ReviewCard";
import PriceDetails from "./PriceDetails";

export default function ReviewCard({ theme }) {
  const [state, setState] = useState([]);
  const [data, setData] = useState([]);
  const cartItem = useSelector((state) => state?.items); // Get cart items from Redux store
  const [quantities, setQuantities] = useState(""); // Initial quantity state
  const maxQuantity = 5; // Maximum quantity allowed
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  // Save cart items to localStorage
  useEffect(() => {
    cartItem?.length > 0
      ? localStorage.setItem("items", JSON.stringify(cartItem))
      : null;
  }, [cartItem]);

  // Get cart items from localStorage
  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem("items"));
    if (getItems?.length > 0) {
      setData(getItems);
    }
  }, []);

  // updateTotalPrice
  const updateTotalPrice = (id, change) => {
    const item = data.find((item) => item.id === id);
    if (item) {
      const itemPrice = item.price;
      setTotalPrice((prevPrice) => {
        const newTotal = prevPrice + itemPrice * change;
        return parseFloat(newTotal.toFixed(2));
      });
    }
  };

  // handleIncreaseQuantity
  const handleIncreaseQuantity = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      if (newQuantities[id] !== undefined) {
        if (newQuantities[id] < maxQuantity) {
          newQuantities[id] += 1;
          updateTotalPrice(id, 1);
          toast.success("Items added successfully.", {
            position: "top-center",
          });
        }
      } else {
        newQuantities[id] = 1;
        updateTotalPrice(id, 1);
        toast.success("Item added successfully.", {
          position: "top-center",
        });
      }
      return newQuantities;
    });
  };

  // handleDecreaseQuantity
  const handleDecreaseQuantity = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      if (newQuantities[id] !== undefined && newQuantities[id] > 0) {
        newQuantities[id] -= 1;
        updateTotalPrice(id, -1);
        toast.warn("Item removed successfully.", {
          position: "top-center",
        });
      }
      if (newQuantities[id] === 0) {
        setTotalPrice((prevPrice) => {
          const item = data.find((item) => item.id === id);
          return prevPrice - item.price * 0;
        });
      }
      return newQuantities;
    });
  };

  const handleRemoveItem = (itemId) => {
    const newData = data.filter((item) => item.id !== itemId);
    setData(newData);
    localStorage.setItem("items", JSON.stringify(newData));
    dispatch(removeItem(itemId));
    toast.warn("Item removed from cart.", {
      position: "top-center",
    });
  };

  const handleShareItems = () => {
    alert("share items");
  };

  const Truncate = (string, number) => {
    if (!string) {
      return null;
    }
    if (string.length <= number) {
      return string;
    }
    return string.slice(0, number) + "...";
  };

  const handleToggle = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const OpenArrow = styled(Box)({
    right: "23px",
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer",
    top: "100px",
    alignItems: "center",
    position: "fixed",
  });

  return (
    <>
      <OpenArrow>
        <ExpandCircleDownIcon
          sx={{
            fontSize: "42px",
            transform: open ? "scaleY(1)" : "scaleY(-1)",
          }}
          onClick={handleToggle}
        />
      </OpenArrow>
      <PrimaryHeader />
      <ToastContainer
        style={{
          width: "270px",
          top: "7%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <BoxContainer sx={{ display: "flex", marginTop: "95px" }}>
        <Box sx={{ width: "100%" }}>
          <CardContainer>
            {data?.map((item) => {
              return (
                <>
                  <Card
                    key={item.id}
                    data-aos="fade-up"
                    sx={{
                      maxWidth: 900,
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

                      background: theme ? "#39393D" : "#fff",
                      color: theme ? "#fff" : "#39393D",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: {
                          xs: "column",
                          md: "row",
                        },
                        alignItems: {
                          xs: "center",
                        },
                      }}
                    >
                      <CardContents
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <CardMedias
                          component="img"
                          image={item?.image}
                          alt={item?.title}
                        />

                        <ButtonGroup
                          sx={{ padding: "30px 0 0 0", boxShadow: "none" }}
                          variant="contained"
                          size="large"
                          aria-label="Basic button group"
                        >
                          <Button
                            onClick={() => handleDecreaseQuantity(item.id)}
                          >
                            -
                          </Button>
                          <Button>{quantities[item.id] || 0}</Button>
                          <Button
                            onClick={() => handleIncreaseQuantity(item.id)}
                          >
                            +
                          </Button>
                        </ButtonGroup>
                      </CardContents>
                      <CardContent
                        sx={{
                          width: { xs: "80%", md: "50%" },
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ textAlign: { xs: "justify" } }}
                        >
                          {Truncate(item?.title, 35)}
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: { xs: "justify" },
                            color: theme ? "#fff" : "#39393D",
                          }}
                          gutterBottom
                          variant="body2"
                        >
                          {Truncate(item?.description.slice(0, 300))}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ textAlign: "center" }}
                        >
                          ${item?.price}
                        </Typography>
                        <CardActions
                          sx={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Button size="small">
                            <FavoriteIcon
                              onClick={() =>
                                setState((prev) =>
                                  prev.some((add) => add.id === item.id)
                                    ? prev.filter((add) => add.id !== item.id)
                                    : [...prev, item]
                                )
                              }
                              style={{
                                color: state.some((add) => add.id === item.id)
                                  ? "red"
                                  : "inherit",
                              }}
                            />
                          </Button>
                          <Button size="large" onClick={handleShareItems}>
                            <ShareIcon />
                          </Button>
                          <Button>
                            <Rating
                              name="simple-controlled"
                              value={item?.rating?.rate}
                            />
                          </Button>
                        </CardActions>
                        <CardActions
                          sx={{
                            justifyContent: "space-between",
                            gap: "70px",
                            padding: "12px 0",
                          }}
                        >
                          <Button
                            fullWidth
                            variant="contained"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            REMOVE
                          </Button>
                        </CardActions>
                      </CardContent>
                    </Box>
                  </Card>
                </>
              );
            })}
          </CardContainer>
        </Box>
        {open && data?.length > 0 && (
          <Box sx={{ width: "50%", display: "flex", justifyContent: "end" }}>
            <PriceDetails totalPrice={totalPrice} />
          </Box>
        )}
      </BoxContainer>
    </>
  );
}
