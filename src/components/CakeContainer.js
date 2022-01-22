import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h3>number of cakes - {props.numOfCakes}</h3>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
