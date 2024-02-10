import React, { useEffect, useState } from 'react';

function UserHome() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Read the username from localStorage when the component mounts
    const storedUsername = localStorage.getItem('name');
    setUsername(storedUsername || ''); // Set the username state
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <h1>Welcome, {username}</h1>
      <p>This is the homepage.</p>
    </div>
  );
}

export default UserHome;
