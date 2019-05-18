import React from 'react';
import './layout.css'; // TODO: Use some more succinct style management
import './layout-a.css';

// TODO: not a fan of the left right instantiate components passed here. make this better.
const A = (props) => (
  <div className={'layout layout-a'}>
    <section className={'layout-a-content layout-a-left'}>
      {props.left}
    </section>
    <section className={'layout-a-content layout-a-right'}>
      {props.right}
    </section>
  </div>
);

export default A
