import React, { createContext, useState } from 'react';
import { IUserContext, IUserType } from '../../model/index';
import { generateId } from '../../utils';

export const UserContext = createContext<IUserContext>({});
interface ITableProviderProps {
  children: any[];
}
export const TableProvider = (props: ITableProviderProps) => {
  const [users, setUsers] = useState<IUserType[]>([
    {
      id: generateId(),
      name: 'Mirko',
      job: 'Full Time Baby',
    },
    {
      id: generateId(),
      name: 'Rodik',
      job: 'Thinker',
    },
    {
      id: generateId(),
      name: 'Chety',
      job: 'Software Engineer',
    },
    {
      id: generateId(),
      name: 'Messi',
      job: 'Alien',
    },
  ]);

  const onHandleDeleteUser = (id: string) => {
    const remainingUsers: IUserType[] = users.filter((u) => u.id !== id);
    setUsers(remainingUsers);
  };

  const onHandleAddUser = (user: IUserType) => {
    const isExist = users.some((u) => u.name === user.name);
    if (isExist) {
      alert(`A user with ${user.name} is already exist`);
      return;
    }
    const newUsers = [...users, user];
    setUsers(newUsers);
  };

  const value = {
    users,
    onHandleDeleteUser,
    onHandleAddUser,
  };
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
