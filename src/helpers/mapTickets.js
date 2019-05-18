

const mapTickets = (payload) => {
  return payload.map(ticket => {
    return {
      ...ticket,
      id: idSelector(ticket)
    };
  })
};

const idSelector= ({ id, seats = [{}] }) => `${id || seats[0].listingId}`;

export default mapTickets