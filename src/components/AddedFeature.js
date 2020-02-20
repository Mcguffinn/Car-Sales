import React from 'react';
import { removeFeature } from "./Reducers/CarActions";
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
