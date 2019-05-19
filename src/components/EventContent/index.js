import React from 'react';
import PropTypes from "prop-types";

import Slick from 'react-slick/lib';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import EventHeading from './EventHeading'
import Performers from './Performers'
import Venue from './Venue'

import './EventContent.css'

const slickSettings = {
  dots: false,
  arrows: false,
  autoplay: true,
  fade: true,
  infinite: true,
  adaptiveHeight: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default class EventContent extends React.PureComponent {
  render () {
    const {
      name, eventDateLocal,
      performers,
      images = [],
      venue
    } = this.props;


    // TODO: replace img with a more robust image component
    return (
      <div className={'eventcontent'} >
        <div className={'eventcontent-background'}>
          <Slick {...slickSettings} >
            {images.map(({width, height, url, alt, ...image}, i) => (
              <img
                key={`eventcontent-background-img${i}`}
                src={url}
                alt={alt}
                height={height}
                width={width}
              />
            ))}
          </Slick>
        </div>
        <div className={'eventcontent-content'} >
          <EventHeading {...{
            name,
            date: eventDateLocal
          }} />
          <Performers performers={performers} />
          <Venue {...venue} />
        </div>
      </div>
    )
  }
}

Event.propTypes = {
  ...EventHeading.propTypes,
  ...Performers.propTypes,
  venue: PropTypes.shape({
    ...Venue.propTypes,
  }),
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
  }))
};