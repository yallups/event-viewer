import { connect } from "react-redux";

import TicketList from '../components/TicketList';

const mapStateToProps = state => ({
  tickets: ticketSelector(state)
});

const ticketSelector = ({ inventory }) => inventory.tickets;

export default connect(
  mapStateToProps,
  null
)(TicketList)