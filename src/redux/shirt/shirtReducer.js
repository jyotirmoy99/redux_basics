import { BUY_SHIRT } from "./shirtTypes";

const initialState = {
  noOfShirts: 15,
};

const shirtReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SHIRT:
      return {
        ...state,
        noOfShirts: state.noOfShirts - 1,
      };
    default:
      return state;
  }
};

export default shirtReducer;
