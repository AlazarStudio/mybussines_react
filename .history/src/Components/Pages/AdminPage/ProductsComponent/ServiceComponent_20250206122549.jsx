import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ImageField,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ImageInput,
} from 'react-admin';
import { Create, SimpleForm, TextInput, useGetList, Edit } from 'react-admin';
import { handleSaveWithImages } from '../JS/fileUploadUtils';
import uploadsConfig from '../../../../uploadsConfig';

// 📌 Список сервисов
export const ServiceList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="title" label="Название" />
      <TextField source="description" label="Описание" />
      <TextField source="center.title" label="Центр" />
      <TextField source="form.title" label="Форма" />
      <TextField source="img" label="Изображения" />

      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// 📌 Создание сервиса
export const ServiceCreate = (props) => (
  <Create {...props} transform={handleSaveWithImages}>
    <SimpleForm>
      <TextInput source="title" label="Название" />
      <TextInput source="description" label="Описание" multiline />

      {/* ✅ Выбор нескольких центров */}
      <ReferenceArrayInput source="centerIds" reference="centers" label="Центры">
        <SelectArrayInput optionText="title" />
      </ReferenceArrayInput>

      {/* ✅ Выбор формы */}
      <ReferenceInput source="formId" reference="forms" label="Форма" allowEmpty>
        <SelectInput optionText="title" />
      </ReferenceInput>

      {/* ✅ Загрузка изображений */}
      <ImageInput source="img" label="Загрузить изображения" multiple accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);


// 📌 Редактирование сервиса
export const ServiceEdit = (props) => (
  <Edit {...props} transform={handleSaveWithImages}>
    <SimpleForm>
      <TextInput source="title" label="Название" />
      <TextInput source="description" label="Описание" multiline />

      {/* Выбор центра */}
      <ReferenceInput source="centerId" reference="centers" label="Центр" allowEmpty>
        <SelectInput optionText="title" />
      </ReferenceInput>

      {/* Выбор формы */}
      <ReferenceInput source="formId" reference="forms" label="Форма" allowEmpty>
        <SelectInput optionText="title" />
      </ReferenceInput>

      {/* Загрузка новых изображений */}
      <ImageInput source="imagesRaw" label="Загрузить новые изображения" multiple accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>

      {/* Отображение старых изображений */}
      <ImageInput
        source="img"
        label="Старые изображения"
        multiple
        accept="image/*"
        format={(value) =>
          Array.isArray(value)
            ? value.map((image) => ({
                src: image.includes('http') ? image : `${uploadsConfig}${image}`,
                title: image,
              }))
            : []
        }
        parse={(value) =>
          Array.isArray(value)
            ? value.map((file) =>
                file.rawFile ? file.rawFile : file.src.replace(`${uploadsConfig}`, '')
              )
            : []
        }
      >
        <ImageField source="src" title="title" />
      </ImageInput>

      <TextInput source="description" label="Описание" multiline />
    </SimpleForm>
  </Edit>
);
