import React, { useContext } from 'react';
import { IUserType } from '../../model/index';
import { UserContext } from '../Provider/TableProvider';
import './table.css';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  const context: any = useContext(UserContext);

  const onHandleDeleteUser = context.onHandleDeleteUser;
  const onRowDeleted = (id: string) => {
    onHandleDeleteUser(id);
  };

  const renderBody = () => {
    const users: IUserType[] = context.users;
    if (!users || users.length === 0) {
      return <h4 style={{ textAlign: 'center' }}>No Data...</h4>;
    }
    return (
      <tbody>
        {users.map(({ id, name, job }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{job}</td>
            <td>
              <button onClick={() => onRowDeleted(id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  return renderBody();
};

export const Table = () => {
  return (
    <table>
      <TableHeader />
      <TableBody />
    </table>
  );
};
