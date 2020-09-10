import React from 'react';
import { Form } from './components/Form/Form';
import { TableProvider } from './components/Provider/TableProvider';
import { Table } from './components/Table/Table';

function App() {
  return (
    <TableProvider>
      <h3 style={{ textAlign: 'center' }}>React Table Sample</h3>
      <Table />
      <Form />
    </TableProvider>
  );
}

export default App;
