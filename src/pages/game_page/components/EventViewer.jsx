import React from "react";
import { connect } from "react-redux";

const EventViewer = (props) => {
  let event_elements = [];

  // eslint-disable-next-line
  Array.from(props.event_log).map((event_item) => {
    event_elements.push(<p>{event_item}</p>);
  });

  return <div>{event_elements}</div>;
};

const mapStateToProps = (state) => {
  return {
    ...state,
    event_log: state.UserInfo.event_log,
  };
};

export default connect(mapStateToProps, null)(EventViewer);
