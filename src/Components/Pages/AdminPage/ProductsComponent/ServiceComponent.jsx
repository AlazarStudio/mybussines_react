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
  FunctionField,
} from 'react-admin';
import { Create, SimpleForm, TextInput, useGetList, Edit } from 'react-admin';
import { handleSave, handleSaveWithImages } from '../JS/fileUploadUtils';
import uploadsConfig from '../../../../uploadsConfig';
import RichTextInput from '../Auth/RichTextInput';
import MyRichTextInput from './MyRichTextInput';
import { stripHTML } from './NewsComponent';

// 📌 Список сервисов
export const ServiceList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="title" label="Название" sx={{
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'normal'
      }} />
      {/* <TextField source="description" label="Описание" /> */}
      <FunctionField
        label='Текст'
        render={record => stripHTML(record.description)}
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'normal'
        }}
      />
      <TextField source="form.title" label="Форма" />

      {/* ✅ Исправленный рендеринг центров */}
      <FunctionField
        label="Центры"
        render={(record) =>
          record.centers?.map((c) => c.center.title).join(', ') || '-'
        }
      />

      {/* <TextField source="img" label="Изображения" /> */}
      <FunctionField
        label="Картинка"
        render={(record) => {
          const images = Array.isArray(record.img)
            ? record.img
            : record.img
              ? [record.img]
              : [];
          if (!images.length) return null;
          const image = images[0];
          const src = image.includes('http')
            ? image
            : `${uploadsConfig}${image}`;
          return (
            <ImageField
              source="src"
              record={{ src }}
              title={record.title}
              sx={{
                '& img': {
                  width: "100px !important",
                  height: "100px !important",
                  objectFit: 'cover !important',
                  borderRadius: '8px',
                },
              }}
            />
          );
        }}
      />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// 📌 Создание сервиса
export const ServiceCreate = (props) => (
  <Create {...props} transform={handleSave}>
    <SimpleForm>
      <TextInput source="title" label="Название" />
      <MyRichTextInput source="description" label="Описание" multiline />

      {/* ✅ Выбор нескольких центров */}
      <ReferenceArrayInput
        source="centerIds"
        reference="centers"
        label="Центры"
      >
        <SelectArrayInput optionText="title" />
      </ReferenceArrayInput>

      {/* ✅ Выбор формы */}
      <ReferenceInput
        source="formId"
        reference="forms"
        label="Форма"
        allowEmpty
      >
        <SelectInput optionText="title" />
      </ReferenceInput>

      {/* ✅ Загрузка изображений */}
      <ImageInput source="img" label="Загрузить изображения" multiple>
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
      <MyRichTextInput source="description" label="Описание" multiline />

      {/* ✅ Выбор нескольких центров */}
      <ReferenceArrayInput
        source="centerIds"
        reference="centers"
        label="Центры"
      // format={(value) =>
      //   Array.isArray(value) ? value.map((v) => v.centerId || v.id) : []
      // }
      // parse={(value) => value.map((id) => ({ centerId: id }))}
      >
        <SelectArrayInput optionText="title" />
      </ReferenceArrayInput>

      {/* ✅ Выбор формы */}
      <ReferenceInput
        source="formId"
        reference="forms"
        label="Форма"
        allowEmpty
      >
        <SelectInput optionText="title" />
      </ReferenceInput>

      {/* ✅ Загрузка новых изображений */}
      <ImageInput
        source="imagesRaw"
        label="Загрузить новые изображения"
        multiple
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>

      {/* ✅ Отображение старых изображений (исправлено) */}
      <ImageInput
        source="img"
        label="Старые изображения"
        multiple
        accept="image/*"
        format={(value) =>
          Array.isArray(value)
            ? value.map((image) => ({
              src:
                typeof image === 'string' && image.startsWith('http')
                  ? image
                  : `${uploadsConfig}${image}`,
              title: image,
            }))
            : []
        }
        parse={(value) =>
          Array.isArray(value)
            ? value.map((file) => {
              if (file.rawFile) {
                return file.rawFile; // Если это новый файл
              }
              if (typeof file.src === 'string') {
                return file.src.replace(`${uploadsConfig}`, ''); // Старое изображение
              }
              return file;
            })
            : []
        }
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
