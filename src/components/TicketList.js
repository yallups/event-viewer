import React from 'react'
import Ticket from './Ticket';
import PropTypes from 'prop-types'

import './TicketList.css'

export default class TicketList extends React.PureComponent {
  // TODO: indicate selected and notify when a selection happens

  render () {
    const {
      tickets = [],
      select
    } = this.props;

    return (
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
    )
  }
}

TicketList.propTypes = {
  tickets: PropTypes.array.isRequired
}