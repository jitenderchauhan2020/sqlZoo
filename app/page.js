'use client';

import { useState } from 'react';
import Leftbar from './components/LeftBar'
import LeftBar from './components/LeftBar';
export default function Home() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <h1>Users List</h1>
      <button className='border' onClick={fetchUsers}>Fetch Users</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> 
        ))}
      </ul>
    </div>
  );
}
