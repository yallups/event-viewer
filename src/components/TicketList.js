import React from 'react'
import Ticket from './Ticket';
import PropTypes from 'prop-types'

export default class TicketList extends React.PureComponent {
  // TODO: indicate selected and notify when a selection happens

  render () {
    const {
      tickets = [],
    } = this.props;

    return (
      <div className={'ticketlist'} >
        {
          tickets.map((ticket, i) =>
            <Ticket
              key={ticket.id || `ticket-${i}`}
              {...ticket}
            />
          )
        }
      </div>
    )
  }
}

TicketList.propTypes = {
  tickets: PropTypes.array.isRequired
}