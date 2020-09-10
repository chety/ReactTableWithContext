import React, { useContext, useState } from 'react';
import { IUserType } from '../../model';
import { IUserContext } from '../../model/index';
import { generateId } from '../../utils';
import { UserContext } from '../Provider/TableProvider';
import './form.css';

export function Form() {
  const initialState: IUserType = {
    id: '',
    job: '',
    name: '',
  };
  const [user, setUser] = useState<IUserType>(initialState);
  const context: IUserContext = useContext(UserContext);

  const onInputChanged = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const onUserAdd = (e: any) => {
    e.preventDefault();
    const { onHandleAddUser } = context;
    const addedUser: IUserType = { ...user, id: generateId() };
    onHandleAddUser!(addedUser);
    setUser(initialState);
  };

  return (
    <form onSubmit={onUserAdd} className='user-form'>
      <label htmlFor='name'>
        <strong>Name:</strong>
      </label>
      <input
        type='text'
        id='name'
        name='name'
        value={user.name}
        placeholder='Name...'
        onChange={onInputChanged}
        required
      ></input>

      <label htmlFor='Job'>
        <strong>Job:</strong>{' '}
      </label>
      <input
        type='text'
        id='job'
        name='job'
        value={user.job}
        placeholder='Job...'
        onChange={onInputChanged}
        required
      ></input>

      <button type='submit'>Add</button>
    </form>
  );
}
