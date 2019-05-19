import React from 'react'
import PropTypes from "prop-types";

const Performers = ({performers = []}) => performers.length && (
  <ul>
    {performers.map((performer, i) => (
      <li key={`performer-${performer.name}-${i}`} >
        {performer.name}
      </li>
    ))}
  </ul>
);

Performers.propTypes = {
  performers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  }))
};

export default Performers