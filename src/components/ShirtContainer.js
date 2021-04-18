import React from "react";
import { buyShirt } from "../redux";
import { connect } from "react-redux";

function ShirtContainer(props) {
  return (
    <div>
      <h3>Shirts - {props.noOfShirts}</h3>
      <button onClick={props.buyShirt}>Buy</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfShirts: state.shirts.noOfShirts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyShirt: () => dispatch(buyShirt()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShirtContainer);
