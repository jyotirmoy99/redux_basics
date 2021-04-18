import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyShirt } from "../redux";
function HookShirtContainer() {
  const noOfShirts = useSelector((state) => state.shirts.noOfShirts);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Shirts - {noOfShirts}</h2>
      <button onClick={() => dispatch(buyShirt())}>Buy Shirt</button>
    </div>
  );
}

export default HookShirtContainer;
