import React from 'react'
import PropTypes from "prop-types";


// TODO: this use an Address component with proper semantics
const Venue = ({venue}) => (
  <ul>
    <li>
      <a href={venue.webURI} > {venue.name}></a>
    </li>
    <li>
      {venue.address1}
    </li>
    <li>
      {venue.locality}
    </li>
    <li>
      {venue.postalCode}
    </li>
    <li>
      {venue.state}
    </li>
    <li>
      {venue.country}
    </li>
  </ul>
);

Venue.propTypes = {
  venue: PropTypes.shape({
    name: PropTypes.string,
    webURL: PropTypes.string,
    address1: PropTypes.string,
    locality: PropTypes.string,
    postalCode: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
  }),
};

export default Venue