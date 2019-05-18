import React from 'react';
import PropTypes from 'prop-types'
import './App.css';
import Search from "./components/Search";
import Layout from "./components/Layout";
import TicketList from "./components/TicketList";
import EventContent from "./components/EventContent";


function App({tickets, event}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header-logo"><span>StubHub - Where Fans Buy &amp; Sell Tickets</span></h1>
        <Search/>
      </header>
      <Layout.A left={<TicketList tickets={tickets}/>} right={<EventContent event={event}/>}/>
    </div>
  );
}

App.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired, // TODO: make `ticket` specific type
  event: PropTypes.object.isRequired, // TODO: make `event` specific type
};

export default App;
