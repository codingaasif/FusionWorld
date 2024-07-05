/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import { Box, Container, Rating } from "@mui/material";
import PrimaryHeader from "./PrimaryHeader";
import { addItems, removeItem } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import ShareIcon from "@mui/icons-material/Share";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetails({ theme }) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [filteredItem, setFilteredItem] = useState([]);
  const [state, setState] = useState([]);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;
    setProduct(data);
  };
  useEffect(() => {
    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (product) {
      const filteredItem = product?.find(
        (item) => item.id === parseInt(productId)
      );
      setFilteredItem(filteredItem);
    }
  }, [product, productId]);

  const handleRemoveData = (id) => {
    const exsistingData = product.some((element) => element.id === id);
    if (exsistingData) {
      dispatch(removeItem(id));
    } else {
      null;
    }
  };

  const handleAddData = (id) => {
    const findData = product.find((element) => element.id === id);
    if (findData) {
      dispatch(addItems(findData));
      toast.success("Item added to cart successfully.");
    } else {
      null;
    }
  };

  const shareItems = () => {
    prompt("Do you want to share it");
  };

  return (
    <>
      <PrimaryHeader />
      <ToastContainer
        style={{
          width: "310px",
          top: "7%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "85px",
        }}
      >
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "15px",
            flexDirection: {
              xs: "column",
              md: "column",
              lg: "row",
            },

            background: theme ? "#39393D" : "#fff",
            color: theme ? "#fff" : "#39393D",
          }}
        >
          <Box
            sx={{
              margin: "25PX",
              width: "325px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              sx={{
                height: 150,
                width: 250,
                backgroundSize: "contain",
                border: "5px solid #1976d2",
                padding: "10px",
                borderRadius: "10px",
              }}
              image={filteredItem?.image}
              title={filteredItem?.title}
            />
          </Box>
          <Box sx={{ maxWidth: 500 }}>
            <CardContent sx={{ padding: "0px 10px 0px 10px" }}>
              <Typography variant="h5" component="div">
                {filteredItem?.title}
              </Typography>
              <Typography variant="h6" component="div">
                {filteredItem?.category}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme ? "#fff" : "#39393D",
                  textAlign: "justify",
                  padding: "5px 15px 5px 15px",
                }}
              >
                {filteredItem?.description}
              </Typography>
              <Typography variant="h5" component="div">
                ${filteredItem?.price}
              </Typography>
            </CardContent>

            <CardActions
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Button size="small">
                <FavoriteIcon
                  onClick={() =>
                    setState((prev) =>
                      prev.some((add) => add.id === productId)
                        ? prev.filter((add) => add.id !== productId)
                        : [...prev, { id: productId }]
                    )
                  }
                  style={{
                    color: state.some((add) => add.id === productId)
                      ? "red"
                      : "inherit",
                  }}
                />
              </Button>
              <Button size="large" onClick={shareItems}>
                <ShareIcon />
              </Button>
              <Button>
                <Rating
                  name="simple-controlled"
                  value={filteredItem?.rating?.rate}
                />
              </Button>
            </CardActions>
            <Box
              sx={{
                margin: "0 50px",
                paddingBottom: "15px",
              }}
            >
              {state.some((add) => add.id === filteredItem?.id) ? (
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => handleRemoveData(filteredItem.id)}
                >
                  REMOVE
                </Button>
              ) : (
                <Button
                  fullWidth
                  gutterBottom
                  variant="contained"
                  onClick={() => handleAddData(filteredItem.id)}
                >
                  ADD
                </Button>
              )}
            </Box>
          </Box>
        </Card>
      </Container>
    </>
  );
}
