import React from 'react';
import { withRouter } from 'react-router-dom';

function LogoutButton({ className, logout, history }) {
  const handleClick = () => {
    logout();
    history.push('/');
  }
  return <button className={className} onClick={handleClick}>Logout</button>;
}

export default withRouter(LogoutButton);