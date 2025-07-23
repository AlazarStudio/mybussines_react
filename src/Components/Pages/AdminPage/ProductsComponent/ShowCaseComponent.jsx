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
  ImageInput,
  ImageField,
} from 'react-admin';
import { handleSave, handleSaveWithImages } from '../JS/fileUploadUtils';
import uploadsConfig from '../../../../uploadsConfig';
import RichTextInput from '../Auth/RichTextInput';

// Список витрин
export const ShowcaseList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="title" label="Заголовок" />
      <TextField source="fullName" label="ФИО" />
      <TextField source="phone" label="Телефон" />
      <TextField source="email" label="Email" />
      <TextField source="city" label="Город" />
      <TextField source="description" label="Описание" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Создание витрины
export const ShowcaseCreate = (props) => (
  <Create {...props} transform={handleSave}>
    <SimpleForm>
      <TextInput source="title" label="Заголовок" />
      <TextInput source="fullName" label="ФИО" />
      <TextInput source="phone" label="Телефон" />
      <TextInput source="email" label="Email" />
      <TextInput source="city" label="Город" />
      <RichTextInput source="description" label="Описание" />
      <ImageInput source="images" label="Изображения" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

// Редактирование витрины
export const ShowcaseEdit = (props) => (
  <Edit {...props} transform={handleSaveWithImages}>
    <SimpleForm>
      <TextInput source="title" label="Заголовок" />
      <TextInput source="fullName" label="ФИО" />
      <TextInput source="phone" label="Телефон" />
      <TextInput source="email" label="Email" />
      <TextInput source="city" label="Город" />
      <RichTextInput source="description" label="Описание" />

      <ImageInput
        source="imagesRaw"
        label="Новые изображения"
        multiple
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>

      <ImageInput
        source="images"
        label="Старые изображения"
        multiple
        accept="image/*"
        format={(value) =>
          value && value.length
            ? value.map((image) => ({
                src: image.includes('http')
                  ? image
                  : `${uploadsConfig}${image}`,
                title: image,
              }))
            : []
        }
        parse={(value) =>
          value.map((file) => {
            if (file.rawFile) return file.rawFile;
            return file.src.replace(`${uploadsConfig}`, '');
          })
        }
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
