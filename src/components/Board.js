import React from 'react';
import Column from './Column';
import '../App.css';

function Board({ tickets, users, grouping, sorting }) {
  const groupTickets = () => {
    const grouped = {};
    
    tickets.forEach(ticket => {
      let key;
      if (grouping === 'status') key = ticket.status;
      else if (grouping === 'user') key = users.find(user => user.id === ticket.userId).name;
      else if (grouping === 'priority') key = ticket.priority;

      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(ticket);
    });

    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (sorting === 'priority') return b.priority - a.priority;
        else return a.title.localeCompare(b.title);
      });
    });

    return grouped;
  };

  const groupedTickets = groupTickets();

  return (
    <div className="board">
      {Object.entries(groupedTickets).map(([key, tickets]) => (
        <Column key={key} title={key} tickets={tickets} users={users} />
      ))}
    </div>
  );
}

export default Board;