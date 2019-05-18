import React from 'react'
import PropTypes from 'prop-types'

export default function Ticket (props) {
  const { price, href } = props;

  return (
    <li className={'ticket'} >
      <a className={'ticket-anchor'}
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
  href: PropTypes.string
};
