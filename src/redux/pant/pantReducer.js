import { BUY_PANT } from "./pantTypes";

const initialState = {
  noOfPants: 20,
};

const pantReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PANT:
      return {
        ...state,
        noOfPants: state.noOfPants - 1,
      };
    default:
      return state;
  }
};

export default pantReducer;
