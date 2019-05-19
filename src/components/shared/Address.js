import React from 'react'
import classnames from 'classnames'

// TODO: this is loosely structured at the moment but should be a component with proper semantics.
const Address = ({className, ...props}) => (
  <div className={classnames(className, 'address')}>
    {Object.keys(props).map(addressLine => (
      <span key={`address-${addressLine}`} className={`address-line address-${addressLine}`}>
        {props[addressLine]}
      </span>
    ))}
  </div>
);

export default Address