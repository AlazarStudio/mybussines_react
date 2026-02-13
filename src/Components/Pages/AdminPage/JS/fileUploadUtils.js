import Cookies from 'js-cookie';
import uploadsConfig from '../../../../uploadsConfig';

const token = Cookies.get('token');

// Функция для загрузки одного файла на сервер
export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('img', file);

  try {
    const response = await fetch(`${uploadsConfig}/uploads`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    return data.filePaths; // Возвращает массив ссылок на загруженные файлы
  } catch (error) {
    console.error('Ошибка при загрузке файлов:', error);
    throw error;
  }
};

// Функция для загрузки всех файлов перед сохранением формы
export const uploadFiles = async (files) => {
  const uploadedFiles = await Promise.all(
    files.map((file) => uploadFile(file.rawFile))
  );
  return uploadedFiles.flat(); // Получаем плоский массив с ссылками на файлы
};
// export const uploadFiles = async (files) => {
//   const uploadedFiles = await Promise.all(
//     files.map((file) => {
//       if (file.rawFile) {
//         return uploadFile(file.rawFile);
//       } else {
//         console.error('Файл не содержит rawFile:', file);
//         throw new Error('Файл не содержит rawFile');
//       }
//     })
//   );
//   return uploadedFiles.flat();
// };

// Функция для обработки сохранения формы
export const handleSave = async (values) => {
  if (values.img && values.img.length > 0) {
    // Загружаем все изображения на сервер
    const uploadedImages = await uploadFiles(values.img);

    // Заменяем файлы ссылками на загруженные изображения
    values.img = uploadedImages;
  }

  return values;
};

// export const handleSave = async (values) => {
//   if (values.img && values.img.length > 0) {
//     // Загружаем файлы через API
//     const uploadedImages = await uploadFiles(values.img);

//     // Заменяем файлы ссылками на сервер
//     values.img = uploadedImages;
//   }

//   // Убедитесь, что возвращаем объект данных
//   return {
//     ...values,
//     img: values.img, // Добавляем пути к изображениям
//   };
// };

// Функция для обновления изображений
export const updateImages = async (existingImages = [], newFiles = []) => {
  // Загружаем новые файлы на сервер
  let uploadedImages = [];
  if (newFiles.length > 0) {
    uploadedImages = await uploadFiles(newFiles);
  }

  // Объединяем старые изображения с новыми и удаляем дубликаты
  const updatedImages = Array.from(
    new Set([...existingImages, ...uploadedImages])
  );

  return updatedImages;
};

// Функция для сохранения формы
export const handleSaveWithImages = async (values) => {
  const existingImages = values.img || []; // Старые изображения
  const newFiles = values.imagesRaw || []; // Новые загруженные файлы

  console.log(values);

  // Обновляем изображения (старые + новые)
  const updatedImages = await updateImages(existingImages, newFiles);

  // Сохраняем значения формы с обновленными изображениями
  values.img = updatedImages;

  // Удаляем временные поля
  delete values.imagesRaw;

  return values;
};

export const handleSaveSocialPractice = async (values) => {
  if (values.photo && values.photo.length > 0) {
    const uploaded = await uploadFiles(values.photo);
    values.photo = uploaded;
  } else {
    values.photo = [];
  }

  const socialLinks = [];
  for (let i = 1; i <= 3; i++) {
    const type = values[`social${i}Type`] || 'telegram';
    const link = values[`social${i}Link`] || '';
    let qrImage = '';
    const qrInput = values[`social${i}Qr`];
    const qrFile = Array.isArray(qrInput) ? qrInput[0] : qrInput;
    if (qrFile) {
      const fileToUpload = qrFile?.rawFile || qrFile;
      if (fileToUpload instanceof File) {
        const uploaded = await uploadFile(fileToUpload);
        qrImage = uploaded?.[0] ?? '';
      } else if (typeof qrFile === 'string') {
        qrImage = qrFile;
      } else if (qrFile.src && !qrFile.src.startsWith('data:')) {
        qrImage = qrFile.src.replace(/^https?:\/\/[^/]+/, '') || qrFile.src;
      }
    }
    socialLinks.push({ type, link, qrImage });
  }
  values.socialLinks = socialLinks;

  for (let i = 1; i <= 3; i++) {
    delete values[`social${i}Type`];
    delete values[`social${i}Link`];
    delete values[`social${i}Qr`];
  }

  return values;
};

export const handleSaveWithImagesSocialPractice = async (values) => {
  const existingPhoto = Array.isArray(values.photo)
    ? values.photo.filter((p) => typeof p === 'string' && p)
    : [];
  const newPhotoFiles = values.photosRaw || [];
  let updatedPhotos = existingPhoto;
  if (newPhotoFiles.length > 0) {
    const uploaded = await uploadFiles(newPhotoFiles);
    updatedPhotos = uploaded;
  }
  values.photo = updatedPhotos.length ? updatedPhotos : [];
  delete values.photosRaw;

  const existingLinks = values.socialLinks || [];
  const socialLinks = [];
  for (let i = 1; i <= 3; i++) {
    const type = values[`social${i}Type`] || (existingLinks[i - 1]?.type || 'telegram');
    const link = values[`social${i}Link`] ?? (existingLinks[i - 1]?.link || '');
    let qrImage = existingLinks[i - 1]?.qrImage || '';
    const qrInput = values[`social${i}Qr`];
    const qrFile = Array.isArray(qrInput) ? qrInput[0] : qrInput;
    if (qrFile) {
      const fileToUpload = qrFile?.rawFile || qrFile;
      if (fileToUpload instanceof File) {
        const uploaded = await uploadFile(fileToUpload);
        qrImage = uploaded?.[0] ?? '';
      } else if (typeof qrFile === 'string') {
        qrImage = qrFile;
      } else if (qrFile.src && !qrFile.src.startsWith('data:')) {
        qrImage = qrFile.src.replace(/^https?:\/\/[^/]+/, '') || qrFile.src;
      }
    }
    socialLinks.push({ type, link, qrImage });
  }
  values.socialLinks = socialLinks;

  for (let i = 1; i <= 3; i++) {
    delete values[`social${i}Type`];
    delete values[`social${i}Link`];
    delete values[`social${i}Qr`];
  }

  return values;
};
