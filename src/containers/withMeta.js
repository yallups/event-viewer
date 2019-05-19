import React from 'react'
import {Helmet} from "react-helmet";

export default Component => ({title, meta, ...rest}) => {
  return (
    <>
      <Helmet>
        {Object.keys(meta)
          .map((propKey, i) => (
            <meta key={`meta-key-${i}`} name={propKey} content={meta[propKey]} />
          ))
        }
        {title && (
          <title>{title}</title>
        )}
      </Helmet>
      <Component {...rest} />
    </>
  )
}