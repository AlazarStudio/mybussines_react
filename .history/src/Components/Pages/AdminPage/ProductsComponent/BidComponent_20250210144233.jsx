import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

// 📌 Список всех заявок
export const BidList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="name" label="Имя" />
      <TextField source="phone" label="Телефон" />
      <TextField source="email" label="Email" />
      <TextField source="form" label="Форма" />
      <TextField source="inn" label="ИНН" />
      <TextField source="comment" label="Комментарий" />

      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
