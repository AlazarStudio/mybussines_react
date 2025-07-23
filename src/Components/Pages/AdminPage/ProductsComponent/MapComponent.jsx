import React, { useEffect, useRef } from 'react';
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
import { useFormContext, useWatch } from 'react-hook-form';

// 📌 Автоматическая сумма ИП + ЮЛ (строкой)
const AutoSumSMSP = () => {
  const { setValue, getValues } = useFormContext();
  const ip = useWatch({ name: 'ip' });
  const ul = useWatch({ name: 'ul' });
  const smsp = useWatch({ name: 'smsp' });

  const manualOverride = useRef(false);

  useEffect(() => {
    const current = getValues('smsp');
    if (current !== smsp) manualOverride.current = true;
  }, [smsp, getValues]);

  useEffect(() => {
    if (manualOverride.current) return;

    const ipNum = parseFloat(ip);
    const ulNum = parseFloat(ul);

    if (!isNaN(ipNum) || !isNaN(ulNum)) {
      const sum = (isNaN(ipNum) ? 0 : ipNum) + (isNaN(ulNum) ? 0 : ulNum);
      setValue('smsp', String(sum));
    } else {
      setValue('smsp', '');
    }
  }, [ip, ul, setValue]);

  return null;
};

// 📌 Список всех карт
export const MapList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="title" label="Название района" />
      <TextField source="ip" label="ИП" />
      <TextField source="ul" label="ЮЛ" />
      <TextField source="smsp" label="Всего СМСП" />
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
      <AutoSumSMSP />
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
      <AutoSumSMSP />
      <TextInput source="smsp" label="Всего СМСП" />
    </SimpleForm>
  </Edit>
);
