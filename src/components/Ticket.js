import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './Ticket.css'

export default function Ticket (props) {
  const {
    price,
    href,
    onClick,
    selected,
  } = props;

  // TODO: need to handle pricing more robustly. this is too fragile.
  // also need to consider case when a ticket doesnt have a price yet for whatever reason.
  const amount = price.amount.toFixed(2);

  return (
    <li className={classnames('ticket', {'ticket-selected': selected})} >
      <a className={'ticket-anchor'}
         onClick={onClick}
         href={href} >
        <label className={'ticket-price-label'} >Price: </label><span className={'ticket-price-amount'}>{amount} {price.currency}</span>
      </a>
    </li>
  );
}

Ticket.propTypes = {
  price: PropTypes.shape({ // TODO: make this a price specific object
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string
  }).isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};
