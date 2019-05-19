import React from 'react'
import classnames from 'classnames'

// TODO: this use an Address component with proper semantics
const Address = ({className, ...props}) => (
  <div className={classnames(className, 'address')}>
    {Object.keys(props).map(addressLine => (
      <span key={`address-${addressLine}`} className={`address-line address-${addressLine}`}>
        {props[addressLine]}
      </span>
    ))}
  </div>
)

export default Address