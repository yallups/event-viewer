import React from 'react'
import PropTypes from "prop-types";

const EventHeading = ({name, date}) => (
  <div>
    <h2>
      {name}
    </h2>
    <span>
      {date}
    </span>
  </div>
);

EventHeading.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
};

export default EventHeading