import React from "react";
import { buyPant } from "../redux";
import { connect } from "react-redux";

function PantContainer(props) {
  return (
    <div>
      <h3>Pants - {props.noOfPants}</h3>
      <button onClick={props.buyPant}>Buy</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfPants: state.pants.noOfPants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPant: () => dispatch(buyPant()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PantContainer);
