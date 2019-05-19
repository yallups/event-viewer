import React from 'react'
import PropTypes from "prop-types";

const EventHeading = ({name, date}) => (
  <>
    <h2 className={'eventcontent-heading-heading'}>
      {name}
    </h2>
    <span className={'eventcontent-heading-date'}>
      {date}
    </span>
  </>
);

EventHeading.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
};

export default EventHeading