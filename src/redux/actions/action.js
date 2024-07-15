import axios from "axios";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FAVORITE_ITEM,
  REMOVE_ITEM,
  ADD_ITEMS,
  REMOVE_FAVORITE_ITEM,
  TOGGLE_THEME,
} from "../actions/actionType";

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const addItems = (items) => {
  return (dispatch) => {
    dispatch({ type: ADD_ITEMS, payload: items });
  };
};

export const removeItem = (items) => {
  return (dispatch) => {
    dispatch({ type: REMOVE_ITEM, payload: items });
  };
};

export const favoriteItem = (items) => {
  return (dispatch) => {
    dispatch({ type: FAVORITE_ITEM, payload: items });
  };
};

export const removeFavoriteItem = (items) => {
  return (dispatch) => {
    dispatch({ type: REMOVE_FAVORITE_ITEM, payload: items });
  };
};

export const toggleTheme = (theme) => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_THEME, payload: theme });
  };
};
