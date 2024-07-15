import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_ITEMS,
  REMOVE_ITEM,
  TOGGLE_THEME,
  FAVORITE_ITEM,
} from "../actions/actionType";

const initialState = {
  data: [],
  loading: false,
  error: null,
  items: [],
  isDarkMode: false,
  favoriteItem: [],
};

const reducerData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_ITEMS:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkMode: action.payload,
      };
    case FAVORITE_ITEM:
      return {
        ...state,
        favoriteItem: [...state.favoriteItem, action.payload],
      };
    case "REMOVE_FAVORITE_ITEM":
      return {
        ...state,
        favoriteItem: action.payload,
      };
    default:
      return state;
  }
};

export default reducerData;
