/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, addUser, removeUser } from '../Store/reducers/user';

function User({ user, onDelete }) {
  const onClick = (event) => {
    event.preventDefault();
    onDelete(user.id);
  };

  return (
    <li>
      <span className='user-name'>{user.name}</span>
      <button onClick={onClick}>Delete</button>
    </li>
  );
}

export default function UserManagement() {
  const dispatch = useDispatch();
  const { users } = useSelector(selectUser);
  const [curUser, setCurUser] = useState({ id: 1, name: '' });

  const onChange = (event) => {
    const { value } = event.target;
    setCurUser({ ...curUser, name: value });
  };

  const onClick = () => {
    dispatch(addUser(curUser));
    setCurUser({ id: curUser.id + 1, name: '' });
  };

  const onDelete = (id) => {
    dispatch(removeUser({ id }));
  };


  return (
    <div className='container'>
      <input type="text" onChange={onChange} value={curUser.name} />
      <button onClick={onClick}>Add user</button>
      <ul>
        {users?.map((user) => (
          <User key={user.id} user={user} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
