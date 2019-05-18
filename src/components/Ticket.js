import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './ticket.css'

export default function Ticket (props) {
  const {
    price,
    href,
    onClick,
    selected,
  } = props;

  return (
    <li
      className={classnames('ticket', {'ticket-selected': selected})} >
      <a className={'ticket-anchor'}
         onClick={onClick}
         href={href} >
        <label className={'ticket-price-label'} >Price: </label><span className={'ticket-price-amount'}>{price.amount} {price.currency}</span>
      </a>
    </li>
  );
}

Ticket.propTypes = {
  price: PropTypes.shape({ // TODO: make this a price specific object
    amount: PropTypes.number,
    currency: PropTypes.string
  }).isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};
