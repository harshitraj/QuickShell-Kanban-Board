import React from 'react';
import '../App.css';

function Card({ ticket, user }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <span className="user-avatar">{user.name[0]}</span>
      </div>
      <h3 className="card-title">{ticket.title}</h3>
      <div className="card-footer">
        <span className="priority">Priority: {ticket.priority}</span>
        <span className="tag">{ticket.tag}</span>
      </div>
    </div>
  );
}

export default Card;