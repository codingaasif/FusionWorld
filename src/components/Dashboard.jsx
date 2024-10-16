/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router";
import PrimaryHeader from "./PrimaryHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  favoriteItem,
  fetchData,
  removeFavoriteItem,
  removeItem,
} from "../redux/actions/action";
import "react-loading-skeleton/dist/skeleton.css";
import { Box, Button } from "@mui/material";
import { addItems } from "../redux/actions/action";
import ShareIcon from "@mui/icons-material/Share";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  BoxButton,
  BoxContainer,
  BoxArea,
  BoxItems,
  CardArea,
  ImageDiv,
  Typographys,
  Skeletons,
  FooterContainer,
} from "../styledComponents/Dashboard";
import MainFooter from "./MainFooter";
import { Carousel } from "react-responsive-carousel";
import PaymentModal from "./PaymentModal";

const Dashboard = ({ theme }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState([]);
  const [searched, setSearched] = useState([]);
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState("");
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const navigate = useNavigate();
  const selectorData = useSelector((state) => state?.data);
  const items = useSelector((state) => state?.items);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddItems = (id) => {
    const findData = selectorData.find((element) => element.id === id);
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

  const handleRemoveItem = (id) => {
    const exsistingData = selectorData.some((element) => element.id === id);
    if (exsistingData) {
      dispatch(removeItem(id));
      toast.warn("Item removed from your cart.", {
        autoClose: 3000,
      });
    } else {
      null;
    }
  };

  const handleFavoriteBtn = (item) => {
    const isFavorite = state.some((fav) => fav.id === item.id);

    if (isFavorite) {
      // Remove item from favorite
      const updateState = state.filter((fav) => fav.id !== item.id);
      setState(updateState);
      dispatch(removeFavoriteItem(item));
    } else {
      //Add item to favorite
      const updateState = [...state, item];
      setState(updateState);
      dispatch(favoriteItem(item));
    }
  };

  const handleOpenProduct = (productId) => {
    navigate(`/productId/${productId}`);
  };

  const searchedData = searched?.length > 0 ? searched : selectorData;

  const handleShareItems = () => {
    prompt("Do you want to share it");
  };

  const handleBuyItem = (itemPrice) => {
    setPrice(itemPrice);
    setShow(true);
  };

  return (
    <>
      <PrimaryHeader setSearched={setSearched} state={state} />
      {show && <PaymentModal show={show} setShow={setShow} price={price} />}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <ToastContainer
          style={{
            width: "310px",
            top: "7%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Box>
      {/* Dashboard Carousel */}
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={true}
        stopOnHover={false}
        interval={3000}
        showStatus={false}
      >
        <Box>
          <img
            src="image/image_1.jpg"
            alt="Image 1"
            style={{ width: "100%", height: isSmallScreen ? "40vh" : "70vh" }}
          />
        </Box>
        <Box>
          <img
            src="image/image_2.jpg"
            alt="Image 4"
            style={{ width: "100%", height: isSmallScreen ? "40vh" : "70vh" }}
          />
        </Box>
        <Box>
          <img
            src="image/image_3.jpg"
            alt="Image 3"
            style={{ width: "100%", height: isSmallScreen ? "40vh" : "70vh" }}
          />
        </Box>
        <Box>
          <img
            src="image/image_4.png"
            alt="Image 4"
            style={{ width: "100%", height: isSmallScreen ? "40vh" : "70vh" }}
          />
        </Box>
        <Box>
          <img
            src="image/image_5.jpg"
            alt="Image 4"
            style={{ width: "100%", height: isSmallScreen ? "40vh" : "70vh" }}
          />
        </Box>
        <Box>
          <img
            src="image/image_6.png"
            alt="Image 4"
            style={{ width: "100%", height: isSmallScreen ? "40vh" : "70vh" }}
          />
        </Box>
      </Carousel>

      {/* Dashboard cart items */}
      <CardArea>
        {searchedData && selectorData?.length > 0 ? (
          <BoxContainer
            sx={{
              justifyContent: "center",
            }}
          >
            {searchedData?.map((item, index) => (
              <Box key={index}>
                <BoxItems
                  data-aos="fade-up"
                  sx={{
                    background: theme ? "#39393D" : "#fff",
                    color: theme ? "#fff" : "#39393D",
                  }}
                >
                  <ImageDiv
                    onClick={() => handleOpenProduct(item.id)}
                    src={item.image}
                    alt={item.title}
                  />
                  <Typographys>{item.title}</Typographys>
                  <h4>${item.price}</h4>
                  <Box sx={{ margin: "0px 25px" }}>
                    <Box sx={{ display: "flex", gap: "25px" }}>
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={() => handleBuyItem(item.price)}
                      >
                        Buy
                      </Button>
                      {items.some((add) => add.id === item.id) ? (
                        <Button
                          fullWidth
                          variant="contained"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          REMOVE
                        </Button>
                      ) : (
                        <Button
                          fullWidth
                          variant="contained"
                          onClick={() => handleAddItems(item.id)}
                        >
                          ADD
                        </Button>
                      )}
                    </Box>

                    <BoxButton>
                      <Button>
                        <FavoriteIcon
                          onClick={() => handleFavoriteBtn(item)}
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
                    </BoxButton>
                  </Box>
                </BoxItems>
              </Box>
            ))}
          </BoxContainer>
        ) : (
          <BoxArea>
            {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
              return (
                <Box key={index}>
                  <Skeletons animation="wave" />
                </Box>
              );
            })}
          </BoxArea>
        )}
      </CardArea>
      <FooterContainer>
        <MainFooter />
      </FooterContainer>
    </>
  );
};

export default Dashboard;
