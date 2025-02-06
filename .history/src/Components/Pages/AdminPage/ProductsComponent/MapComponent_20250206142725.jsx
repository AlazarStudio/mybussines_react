import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

// 📌 Список всех карт
export const MapList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="title" label="Название" />
      <TextField source="ip" label="IP-адрес" />
      <TextField source="ul" label="UL" />
      <TextField source="smsp" label="SMSP" />

      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);


