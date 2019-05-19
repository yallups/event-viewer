import {connect} from "react-redux";

import EventContent from '../components/EventContent/';
import withMeta from './withMeta';


const mapStateToProps = state => ({
  ...state.event,
  meta: {
    description: metaSelector(state).metaDescription,
  },
  title: metaSelector(state).title
})

const metaSelector = (state) => state.event.seoMeta;

export default connect(
  mapStateToProps,
  null
)(withMeta(EventContent))
