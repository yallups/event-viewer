import { connect } from "react-redux";

import EventContent from '../components/EventContent/';


const mapStateToProps = state => {
  const event = ({
    ...state.event,
  });

  return event
}


export default connect(
  mapStateToProps,
  null
)(EventContent)