import React from 'react';
import './App.css';
import Search from "./components/Search";
import Layout from "./components/Layout";
import TicketList from "./containers/TicketList";
import EventContent from "./containers/EventContent";


// TODO: the screen reader only class in here could applied with a HOC.
// It would be easier to maintain practices for accessibility
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header-logo">
          <span className={'sr-only'}>StubHub - Where Fans Buy &amp; Sell Tickets</span>
        </h1>
        <Search/>
      </header>
      <Layout.A left={TicketList} right={EventContent}/>
    </div>
  );
}

export default App;
