import React from 'react'
import PropTypes from "prop-types";
import Address from '../shared/Address';

import './Venue.css';

// TODO: probably should make the address passing a bit nicer. could be its own object. Then wouldnt need to pull it out
// and put it back together.
const Venue = ({webURI, name, ...rest}) => {
  const {
    address1,
    locality,
    postalCode,
    state,
    country,
  } = rest;
  return (
    <div className={'eventcontent-venue'}>
      <h3>
        <a href={webURI}>{name}></a>
      </h3>
      <Address className={'eventcontent-venue-address'} {...{
        address1,
        locality,
        postalCode,
        state,
        country,
      }} />
    </div>
  );
};

Venue.propTypes = {
  name: PropTypes.string,
  webURL: PropTypes.string,
  address1: PropTypes.string,
  locality: PropTypes.string,
  postalCode: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string,
};

export default Venue