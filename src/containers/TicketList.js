import { connect } from "react-redux";

import TicketList from '../components/TicketList';
import * as dispatchTicketList from '../actions/ticket';

const mapStateToProps = state => ({
  selected: state.inventory.selectedTicket,
  tickets: mapTickets(ticketSelector(state), state.inventory.selectedTicket),
});

const ticketSelector = ({ inventory }) => inventory.tickets;
const mapTickets = (tickets, selected) => tickets.map(ticket => ({ ...ticket, selected: ticket.id === selected }));

export default connect(
  mapStateToProps,
  dispatchTicketList
)(TicketList)