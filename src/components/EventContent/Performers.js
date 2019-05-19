import React from 'react'
import PropTypes from "prop-types";

const Performers = ({performers = []}) => performers.length && (
  <div className={'eventcontent-performers'} >
    <h3>Performers</h3>
    <ul className={'eventcontent-performers-list'}>
      {performers.map((performer, i) => (
        <li className={'eventcontent-performers-listitem'} key={`performer-${performer.name}-${i}`} >
          {performer.name}
        </li>
      ))}
    </ul>
  </div>
);

Performers.propTypes = {
  performers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  }))
};

export default Performers