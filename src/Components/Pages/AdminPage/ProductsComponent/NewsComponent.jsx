import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ImageInput,
  ImageField,
  DateInput,
  DateField,
  FunctionField,
} from 'react-admin';
import { Create, SimpleForm, TextInput } from 'react-admin';
import { Edit } from 'react-admin';
import { uploadFile, uploadFiles } from '../JS/fileUploadUtils';
import { handleSave, handleSaveWithImages } from '../JS/fileUploadUtils';
import uploadsConfig from '../../../../uploadsConfig';
import RichTextInput from '../Auth/RichTextInput';
import MyRichTextInput from './MyRichTextInput';

export const stripHTML = html => {
	const tmp = document.createElement('DIV')
	tmp.innerHTML = html
	return tmp.textContent || tmp.innerText || ''
}

const formatDate = dateString => {
	const options = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	}

	return new Date(dateString).toLocaleString('ru-RU', options)
}

// Список всех категорий
export const NewsList = (props) => (
  <List
    {...props}
    sort={{ field: 'date', order: 'DESC' }} // Сортировка по убыванию даты
  >
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="title" label="Название" />
      <DateField source="date" label="Дата" />
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
      <EditButton label={null} />
      <DeleteButton label={null}/>
    </Datagrid>
  </List>
);

// Создание категории

export const NewsCreate = (props) => (
  <Create {...props} transform={handleSave}>
    <SimpleForm>
      <TextInput source="title" label="Title" />
      <DateInput
        source="date"
        label="Дата"
        format={(value) => (value ? value.split('T')[0] : '')}
        parse={(value) => (value ? new Date(value).toISOString() : null)}
      />

      <MyRichTextInput source="description" label="Описание" />
      <ImageInput source="img" label="Загрузить изображение" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

// Редактирование категории
export const NewsEdit = (props) => (
  <Edit {...props} transform={handleSaveWithImages}>
    <SimpleForm>
      <TextInput source="title" label="Title" />
      <DateInput source="date" label="Дата" />
      <MyRichTextInput source="description" label="Описание" />
      <ImageInput
        source="imagesRaw"
        label="Загрузить новые изображения"
        multiple
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>

      {/* Поле для отображения старых изображений, если они есть */}
      <ImageInput
        source="img"
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
            // Если это новый файл (имеет rawFile), вернем только его имя
            if (file.rawFile) {
              return file.rawFile;
            }
            // Если это старое изображение (имеет только src), извлекаем имя файла
            return file.src.replace(`${uploadsConfig}`, '');
          })
        }
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
