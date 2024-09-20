import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      });
  }, []);

  const handleDisplayChange = (newGrouping, newSorting) => {
    setGrouping(newGrouping);
    setSorting(newSorting);
  };

  return (
    <div className="app">
      <Header onDisplayChange={handleDisplayChange} />
      <Board tickets={tickets} users={users} grouping={grouping} sorting={sorting} />
    </div>
  );
}

export default App;