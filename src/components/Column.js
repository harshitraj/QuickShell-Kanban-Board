import React from 'react';
import Card from './Card';
import '../App.css';


function Column({ title, tickets, users }) {
    const getStatusIcon = () => {
      switch (title.toLowerCase()) {
        case 'todo':
          return 'To-do.svg';
        case 'in progress':
          return 'in-progress.svg';
        case 'done':
          return 'Done.svg';
        case 'canceled':
          return 'Cancelled.svg';
        default: 
          return 'Done.svg';
      }
    };
  
    return (
      <div className="column">
        <div className="column-header">
          <div className="column-header-left">
            <img src={`/photo/${getStatusIcon()}`} alt={`${title} icon`} className="status-icon" />
            <h2>{title}</h2>
            <span className="ticket-count">{tickets.length}</span>
          </div>
          <div className="column-header-right">
            <button className="action-button">
              <img src="/photo/add.svg" alt="Add" className="action-icon" />
            </button>
            <button className="action-button">
              <img src="/photo/3 dot menu.svg" alt="More options" className="action-icon" />
            </button>
          </div>
        </div>
        <div className="column-cards">
          {tickets.map(ticket => (
            <Card key={ticket.id} ticket={ticket} user={users.find(user => user.id === ticket.userId)} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Column;