import {connect} from "react-redux";

import EventContent from '../components/EventContent/';
import withMeta from './withMeta';


// TODO: Meta organization could be better. this HOC is managing both getting the Meta included and the data for event
// I dont think this would last long term but is passable for now.
const mapStateToProps = state => ({
  ...state.event,
  meta: {
    description: metaSelector(state).metaDescription,
  },
  title: metaSelector(state).title
});

const metaSelector = (state) => state.event.seoMeta;

export default connect(
  mapStateToProps,
  null
)(withMeta(EventContent))
