import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ImageInput,
  ImageField,
  TextInput,
  SelectInput,
  FunctionField,
  Create,
  SimpleForm,
  Edit,
  useRecordContext,
} from 'react-admin';
import {
  handleSaveSocialPractice,
  handleSaveWithImagesSocialPractice,
} from '../JS/fileUploadUtils';
import uploadsConfig from '../../../../uploadsConfig';

const SOCIAL_TYPE_CHOICES = [
  { id: 'telegram', name: 'Telegram' },
  { id: 'instagram', name: 'Instagram' },
  { id: 'whatsapp', name: 'WhatsApp' },
];

export const SocialPracticeList = (props) => (
  <List {...props} sort={{ field: 'createdAt', order: 'DESC' }}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="name" label="ФИО" />
      <TextField source="role" label="Роль" />
      <TextField source="phone" label="Телефон" />
      <FunctionField
        label="Фото"
        render={(record) => {
          const photos = Array.isArray(record.photo)
            ? record.photo
            : record.photo
              ? [record.photo]
              : [];
          if (!photos.length || !photos[0]) return null;
          const src = photos[0].includes('http')
            ? photos[0]
            : `${uploadsConfig}${photos[0]}`;
          return (
            <ImageField
              source="src"
              record={{ src }}
              sx={{
                '& img': {
                  width: '80px !important',
                  height: '80px !important',
                  objectFit: 'cover !important',
                  borderRadius: '8px',
                },
              }}
            />
          );
        }}
      />
      <EditButton label={null} />
      <DeleteButton label={null} />
    </Datagrid>
  </List>
);

const SocialLinksSection = ({ isEdit }) => {
  const record = useRecordContext();
  const formatQr = (value, index) => {
    if (!value || !Array.isArray(value)) {
      const existing = record?.socialLinks?.[index];
      if (existing?.qrImage) {
        const src = existing.qrImage.includes('http')
          ? existing.qrImage
          : `${uploadsConfig}${existing.qrImage}`;
        return [{ src, title: 'QR' }];
      }
      return [];
    }
    return value.map((v) =>
      typeof v === 'string'
        ? { src: v.includes('http') ? v : `${uploadsConfig}${v}`, title: 'QR' }
        : v
    );
  };

  const parseQr = (value, existingPath) => {
    if (!value || !value.length) return [];
    return value.map((file) => {
      if (file.rawFile) return file;
      const path = file.src?.replace(`${uploadsConfig}`, '') || existingPath;
      return path;
    });
  };

  return (
    <>
      {[1, 2, 3].map((i) => (
        <div key={i} style={{ marginBottom: 16, padding: 12, border: '1px solid #eee' }}>
          <SelectInput
            source={`social${i}Type`}
            label={`Соцсеть ${i} — тип`}
            choices={SOCIAL_TYPE_CHOICES}
            defaultValue="telegram"
          />
          <TextInput source={`social${i}Link`} label={`Соцсеть ${i} — ссылка`} fullWidth />
          <ImageInput
            source={`social${i}Qr`}
            label={`Соцсеть ${i} — QR-код`}
            accept="image/*"
            format={
              isEdit
                ? (value) =>
                    formatQr(value, i - 1).map((img) => ({
                      src: img.src || img,
                      title: img.title || 'QR',
                    }))
                : undefined
            }
            parse={
              isEdit
                ? (value) => {
                    if (!value?.length) return [];
                    return value.map((v) =>
                      v.rawFile ? v : (v.src || v).replace(`${uploadsConfig}`, '')
                    );
                  }
                : undefined
            }
          >
            <ImageField source="src" title="title" />
          </ImageInput>
        </div>
      ))}
    </>
  );
};

export const SocialPracticeCreate = (props) => (
  <Create {...props} transform={handleSaveSocialPractice}>
    <SimpleForm>
      <TextInput source="name" label="ФИО" fullWidth />
      <TextInput source="role" label="Роль / сфера деятельности" fullWidth />
      <TextInput source="description" label="Описание" multiline fullWidth />
      <TextInput source="phone" label="Телефон" fullWidth />
      <ImageInput source="photo" label="Фото предпринимателя" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
      <SocialLinksSection isEdit={false} />
    </SimpleForm>
  </Create>
);

const SocialPracticeEditForm = () => {
  const record = useRecordContext();
  const defaultValues =
    record && record.socialLinks
      ? {
          ...record,
          social1Type: record.socialLinks[0]?.type || 'telegram',
          social1Link: record.socialLinks[0]?.link || '',
          social2Type: record.socialLinks[1]?.type || 'telegram',
          social2Link: record.socialLinks[1]?.link || '',
          social3Type: record.socialLinks[2]?.type || 'telegram',
          social3Link: record.socialLinks[2]?.link || '',
        }
      : undefined;

  return (
    <SimpleForm defaultValues={defaultValues}>
      <TextInput source="name" label="ФИО" fullWidth />
      <TextInput source="role" label="Роль / сфера деятельности" fullWidth />
      <TextInput source="description" label="Описание" multiline fullWidth />
      <TextInput source="phone" label="Телефон" fullWidth />
      <ImageInput source="photosRaw" label="Загрузить новое фото" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <ImageInput
        source="photo"
        label="Текущее фото"
        format={(value) =>
          value && value.length
            ? value.map((img) => ({
                src: (img.includes('http') ? img : `${uploadsConfig}${img}`),
                title: 'photo',
              }))
            : []
        }
        parse={(value) =>
          value?.map((v) =>
            v.rawFile ? v.rawFile : (v.src || v).replace(`${uploadsConfig}`, '')
          ) || []
        }
      >
        <ImageField source="src" title="title" />
      </ImageInput>
      <SocialLinksSection isEdit={true} />
    </SimpleForm>
  );
};

export const SocialPracticeEdit = (props) => (
  <Edit {...props} transform={handleSaveWithImagesSocialPractice}>
    <SocialPracticeEditForm />
  </Edit>
);
