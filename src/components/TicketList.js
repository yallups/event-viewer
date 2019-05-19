import React from 'react'
import Ticket from './Ticket';
import PropTypes from 'prop-types'

import './TicketList.css'

export default class TicketList extends React.PureComponent {

  render () {
    const {
      tickets = [],
      select
    } = this.props;

    // TODO: would be better to take the title out of this component or have the listing functionality be a separate component
    return (
      <>
        <h2>Tickets</h2>
        <ul className={'ticketlist'} >
          {
            tickets.map((ticket, i) =>
              <Ticket
                key={ticket.id || `ticket-${i}`}
                onClick={() => select(ticket)}
                {...ticket}
              />
            )
          }
        </ul>
      </>
    )
  }
}

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape(Ticket.propTypes)).isRequired
};