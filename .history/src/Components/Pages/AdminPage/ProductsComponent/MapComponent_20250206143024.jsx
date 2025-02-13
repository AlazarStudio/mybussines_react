import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Create,
  SimpleForm,
  TextInput,
  Edit,
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



// 📌 Создание карты
export const MapCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="Название района" />
      <TextInput source="ip" label="ИП" />
      <TextInput source="ul" label="ЮЛ" />
      <TextInput source="smsp" label="Всего СМСП" />
    </SimpleForm>
  </Create>
);




// 📌 Редактирование карты
export const MapEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" label="Название района" />
      <TextInput source="ip" label="ИП" />
      <TextInput source="ul" label="ЮЛ" />
      <TextInput source="smsp" label="Всего СМСП" />
    </SimpleForm>
  </Edit>
);
