import React, { useEffect } from "react";
import { connect } from "react-redux";

import Scroller from "../../Scroller/Scroller";
import * as actions from "../../Store/actions/index";

const Home = (props) => {
  useEffect(() => {
    props.create_done();
  });

  return (
    <div className="content">
      <Scroller />
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    create_done: () => {
      dispatch(actions.create_done());
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);
