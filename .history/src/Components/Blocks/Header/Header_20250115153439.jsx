

ChatGPT 4o

Поделиться
Вы сказали:
export const ProductsCreate = (props) => (
  <Create {...props} transform={handleSave}>
    <SimpleForm>
      <TextInput source="name" label="Название" />
      <NumberInput source="price" label="Цена" />
      <ReferenceInput
        source="categoryId"
        reference="categories"
        label="Категория"
        allowEmpty
      >
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ImageInput source="img" label="Загрузить изображения" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="description" label="Описание" />
      <TextInput source="organization" label="Организация" />
      <TextInput source="tags" label="Теги" />
    </SimpleForm>
  </Create>
);

вот мой компонент создания товара

model Product {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  name         String
  organization String
  description  String
  tags         String[]
  img          String[]
  price        Int?

  categories Category[]
}

вот модель из призмы

export const createNewProduct = asyncHandler(async (req, res) => {
  const { name, price, img, description, categoryIds } = req.body;

  // Обработка изображений
  const images = img.map((image) =>
    typeof image === 'object' ? /uploads/${image.rawFile.path} : image
  );

  if (!name || !price || !categoryIds || categoryIds.length === 0) {
    res.status(400);
    throw new Error('Name, price, and at least one categoryId are required!');
  }

  try {
    // Создание нового продукта с привязкой к категориям
    const product = await prisma.product.create({
      data: {
        name,
        img: images,
        price: parseFloat(price),
        description,
        categories: {
          connect: categoryIds.map((id) => ({ id })), // Привязываем категории по их ID
        },
      },
    });

    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500);
    throw new Error('Failed to create product');
  }
});

вот мой контроллер

опираясь на схему призмы сделай мой код рабочим
ChatGPT сказал:
ChatGPT
Чтобы ваш код стал рабочим, нужно внести изменения в нескольких местах. Приведу полный переработанный код для вашего случая:

Компонент создания продукта (React): Добавим поле для ввода массива категорий (categoryIds) и исправим загрузку изображений.

Схема Prisma: Поле tags и img представляют массивы, поэтому в компоненте необходимо будет учитывать формат данных.

Контроллер: Убедимся, что данные корректно обрабатываются, включая преобразование изображений и массивов.

Product Creation
Объяснение изменений:
React-компонент:

Поле tags автоматически преобразуется в массив через handleSave.
Добавлено поле ReferenceArrayInput для множественного выбора категорий (categoryIds).
Загрузка изображений с поддержкой массива.
Контроллер:

Обработаны массивы img и tags.
Преобразование categoryIds из строки в числа.
Добавлена проверка обязательных данных.
Этот код должен корректно работать при условии, что ваше API настроено для загрузки изображений и формат данных соответствует ожидаемому.





Вы сказали:
fetchJsonWithToken.js:13 
        
        
       POST http://localhost:5000/api/products 500 (Internal Server Error)
fetchJson @ chunk-QYHKV6NQ.js?v=b1c472a3:10660
fetchJsonWithToken @ fetchJsonWithToken.js:13
create @ ra-data-simple-rest.js?v=b1c472a3:142
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:11586
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14527
mutationFn @ chunk-QYHKV6NQ.js?v=b1c472a3:12421
fn @ chunk-QYHKV6NQ.js?v=b1c472a3:7542
run @ chunk-QYHKV6NQ.js?v=b1c472a3:6847
start @ chunk-QYHKV6NQ.js?v=b1c472a3:6889
execute @ chunk-QYHKV6NQ.js?v=b1c472a3:7578
await in execute
mutate @ chunk-QYHKV6NQ.js?v=b1c472a3:8803
create @ chunk-QYHKV6NQ.js?v=b1c472a3:12481
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:24411
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14769
step @ chunk-QYHKV6NQ.js?v=b1c472a3:14663
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14610
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14596
__awaiter9 @ chunk-QYHKV6NQ.js?v=b1c472a3:14578
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14762
Promise.then
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14761
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20073
step @ chunk-QYHKV6NQ.js?v=b1c472a3:20012
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:19959
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:19945
__awaiter12 @ chunk-QYHKV6NQ.js?v=b1c472a3:19927
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20058
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:18660
await in (anonymous)
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20092
callCallback2 @ chunk-EL3PUDHE.js?v=b1c472a3:3674
invokeGuardedCallbackDev @ chunk-EL3PUDHE.js?v=b1c472a3:3699
invokeGuardedCallback @ chunk-EL3PUDHE.js?v=b1c472a3:3733
invokeGuardedCallbackAndCatchFirstError @ chunk-EL3PUDHE.js?v=b1c472a3:3736
executeDispatch @ chunk-EL3PUDHE.js?v=b1c472a3:7016
processDispatchQueueItemsInOrder @ chunk-EL3PUDHE.js?v=b1c472a3:7036
processDispatchQueue @ chunk-EL3PUDHE.js?v=b1c472a3:7045
dispatchEventsForPlugins @ chunk-EL3PUDHE.js?v=b1c472a3:7053
(anonymous) @ chunk-EL3PUDHE.js?v=b1c472a3:7177
batchedUpdates$1 @ chunk-EL3PUDHE.js?v=b1c472a3:18909
batchedUpdates @ chunk-EL3PUDHE.js?v=b1c472a3:3579
dispatchEventForPluginEventSystem @ chunk-EL3PUDHE.js?v=b1c472a3:7176
dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay @ chunk-EL3PUDHE.js?v=b1c472a3:5478
dispatchEvent @ chunk-EL3PUDHE.js?v=b1c472a3:5472
dispatchDiscreteEvent @ chunk-EL3PUDHE.js?v=b1c472a3:5449
Show 42 more frames
Show less
fetchJsonWithToken.js:16 Fetch error: {"status":500,"body":{"message":"Failed to create product","stack":"Error: Failed to create product\n    at file:///home/adamey/alazar/Alazar/alazar_studio_back/app/product/product.controller.js:121:11"},"name":"HttpError2"}
fetchJsonWithToken @ fetchJsonWithToken.js:16
await in fetchJsonWithToken
create @ ra-data-simple-rest.js?v=b1c472a3:142
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:11586
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14527
mutationFn @ chunk-QYHKV6NQ.js?v=b1c472a3:12421
fn @ chunk-QYHKV6NQ.js?v=b1c472a3:7542
run @ chunk-QYHKV6NQ.js?v=b1c472a3:6847
start @ chunk-QYHKV6NQ.js?v=b1c472a3:6889
execute @ chunk-QYHKV6NQ.js?v=b1c472a3:7578
await in execute
mutate @ chunk-QYHKV6NQ.js?v=b1c472a3:8803
create @ chunk-QYHKV6NQ.js?v=b1c472a3:12481
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:24411
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14769
step @ chunk-QYHKV6NQ.js?v=b1c472a3:14663
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14610
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14596
__awaiter9 @ chunk-QYHKV6NQ.js?v=b1c472a3:14578
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14762
Promise.then
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14761
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20073
step @ chunk-QYHKV6NQ.js?v=b1c472a3:20012
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:19959
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:19945
__awaiter12 @ chunk-QYHKV6NQ.js?v=b1c472a3:19927
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20058
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:18660
await in (anonymous)
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20092
callCallback2 @ chunk-EL3PUDHE.js?v=b1c472a3:3674
invokeGuardedCallbackDev @ chunk-EL3PUDHE.js?v=b1c472a3:3699
invokeGuardedCallback @ chunk-EL3PUDHE.js?v=b1c472a3:3733
invokeGuardedCallbackAndCatchFirstError @ chunk-EL3PUDHE.js?v=b1c472a3:3736
executeDispatch @ chunk-EL3PUDHE.js?v=b1c472a3:7016
processDispatchQueueItemsInOrder @ chunk-EL3PUDHE.js?v=b1c472a3:7036
processDispatchQueue @ chunk-EL3PUDHE.js?v=b1c472a3:7045
dispatchEventsForPlugins @ chunk-EL3PUDHE.js?v=b1c472a3:7053
(anonymous) @ chunk-EL3PUDHE.js?v=b1c472a3:7177
batchedUpdates$1 @ chunk-EL3PUDHE.js?v=b1c472a3:18909
batchedUpdates @ chunk-EL3PUDHE.js?v=b1c472a3:3579
dispatchEventForPluginEventSystem @ chunk-EL3PUDHE.js?v=b1c472a3:7176
dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay @ chunk-EL3PUDHE.js?v=b1c472a3:5478
dispatchEvent @ chunk-EL3PUDHE.js?v=b1c472a3:5472
dispatchDiscreteEvent @ chunk-EL3PUDHE.js?v=b1c472a3:5449
Show 41 more frames
Show less
chunk-QYHKV6NQ.js?v=b1c472a3:11603 HttpError2: Failed to create product
    at new HttpError2 (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-QYHKV6NQ.js?v=b1c472a3:10598:21)
    at http://127.0.0.1:5173/node_modules/.vite/deps/chunk-QYHKV6NQ.js?v=b1c472a3:10677:29
    at async fetchJsonWithToken (http://127.0.0.1:5173/src/Components/Pages/AdminPage/JS/fetchJsonWithToken.js:13:20)
ChatGPT сказал:
ChatGPT
Судя по ошибке, проблема возникает на сервере, а точнее в процессе создания продукта. Давайте разберем возможные причины ошибки и предложим решения.

Причины и решения:
Ошибка в данных, передаваемых на сервер Проверьте, какие данные отправляются с фронтенда. Часто проблемы возникают из-за некорректного формата. Для проверки данных можете добавить следующий console.log перед отправкой:

javascript
Копировать код
const handleSave = (data) => {
  console.log('Transformed data:', data);
  return {
    ...data,
    tags: data.tags ? data.tags.split(',').map((tag) => tag.trim()) : [],
  };
};
Убедитесь, что поля categoryIds, tags, и img корректно формируются.

Отсутствие или неверные поля в теле запроса На сервере проверьте, что req.body содержит все необходимые поля. Добавьте в начале контроллера отладочный лог:

javascript
Копировать код
console.log('Request body:', req.body);
Убедитесь, что req.body.categoryIds является массивом, а img — массивом строк или объектов.

Несоответствие типов данных в Prisma Убедитесь, что в модели Prisma поля совпадают с передаваемыми данными:

tags — массив строк (String[]).
img — массив строк (String[]).
categories — связь через connect, где каждый объект имеет числовой ID.
Проверьте, что перед преобразованием в контроллере categoryIds преобразуется в числа:

javascript
Копировать код
categoryIds.map((id) => ({ id: parseInt(id, 10) }))
Неправильная обработка изображений Если изображение загружается через ImageInput, оно может быть представлено объектом. Убедитесь, что img преобразуется корректно:

javascript
Копировать код
const images = (img || []).map((image) =>
  typeof image === 'object' ? `/uploads/${image.rawFile.path}` : image
);
Отсутствие записей в связанных таблицах Если переданный ID категории не существует в базе данных, запрос connect может вызывать ошибку. Проверьте валидность ID категорий перед их передачей в Prisma.
Доработанный контроллер с логами:
Добавим больше отладочных сообщений для отслеживания проблемы:

javascript
Копировать код
export const createNewProduct = asyncHandler(async (req, res) => {
  console.log('Request body:', req.body);

  const { name, price, img, description, categoryIds, organization, tags } = req.body;

  if (!name || !price || !categoryIds || categoryIds.length === 0) {
    res.status(400);
    throw new Error('Name, price, and at least one categoryId are required!');
  }

  try {
    const images = (img || []).map((image) =>
      typeof image === 'object' ? `/uploads/${image.rawFile.path}` : image
    );

    console.log('Processed images:', images);

    const product = await prisma.product.create({
      data: {
        name,
        img: images,
        price: parseFloat(price),
        description,
        organization,
        tags,
        categories: {
          connect: categoryIds.map((id) => ({ id: parseInt(id, 10) })),
        },
      },
    });

    console.log('Product created:', product);
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500);
    throw new Error('Failed to create product');
  }
});
Шаги для отладки:
Убедитесь, что данные корректно отправляются с фронтенда.
Проверьте, что данные на сервере обрабатываются и соответствуют схеме Prisma.
Проверьте, есть ли категории с переданными ID в базе данных.
Добавьте логи, чтобы выявить точную причину ошибки.
Если после этих шагов ошибка не исчезнет, предоставьте результат логов (console.log) из контроллера, чтобы можно было точнее диагностировать проблему.





Вы сказали:
GET /api/categories?filter=%7B%7D&range=%5B0%2C24%5D&sort=%5B%22id%22%2C%22DESC%22%5D 200 3.572 ms - 121
GET /api/categories?filter=%7B%22id%22%3A%5B1%5D%7D 304 12.833 ms - -
Файлы, полученные multer: [
  {
    fieldname: 'img',
    originalname: 'Musa1.png',
    encoding: '7bit',
    mimetype: 'image/png',
    buffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 01 72 00 00 00 e8 08 06 00 00 00 f2 ae 6f 98 00 00 00 09 70 48 59 73 00 00 0b 13 00 00 0b 13 01 ... 75896 more bytes>,
    size: 75946
  }
]
Сохранённые пути: [ '/uploads/1735299892090-Musa1.webp' ]
POST /uploads 200 22.629 ms - 51
Error creating product: PrismaClientValidationError: 
Invalid prisma.product.create() invocation:

{
  data: {
    name: "123",
    img: [
      "/uploads/1735299892090-Musa1.webp"
    ],
    price: 123,
    description: "123",
    organization: "123",
    tags: "1  , 22",
          ~~~~~~~~~
    categories: {
      connect: [
        {
          id: 1
        }
      ]
    }
  }
}

Argument tags: Invalid value provided. Expected ProductCreatetagsInput or String[], provided String.
    at wn (/home/adamey/alazar/Alazar/alazar_studio_back/node_modules/@prisma/client/runtime/library.js:29:1363)
    at $n.handleRequestError (/home/adamey/alazar/Alazar/alazar_studio_back/node_modules/@prisma/client/runtime/library.js:121:6958)
    at $n.handleAndLogRequestError (/home/adamey/alazar/Alazar/alazar_studio_back/node_modules/@prisma/client/runtime/library.js:121:6623)
    at $n.request (/home/adamey/alazar/Alazar/alazar_studio_back/node_modules/@prisma/client/runtime/library.js:121:6307)
    at async l (/home/adamey/alazar/Alazar/alazar_studio_back/node_modules/@prisma/client/runtime/library.js:130:9633)
    at async file:///home/adamey/alazar/Alazar/alazar_studio_back/app/product/product.controller.js:103:21 {
  clientVersion: '5.22.0'
}
POST /api/products 500 2.766 ms - 182
ChatGPT сказал:
ChatGPT
Ошибка возникает из-за несоответствия типа поля tags в вашем запросе. Поле tags в модели Prisma ожидает массив строк (String[]), но в запросе передается строка "1 , 22".

Решение проблемы
Прежде чем отправлять данные в Prisma, нужно преобразовать tags из строки в массив строк. Для этого измените обработку данных в контроллере.

Исправленный контроллер
javascript
Копировать код
export const createNewProduct = asyncHandler(async (req, res) => {
  console.log('Request body:', req.body);

  const { name, price, img, description, categoryIds, organization, tags } = req.body;

  // Проверка обязательных данных
  if (!name || !price || !categoryIds || categoryIds.length === 0) {
    res.status(400);
    throw new Error('Name, price, and at least one categoryId are required!');
  }

  try {
    // Обработка изображений
    const images = (img || []).map((image) =>
      typeof image === 'object' ? `/uploads/${image.rawFile.path}` : image
    );

    console.log('Processed images:', images);

    // Преобразование строки tags в массив строк
    const parsedTags = tags ? tags.split(',').map((tag) => tag.trim()) : [];

    console.log('Parsed tags:', parsedTags);

    // Создание продукта
    const product = await prisma.product.create({
      data: {
        name,
        img: images,
        price: parseFloat(price),
        description,
        organization,
        tags: parsedTags, // Передаем массив строк
        categories: {
          connect: categoryIds.map((id) => ({ id: parseInt(id, 10) })), // Привязываем категории
        },
      },
    });

    console.log('Product created:', product);
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500);
    throw new Error('Failed to create product');
  }
});
Изменения:
Преобразование tags:

Используется tags.split(',').map((tag) => tag.trim()) для разделения строки на массив строк.
Логи:

Добавлены дополнительные console.log для отладки содержимого tags и других данных.
Пример запроса:
Пример корректного тела запроса для тестирования:

json
Копировать код
{
  "name": "123",
  "price": 123,
  "img": ["/uploads/1735299892090-Musa1.webp"],
  "description": "123",
  "organization": "123",
  "tags": "tag1, tag2, tag3",
  "categoryIds": [1]
}
Результат:
После исправления, Prisma должен принять массив строк для поля tags, и продукт будет успешно создан. Если проблема повторится, проверьте, что tags правильно преобразуется в массив перед передачей в prisma.product.create.





Вы сказали:
мне надо чтоб моими тегами были названия категорий
ChatGPT сказал:
ChatGPT
Чтобы ваши теги автоматически заполнялись названиями категорий, связанных с продуктом, вы можете извлечь названия категорий из базы данных перед созданием продукта. Для этого нужно внести изменения в контроллер.

Обновленный контроллер
javascript
Копировать код
export const createNewProduct = asyncHandler(async (req, res) => {
  console.log('Request body:', req.body);

  const { name, price, img, description, categoryIds, organization } = req.body;

  if (!name || !price || !categoryIds || categoryIds.length === 0) {
    res.status(400);
    throw new Error('Name, price, and at least one categoryId are required!');
  }

  try {
    // Получаем названия категорий по их ID
    const categories = await prisma.category.findMany({
      where: { id: { in: categoryIds.map((id) => parseInt(id, 10)) } },
      select: { title: true }, // Только названия категорий
    });

    const tags = categories.map((category) => category.title);

    console.log('Generated tags:', tags);

    // Обработка изображений
    const images = (img || []).map((image) =>
      typeof image === 'object' ? `/uploads/${image.rawFile.path}` : image
    );

    console.log('Processed images:', images);

    // Создаем продукт
    const product = await prisma.product.create({
      data: {
        name,
        img: images,
        price: parseFloat(price),
        description,
        organization,
        tags, // Добавляем теги как названия категорий
        categories: {
          connect: categoryIds.map((id) => ({ id: parseInt(id, 10) })), // Привязываем категории
        },
      },
    });

    console.log('Product created:', product);
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500);
    throw new Error('Failed to create product');
  }
});
Изменения:
Извлечение категорий: Используем метод prisma.category.findMany, чтобы получить названия категорий по их ID.

Формирование тегов: Генерируем массив tags, содержащий названия категорий.

Добавление тегов в продукт: Передаем массив тегов в поле tags при создании продукта.

Пример результата:
Если у вас есть категории с названиями:

ID 1: Electronics
ID 2: Gadgets
И запрос содержит categoryIds: [1, 2], тогда поле tags для продукта будет автоматически заполнено как ["Electronics", "Gadgets"].

Теперь теги продукта будут генерироваться на основе связанных категорий. Это гарантирует, что информация о категориях и тегах будет синхронизирована.





Вы сказали:
import asyncHandler from 'express-async-handler';
import { prisma } from '../prisma.js';

// @desc    Get products with pagination, sorting, and filtering
// @route   GET /api/products
// @access  Private
export const getProducts = asyncHandler(async (req, res) => {
  try {
    const { range, sort, filter } = req.query;

    const rangeStart = range ? JSON.parse(range)[0] : 0;
    const rangeEnd = range ? JSON.parse(range)[1] : 1000;

    const sortField = sort ? JSON.parse(sort)[0] : 'createdAt';
    const sortOrder = sort ? JSON.parse(sort)[1].toLowerCase() : 'desc';

    const filters = filter ? JSON.parse(filter) : {};
    const where = Object.entries(filters).reduce((acc, [field, value]) => {
      // Обработка фильтров
      if (typeof value === 'string') {
        acc[field] = { contains: value, mode: 'insensitive' }; // Для строк
      } else if (Array.isArray(value)) {
        acc[field] = { in: value }; // Для массивов
      } else if (typeof value === 'number') {
        acc[field] = { equals: value }; // Для чисел
      }
      return acc;
    }, {});

    // Подсчёт общего количества продуктов с фильтром
    const totalProducts = await prisma.product.count({ where });

    // Получение продуктов с пагинацией, сортировкой и фильтрацией
    const products = await prisma.product.findMany({
      where,
      skip: rangeStart,
      take: rangeEnd - rangeStart + 1,
      orderBy: { [sortField]: sortOrder },
 
    });

    // Установка заголовка Content-Range для пагинации
    res.set(
      'Content-Range',
      products ${rangeStart}-${Math.min(rangeEnd, totalProducts - 1)}/${totalProducts}
    );

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
export const getProduct = asyncHandler(async (req, res) => {
  const product = await prisma.product.findUnique({
    where: { id: +req.params.id },
    include: {

    },
  });

  if (!product) {
    res.status(404);
    throw new Error('Product not found!');
  }

  res.json(product);
});

// @desc    Create new product
// @route   POST /api/products
// @access  Private
export const createNewProduct = asyncHandler(async (req, res) => {
  console.log('Request body:', req.body);

  const { name, price, img, description, categoryIds, organization } = req.body;

  if (!name || !price || !categoryIds || categoryIds.length === 0) {
    res.status(400);
    throw new Error('Name, price, and at least one categoryId are required!');
  }

  try {
    // Получаем названия категорий по их ID
    const categories = await prisma.category.findMany({
      where: { id: { in: categoryIds.map((id) => parseInt(id, 10)) } },
      select: { title: true }, // Только названия категорий
    });

    const tags = categories.map((category) => category.title);

    console.log('Generated tags:', tags);

    // Обработка изображений
    const images = (img || []).map((image) =>
      typeof image === 'object' ? /uploads/${image.rawFile.path} : image
    );

    console.log('Processed images:', images);

    // Создаем продукт
    const product = await prisma.product.create({
      data: {
        name,
        img: images,
        price: parseFloat(price),
        description,
        organization,
        tags, // Добавляем теги как названия категорий
        categories: {
          connect: categoryIds.map((id) => ({ id: parseInt(id, 10) })), // Привязываем категории
        },
      },
    });

    console.log('Product created:', product);
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500);
    throw new Error('Failed to create product');
  }
});


// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private
export const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, img, categoryIds } = req.body;

  // Формируем объект данных для обновления
  const updateData = {
    ...(name && { name }), // Обновляем имя, если оно передано
    ...(price && { price: parseFloat(price) }), // Преобразуем цену в число
    ...(description && { description }), // Обновляем описание
    ...(img && { img }), // Обновляем изображения
    ...(categoryIds && {
      categories: {
        set: categoryIds.map((id) => ({ id })), // Устанавливаем новые категории, удаляя старые связи
      },
    }),
  };

  try {
    // Обновление продукта в базе данных
    const product = await prisma.product.update({
      where: { id: parseInt(req.params.id, 10) }, // Идентификатор продукта
      data: updateData,
    });

    res.status(200).json(product); // Возвращаем обновленный продукт
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({
      error: 'Failed to update product',
      message: error.message,
    });
  }
});

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private
export const deleteProduct = asyncHandler(async (req, res) => {
  try {
    await prisma.product.delete({
      where: { id: +req.params.id },
    });

    res.json({ message: 'Product deleted!' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res
      .status(500)
      .json({ message: 'Error deleting product', error: error.message });
  }
});

почему категории в товаре не отображются
ChatGPT сказал:
ChatGPT
Категории, связанные с продуктом, не отображаются, вероятно, потому что вы не указали include в запросах, где извлекаете продукты из базы данных. По умолчанию Prisma не включает связанные данные, их нужно явно указывать.

Исправления
Метод getProducts: В запросе findMany необходимо добавить include, чтобы включить связанные категории:

javascript
Копировать код
const products = await prisma.product.findMany({
  where,
  skip: rangeStart,
  take: rangeEnd - rangeStart + 1,
  orderBy: { [sortField]: sortOrder },
  include: {
    categories: true, // Включить связанные категории
  },
});
Метод getProduct: Аналогично, для метода getProduct в запросе findUnique добавьте include:

javascript
Копировать код
const product = await prisma.product.findUnique({
  where: { id: +req.params.id },
  include: {
    categories: true, // Включить связанные категории
  },
});
Полный пример с исправлением
Метод getProducts:
javascript
Копировать код
export const getProducts = asyncHandler(async (req, res) => {
  try {
    const { range, sort, filter } = req.query;

    const rangeStart = range ? JSON.parse(range)[0] : 0;
    const rangeEnd = range ? JSON.parse(range)[1] : 1000;

    const sortField = sort ? JSON.parse(sort)[0] : 'createdAt';
    const sortOrder = sort ? JSON.parse(sort)[1].toLowerCase() : 'desc';

    const filters = filter ? JSON.parse(filter) : {};
    const where = Object.entries(filters).reduce((acc, [field, value]) => {
      if (typeof value === 'string') {
        acc[field] = { contains: value, mode: 'insensitive' };
      } else if (Array.isArray(value)) {
        acc[field] = { in: value };
      } else if (typeof value === 'number') {
        acc[field] = { equals: value };
      }
      return acc;
    }, {});

    const totalProducts = await prisma.product.count({ where });

    const products = await prisma.product.findMany({
      where,
      skip: rangeStart,
      take: rangeEnd - rangeStart + 1,
      orderBy: { [sortField]: sortOrder },
      include: {
        categories: true, // Включаем связанные категории
      },
    });

    res.set(
      'Content-Range',
      `products ${rangeStart}-${Math.min(rangeEnd, totalProducts - 1)}/${totalProducts}`
    );

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});
Метод getProduct:
javascript
Копировать код
export const getProduct = asyncHandler(async (req, res) => {
  const product = await prisma.product.findUnique({
    where: { id: +req.params.id },
    include: {
      categories: true, // Включаем связанные категории
    },
  });

  if (!product) {
    res.status(404);
    throw new Error('Product not found!');
  }

  res.json(product);
});
Проверка результата
После исправлений при запросе продуктов будет возвращаться информация о связанных категориях. Пример JSON-ответа:

json
Копировать код
{
  "id": 1,
  "name": "Product Name",
  "price": 100,
  "categories": [
    {
      "id": 1,
      "title": "Category 1"
    },
    {
      "id": 2,
      "title": "Category 2"
    }
  ]
}
Примечание
Если фронтенд использует React Admin, убедитесь, что поле categories отобразится в таблице или форме. Для этого нужно настроить соответствующее отображение в React Admin (например, через ReferenceArrayField или кастомные компоненты).





Вы сказали:
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
  SelectInput,
  ImageInput,
  ImageField,
  ReferenceArrayInput,
  SelectArrayInput,
} from 'react-admin';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  useGetList,
  ReferenceInput,
} from 'react-admin';
import { Edit } from 'react-admin';
import { handleSave, handleSaveWithImages } from '../JS/fileUploadUtils';
import uploadsConfig from '../../../../uploadsConfig';

// Компонент для выбора категории
const CategorySelectInput = ({ source, label }) => {
  const { data, isLoading, error } = useGetList('categories', {
    pagination: { page: 1, perPage: 100 },
    sort: { field: 'title', order: 'ASC' },
  });

  if (isLoading) {
    return <SelectInput source={source} label={label} choices={[]} disabled />;
  }

  if (error) {
    console.error('Ошибка загрузки категорий:', error);
    return <div>Ошибка загрузки категорий</div>;
  }

  const choices = data.map((category) => ({
    id: category.id,
    name: category.title,
  }));

  return <SelectInput source={source} label={label} choices={choices} />;
};

// Список продуктов
export const ProductsList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="name" label="Название" />
      <TextField source="organization" label="Организация" />
      <TextField source="description" label="Описание" />
      <TextField source="tags" label="Теги" />
      <TextField source="categories" label="Категория" />
      <NumberField source="price" label="Цена" />
      <TextField source="img" label="Изображения" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Создание продукта
// React: компонент ProductsCreate
// import { Create, SimpleForm, TextInput, NumberInput, ReferenceArrayInput, SelectArrayInput, ImageInput, ImageField } from 'react-admin';

export const ProductsCreate = (props) => (
  <Create {...props} transform={handleSave}>
    <SimpleForm>
      <TextInput source="name" label="Название" />
      <NumberInput source="price" label="Цена" />
      <ReferenceArrayInput
        source="categoryIds"
        reference="categories"
        label="Категории"
        allowEmpty
      >
        <SelectArrayInput optionText="title" />
      </ReferenceArrayInput>
      <ImageInput source="img" label="Загрузить изображения" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="description" label="Описание" />
      <TextInput source="organization" label="Организация" />
      {/* <TextInput source="tags" label="Теги (через запятую)" /> */}
    </SimpleForm>
  </Create>
);

// Редактирование продукта
export const ProductsEdit = (props) => (
  <Edit {...props} transform={handleSaveWithImages}>
    <SimpleForm>
      <TextInput source="name" label="Название" />
      <NumberInput source="price" label="Цена" />
      <ReferenceInput
        source="categoryId"
        reference="categories"
        label="Категория"
        allowEmpty
      >
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ImageInput
        source="imagesRaw"
        label="Загрузить новые изображения"
        multiple
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>
      <ImageInput
        source="img"
        label="Старые изображения"
        multiple
        accept="image/*"
        format={(value) =>
          Array.isArray(value)
            ? value.map((image) => ({
                src: image.includes('http') ? image : ${uploadsConfig}${image},
                title: image,
              }))
            : []
        }
        parse={(value) =>
          Array.isArray(value)
            ? value.map((file) =>
                file.rawFile ? file.rawFile : file.src.replace(${uploadsConfig}, '')
              )
            : []
        }
      >
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="description" label="Описание" />
      <TextInput source="organization" label="Организация" />
      {/* <TextInput source="tags" label="Теги" /> */}
    </SimpleForm>
  </Edit>
);

// Список категорий
export const CategoriesList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="title" label="Название" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Создание категории
export const CategoriesCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="Название" />
    </SimpleForm>
  </Create>
);

// Редактирование категории
export const CategoriesEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" label="Название" />
    </SimpleForm>
  </Edit>
);
ChatGPT сказал:
ChatGPT
В предоставленном коде есть несколько проблем и возможностей для улучшения. Основная проблема в отображении связанных категорий в списке продуктов. Поле categories в ProductsList настроено как TextField, которое не отображает массив или связанные данные корректно. Вместо этого нужно использовать ReferenceArrayField.

Исправления и улучшения
Исправление отображения категорий в ProductsList: Используйте ReferenceArrayField для отображения связанных категорий.

jsx
Копировать код
import { ReferenceArrayField, SingleFieldList, ChipField } from 'react-admin';

export const ProductsList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="name" label="Название" />
      <TextField source="organization" label="Организация" />
      <TextField source="description" label="Описание" />
      <ReferenceArrayField source="categories" reference="categories" label="Категории">
        <SingleFieldList>
          <ChipField source="title" />
        </SingleFieldList>
      </ReferenceArrayField>
      <NumberField source="price" label="Цена" />
      <ImageField source="img" label="Изображения" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
Преобразование категорий в ProductsCreate: Для связи продукта с несколькими категориями уже используется ReferenceArrayInput. Это корректно.

Исправление отображения старых и новых изображений в ProductsEdit: В вашем коде есть две секции для работы с изображениями (imagesRaw и img). Убедитесь, что они не конфликтуют и данные преобразуются корректно.

Если одно из полей нужно убрать, оставьте только img.

Форматирование тегов: Если tags требуется отобразить в списке, используйте TextField с обработкой массива:

jsx
Копировать код
<TextField source="tags" label="Теги" format={(tags) => tags?.join(', ')} />
Обработка ошибок загрузки категорий: В компоненте CategorySelectInput улучшите отображение ошибки, чтобы оно не ломало приложение:

jsx
Копировать код
if (error) {
  return <SelectInput source={source} label={label} choices={[]} disabled />;
}
Обновленный ProductsList
jsx
Копировать код
export const ProductsList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="name" label="Название" />
      <TextField source="organization" label="Организация" />
      <TextField source="description" label="Описание" />
      <ReferenceArrayField source="categories" reference="categories" label="Категории">
        <SingleFieldList>
          <ChipField source="title" />
        </SingleFieldList>
      </ReferenceArrayField>
      <NumberField source="price" label="Цена" />
      <ImageField source="img" label="Изображения" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
Итог
После внесения изменений:

Категории будут корректно отображаться в списке продуктов.
Ошибки загрузки категорий обработаны.
Изображения в редактировании отображаются и загружаются корректно.
Теги (tags) форматируются для удобного отображения.




Вы сказали:
fetchJsonWithToken.js:13 
        
        
       POST http://localhost:5000/api/discussions 400 (Bad Request)
fetchJson @ chunk-QYHKV6NQ.js?v=b1c472a3:10660
fetchJsonWithToken @ fetchJsonWithToken.js:13
create @ ra-data-simple-rest.js?v=b1c472a3:142
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:11586
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14527
mutationFn @ chunk-QYHKV6NQ.js?v=b1c472a3:12421
fn @ chunk-QYHKV6NQ.js?v=b1c472a3:7542
run @ chunk-QYHKV6NQ.js?v=b1c472a3:6847
start @ chunk-QYHKV6NQ.js?v=b1c472a3:6889
execute @ chunk-QYHKV6NQ.js?v=b1c472a3:7578
await in execute
mutate @ chunk-QYHKV6NQ.js?v=b1c472a3:8803
create @ chunk-QYHKV6NQ.js?v=b1c472a3:12481
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:24411
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14769
step @ chunk-QYHKV6NQ.js?v=b1c472a3:14663
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14610
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14596
__awaiter9 @ chunk-QYHKV6NQ.js?v=b1c472a3:14578
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14762
Promise.then
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14761
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20073
step @ chunk-QYHKV6NQ.js?v=b1c472a3:20012
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:19959
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:19945
__awaiter12 @ chunk-QYHKV6NQ.js?v=b1c472a3:19927
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20058
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:18660
await in (anonymous)
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20092
callCallback2 @ chunk-EL3PUDHE.js?v=b1c472a3:3674
invokeGuardedCallbackDev @ chunk-EL3PUDHE.js?v=b1c472a3:3699
invokeGuardedCallback @ chunk-EL3PUDHE.js?v=b1c472a3:3733
invokeGuardedCallbackAndCatchFirstError @ chunk-EL3PUDHE.js?v=b1c472a3:3736
executeDispatch @ chunk-EL3PUDHE.js?v=b1c472a3:7016
processDispatchQueueItemsInOrder @ chunk-EL3PUDHE.js?v=b1c472a3:7036
processDispatchQueue @ chunk-EL3PUDHE.js?v=b1c472a3:7045
dispatchEventsForPlugins @ chunk-EL3PUDHE.js?v=b1c472a3:7053
(anonymous) @ chunk-EL3PUDHE.js?v=b1c472a3:7177
batchedUpdates$1 @ chunk-EL3PUDHE.js?v=b1c472a3:18909
batchedUpdates @ chunk-EL3PUDHE.js?v=b1c472a3:3579
dispatchEventForPluginEventSystem @ chunk-EL3PUDHE.js?v=b1c472a3:7176
dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay @ chunk-EL3PUDHE.js?v=b1c472a3:5478
dispatchEvent @ chunk-EL3PUDHE.js?v=b1c472a3:5472
dispatchDiscreteEvent @ chunk-EL3PUDHE.js?v=b1c472a3:5449
Show 42 more frames
Show less
fetchJsonWithToken.js:16 Fetch error: {"status":400,"body":{"error":"Missing name, phone, email, company, budget or message!"},"name":"HttpError2"}
fetchJsonWithToken @ fetchJsonWithToken.js:16
await in fetchJsonWithToken
create @ ra-data-simple-rest.js?v=b1c472a3:142
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:11586
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14527
mutationFn @ chunk-QYHKV6NQ.js?v=b1c472a3:12421
fn @ chunk-QYHKV6NQ.js?v=b1c472a3:7542
run @ chunk-QYHKV6NQ.js?v=b1c472a3:6847
start @ chunk-QYHKV6NQ.js?v=b1c472a3:6889
execute @ chunk-QYHKV6NQ.js?v=b1c472a3:7578
await in execute
mutate @ chunk-QYHKV6NQ.js?v=b1c472a3:8803
create @ chunk-QYHKV6NQ.js?v=b1c472a3:12481
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:24411
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14769
step @ chunk-QYHKV6NQ.js?v=b1c472a3:14663
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14610
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14596
__awaiter9 @ chunk-QYHKV6NQ.js?v=b1c472a3:14578
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14762
Promise.then
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14761
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20073
step @ chunk-QYHKV6NQ.js?v=b1c472a3:20012
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:19959
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:19945
__awaiter12 @ chunk-QYHKV6NQ.js?v=b1c472a3:19927
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20058
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:18660
await in (anonymous)
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20092
callCallback2 @ chunk-EL3PUDHE.js?v=b1c472a3:3674
invokeGuardedCallbackDev @ chunk-EL3PUDHE.js?v=b1c472a3:3699
invokeGuardedCallback @ chunk-EL3PUDHE.js?v=b1c472a3:3733
invokeGuardedCallbackAndCatchFirstError @ chunk-EL3PUDHE.js?v=b1c472a3:3736
executeDispatch @ chunk-EL3PUDHE.js?v=b1c472a3:7016
processDispatchQueueItemsInOrder @ chunk-EL3PUDHE.js?v=b1c472a3:7036
processDispatchQueue @ chunk-EL3PUDHE.js?v=b1c472a3:7045
dispatchEventsForPlugins @ chunk-EL3PUDHE.js?v=b1c472a3:7053
(anonymous) @ chunk-EL3PUDHE.js?v=b1c472a3:7177
batchedUpdates$1 @ chunk-EL3PUDHE.js?v=b1c472a3:18909
batchedUpdates @ chunk-EL3PUDHE.js?v=b1c472a3:3579
dispatchEventForPluginEventSystem @ chunk-EL3PUDHE.js?v=b1c472a3:7176
dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay @ chunk-EL3PUDHE.js?v=b1c472a3:5478
dispatchEvent @ chunk-EL3PUDHE.js?v=b1c472a3:5472
dispatchDiscreteEvent @ chunk-EL3PUDHE.js?v=b1c472a3:5449
Show 41 more frames
Show less
chunk-QYHKV6NQ.js?v=b1c472a3:11603 HttpError2: Bad Request
    at new HttpError2 (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-QYHKV6NQ.js?v=b1c472a3:10598:21)
    at http://127.0.0.1:5173/node_modules/.vite/deps/chunk-QYHKV6NQ.js?v=b1c472a3:10677:29
    at async fetchJsonWithToken (http://127.0.0.1:5173/src/Components/Pages/AdminPage/JS/fetchJsonWithToken.js:13:20)

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
import { handleSave } from '../JS/fileUploadUtils';

export const DiscussionsList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Name" />
      <TextField source="phone" label="Phone" />
      <TextField source="email" label="E-mail" />
      <TextField source="company" label="Company" />
      <TextField source="budget" label="Budget" />
      <TextField source="message" label="Message" />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Создание категории
export const DiscussionsCreate = (props) => (
  <Create {...props} transform={handleSave}>
    <SimpleForm>
      <TextInput source="name" label="Name" />
      <TextInput source="phone" label="Phone" />
      <TextInput source="email" label="E-mail" />
      <TextInput source="company" label="Company" />
      <TextInput source="budget" label="Budget" />
      <TextInput source="message" label="Message" />
    </SimpleForm>
  </Create>
);

// Редактирование категории
export const DiscussionsEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" label="Name" />
      <TextInput source="phone" label="Phone" />
      <TextInput source="email" label="E-mail" />
      <TextInput source="company" label="Company" />
      <TextInput source="budget" label="Budget" />
      <TextInput source="message" label="Message" />
    </SimpleForm>
  </Edit>
);

import asyncHandler from 'express-async-handler';
import { prisma } from '../prisma.js';

// @desc    Get all feedbacks with pagination, sorting, and filtering
// @route   GET /api/feedbacks
// @access  Private
export const getDiscussions = asyncHandler(async (req, res) => {
  try {
    const { range, sort, filter } = req.query;

    // Извлекаем диапазон, сортировку и фильтры
    const rangeStart = range ? JSON.parse(range)[0] : 0;
    const rangeEnd = range ? JSON.parse(range)[1] : 1000; // Конечная позиция для диапазона

    const sortField = sort ? JSON.parse(sort)[0] : 'createdAt';
    const sortOrder = sort ? JSON.parse(sort)[1].toLowerCase() : 'desc';

    const filters = filter ? JSON.parse(filter) : {};

    // Формируем условия фильтрации
    const where = Object.keys(filters).reduce((acc, field) => {
      const value = filters[field];
      if (Array.isArray(value)) {
        acc[field] = { in: value };
      } else if (typeof value === 'string') {
        acc[field] = { contains: value, mode: 'insensitive' };
      } else {
        acc[field] = { equals: value };
      }
      return acc;
    }, {});

    // Получаем количество фидбэков с учетом фильтров
    const totalDiscussions = await prisma.discussion.count({ where });

    // Получаем фидбэки с учетом пагинации
    const discussions = await prisma.discussion.findMany({
      where,
      skip: rangeStart, // Сколько пропустить (начальный индекс)
      take: rangeEnd - rangeStart + 1, // Сколько записей взять
      orderBy: { [sortField]: sortOrder },
    });

    // Устанавливаем заголовок Content-Range
    res.set(
      'Content-Range',
      feedbacks ${rangeStart}-${Math.min(rangeEnd, totalDiscussions - 1)}/${totalDiscussions}
    );

    res.json(discussions); // Отправляем список фидбэков
  } catch (error) {
    console.error('Error fetching discussions:', error);
    res.status(500).json({ message: 'Error fetching discussions', error });
  }
});

// @desc    Get a single feedback
// @route   GET /api/feedbacks/:id
// @access  Private
export const getDiscussion = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const discussion = await prisma.discussion.findUnique({
    where: { id: parseInt(id, 10) },
  });

  if (!discussion) {
    res.status(404).json({ error: 'Discussion not found!' });
    return;
  }

  res.json(discussion);
});

// @desc    Create a new feedback
// @route   POST /api/feedbacks
// @access  Private
export const createDiscussion = asyncHandler(async (req, res) => {
  const { name, phone, email, company, budget, message } = req.body;

  if (!name || !phone || !email || !company || !budget || message) {
    console.error('Missing fields:', {
      name,
      phone,
      email,
      company,
      budget,
      message,
    });
    res.status(400).json({
      error: 'Missing name, phone, email, company, budget or message!',
    });
    return;
  }

  try {
    const discussion = await prisma.discussion.create({
      data: {
        name,
        phone,
        email,
        company,
        budget,
        message,
      },
    });

    res.status(201).json(discussion);
  } catch (error) {
    console.error('Error creating discussion:', error);
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});

// @desc    Update a discussion
// @route   PUT /api/feedbacks/:id
// @access  Private
export const updateDiscussion = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, phone, email, company, budget, message } = req.body;

  try {
    // Проверяем существование обсуждения
    const existingDiscussion = await prisma.discussion.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!existingDiscussion) {
      res.status(404).json({ error: 'Discussion not found!' });
      return;
    }

    // Обновляем обсуждение
    const updatedDiscussion = await prisma.discussion.update({
      where: { id: parseInt(id, 10) },
      data: {
        name: name ?? existingDiscussion.name, // Если поле отсутствует, оставляем старое значение
        phone: phone ?? existingDiscussion.phone,
        email: email ?? existingDiscussion.email,
        company: company ?? existingDiscussion.company,
        budget: budget ?? existingDiscussion.budget,
        message: message ?? existingDiscussion.message,
      },
    });

    res.json(updatedDiscussion); // Возвращаем обновленное обсуждение
  } catch (error) {
    console.error('Error updating discussion:', error);
    res.status(500).json({ message: 'Error updating discussion', error });
  }
});

// @desc    Delete a feedback
// @route   DELETE /api/feedbacks/:id
// @access  Private
export const deleteDiscussion = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const discussion = await prisma.discussion.delete({
      where: {
        id: parseInt(id, 10),
      },
    });

    res.json({ message: 'Discussion deleted!' });
  } catch (error) {
    console.error('Error deleting discussion:', error);
    res.status(404).json({ error: 'Discussion not found!' });
  }
});
ChatGPT сказал:
ChatGPT
Ошибка: 400 Bad Request
Ошибка в вашем коде связана с некорректной проверкой полей при создании нового обсуждения. В методе createDiscussion есть условие проверки, которое пропускает случаи, когда поле message пустое или отсутствует.

Решение
Необходимо исправить условие проверки обязательных полей. В текущем варианте вы проверяете:

javascript
Копировать код
if (!name || !phone || !email || !company || !budget || message) {
  ...
}
Этот код допускает message быть пустым. Правильная проверка должна быть такой:

javascript
Копировать код
if (!name || !phone || !email || !company || !budget || !message) {
  console.error('Missing fields:', {
    name,
    phone,
    email,
    company,
    budget,
    message,
  });
  res.status(400).json({
    error: 'Missing name, phone, email, company, budget, or message!',
  });
  return;
}
Полный исправленный метод createDiscussion
javascript
Копировать код
export const createDiscussion = asyncHandler(async (req, res) => {
  const { name, phone, email, company, budget, message } = req.body;

  // Проверка обязательных полей
  if (!name || !phone || !email || !company || !budget || !message) {
    console.error('Missing fields:', {
      name,
      phone,
      email,
      company,
      budget,
      message,
    });
    res.status(400).json({
      error: 'Missing name, phone, email, company, budget, or message!',
    });
    return;
  }

  try {
    // Создание нового обсуждения
    const discussion = await prisma.discussion.create({
      data: {
        name,
        phone,
        email,
        company,
        budget,
        message,
      },
    });

    res.status(201).json(discussion);
  } catch (error) {
    console.error('Error creating discussion:', error);
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});
Дополнительные рекомендации
Проверка типов и длины данных: Чтобы улучшить проверку данных, можно добавить валидацию, например:

javascript
Копировать код
if (typeof name !== 'string' || name.trim().length === 0) {
  res.status(400).json({ error: 'Invalid or missing name' });
  return;
}
Логирование для отладки: Убедитесь, что req.body правильно формируется на клиенте. Добавьте лог перед проверкой:

javascript
Копировать код
console.log('Request body:', req.body);
Валидация на стороне клиента: Убедитесь, что форма на клиенте (React) выполняет базовую проверку полей перед отправкой данных.

Подключение библиотеки валидации: Для более сложных проверок можно использовать библиотеки вроде yup или zod.

После исправления проверки, сервер должен корректно обрабатывать запросы, и ошибка 400 Bad Request исчезнет, если все обязательные поля отправляются корректно.





Вы сказали:
fetchJsonWithToken.js:13 
        
        
       POST http://localhost:5000/api/discussions 500 (Internal Server Error)
fetchJson @ chunk-QYHKV6NQ.js?v=b1c472a3:10660
fetchJsonWithToken @ fetchJsonWithToken.js:13
create @ ra-data-simple-rest.js?v=b1c472a3:142
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:11586
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14527
mutationFn @ chunk-QYHKV6NQ.js?v=b1c472a3:12421
fn @ chunk-QYHKV6NQ.js?v=b1c472a3:7542
run @ chunk-QYHKV6NQ.js?v=b1c472a3:6847
start @ chunk-QYHKV6NQ.js?v=b1c472a3:6889
execute @ chunk-QYHKV6NQ.js?v=b1c472a3:7578
await in execute
mutate @ chunk-QYHKV6NQ.js?v=b1c472a3:8803
create @ chunk-QYHKV6NQ.js?v=b1c472a3:12481
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:24411
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14769
step @ chunk-QYHKV6NQ.js?v=b1c472a3:14663
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14610
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14596
__awaiter9 @ chunk-QYHKV6NQ.js?v=b1c472a3:14578
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14762
Promise.then
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14761
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20073
step @ chunk-QYHKV6NQ.js?v=b1c472a3:20012
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:19959
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:19945
__awaiter12 @ chunk-QYHKV6NQ.js?v=b1c472a3:19927
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20058
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:18660
await in (anonymous)
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20092
callCallback2 @ chunk-EL3PUDHE.js?v=b1c472a3:3674
invokeGuardedCallbackDev @ chunk-EL3PUDHE.js?v=b1c472a3:3699
invokeGuardedCallback @ chunk-EL3PUDHE.js?v=b1c472a3:3733
invokeGuardedCallbackAndCatchFirstError @ chunk-EL3PUDHE.js?v=b1c472a3:3736
executeDispatch @ chunk-EL3PUDHE.js?v=b1c472a3:7016
processDispatchQueueItemsInOrder @ chunk-EL3PUDHE.js?v=b1c472a3:7036
processDispatchQueue @ chunk-EL3PUDHE.js?v=b1c472a3:7045
dispatchEventsForPlugins @ chunk-EL3PUDHE.js?v=b1c472a3:7053
(anonymous) @ chunk-EL3PUDHE.js?v=b1c472a3:7177
batchedUpdates$1 @ chunk-EL3PUDHE.js?v=b1c472a3:18909
batchedUpdates @ chunk-EL3PUDHE.js?v=b1c472a3:3579
dispatchEventForPluginEventSystem @ chunk-EL3PUDHE.js?v=b1c472a3:7176
dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay @ chunk-EL3PUDHE.js?v=b1c472a3:5478
dispatchEvent @ chunk-EL3PUDHE.js?v=b1c472a3:5472
dispatchDiscreteEvent @ chunk-EL3PUDHE.js?v=b1c472a3:5449
Show 42 more frames
Show less
fetchJsonWithToken.js:16 Fetch error: {"status":500,"body":{"message":"Internal Server Error","error":"\nInvalid prisma.discussion.create() invocation:\n\n{\n  data: {\n    name: \"1\",\n    phone: \"1\",\n    email: \"1@1\",\n    company: \"1\",\n    budget: \"1\",\n            ~~~\n    message: \"1\"\n  }\n}\n\nArgument budget: Invalid value provided. Expected Int, provided String."},"name":"HttpError2"}
fetchJsonWithToken @ fetchJsonWithToken.js:16
await in fetchJsonWithToken
create @ ra-data-simple-rest.js?v=b1c472a3:142
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:11586
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14527
mutationFn @ chunk-QYHKV6NQ.js?v=b1c472a3:12421
fn @ chunk-QYHKV6NQ.js?v=b1c472a3:7542
run @ chunk-QYHKV6NQ.js?v=b1c472a3:6847
start @ chunk-QYHKV6NQ.js?v=b1c472a3:6889
execute @ chunk-QYHKV6NQ.js?v=b1c472a3:7578
await in execute
mutate @ chunk-QYHKV6NQ.js?v=b1c472a3:8803
create @ chunk-QYHKV6NQ.js?v=b1c472a3:12481
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:24411
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14769
step @ chunk-QYHKV6NQ.js?v=b1c472a3:14663
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14610
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14596
__awaiter9 @ chunk-QYHKV6NQ.js?v=b1c472a3:14578
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14762
Promise.then
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:14761
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20073
step @ chunk-QYHKV6NQ.js?v=b1c472a3:20012
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:19959
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:19945
__awaiter12 @ chunk-QYHKV6NQ.js?v=b1c472a3:19927
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20058
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:18660
await in (anonymous)
(anonymous) @ chunk-QYHKV6NQ.js?v=b1c472a3:20092
callCallback2 @ chunk-EL3PUDHE.js?v=b1c472a3:3674
invokeGuardedCallbackDev @ chunk-EL3PUDHE.js?v=b1c472a3:3699
invokeGuardedCallback @ chunk-EL3PUDHE.js?v=b1c472a3:3733
invokeGuardedCallbackAndCatchFirstError @ chunk-EL3PUDHE.js?v=b1c472a3:3736
executeDispatch @ chunk-EL3PUDHE.js?v=b1c472a3:7016
processDispatchQueueItemsInOrder @ chunk-EL3PUDHE.js?v=b1c472a3:7036
processDispatchQueue @ chunk-EL3PUDHE.js?v=b1c472a3:7045
dispatchEventsForPlugins @ chunk-EL3PUDHE.js?v=b1c472a3:7053
(anonymous) @ chunk-EL3PUDHE.js?v=b1c472a3:7177
batchedUpdates$1 @ chunk-EL3PUDHE.js?v=b1c472a3:18909
batchedUpdates @ chunk-EL3PUDHE.js?v=b1c472a3:3579
dispatchEventForPluginEventSystem @ chunk-EL3PUDHE.js?v=b1c472a3:7176
dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay @ chunk-EL3PUDHE.js?v=b1c472a3:5478
dispatchEvent @ chunk-EL3PUDHE.js?v=b1c472a3:5472
dispatchDiscreteEvent @ chunk-EL3PUDHE.js?v=b1c472a3:5449
Show 41 more frames
Show less
chunk-QYHKV6NQ.js?v=b1c472a3:11603 HttpError2: Internal Server Error
    at new HttpError2 (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-QYHKV6NQ.js?v=b1c472a3:10598:21)
    at http://127.0.0.1:5173/node_modules/.vite/deps/chunk-QYHKV6NQ.js?v=b1c472a3:10677:29
    at async fetchJsonWithToken (http://127.0.0.1:5173/src/Components/Pages/AdminPage/JS/fetchJsonWithToken.js:13:20)
ChatGPT сказал:
ChatGPT
Ошибка Argument 'budget': Invalid value provided. Expected Int, provided String возникает, потому что Prisma ожидает, что поле budget будет числом (Int), но получает строку.

Решение
Необходимо преобразовать поле budget в число перед передачей данных в Prisma. Это можно сделать, изменив обработку данных в вашем методе createDiscussion.

Исправленный метод createDiscussion
javascript
Копировать код
export const createDiscussion = asyncHandler(async (req, res) => {
  const { name, phone, email, company, budget, message } = req.body;

  // Проверка обязательных полей
  if (!name || !phone || !email || !company || !budget || !message) {
    console.error('Missing fields:', {
      name,
      phone,
      email,
      company,
      budget,
      message,
    });
    res.status(400).json({
      error: 'Missing name, phone, email, company, budget, or message!',
    });
    return;
  }

  // Преобразование budget в число
  const parsedBudget = parseInt(budget, 10);

  if (isNaN(parsedBudget)) {
    console.error('Invalid budget value:', budget);
    res.status(400).json({ error: 'Budget must be a valid number!' });
    return;
  }

  try {
    // Создание нового обсуждения
    const discussion = await prisma.discussion.create({
      data: {
        name,
        phone,
        email,
        company,
        budget: parsedBudget, // Передаем число
        message,
      },
    });

    res.status(201).json(discussion);
  } catch (error) {
    console.error('Error creating discussion:', error);
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});
Изменения:
Преобразование budget в число: Используется parseInt для преобразования значения budget в число. Если преобразование не удалось, возвращается ошибка с кодом 400.

Дополнительная проверка: Если budget не является числом, возвращается сообщение об ошибке.

Результат
После исправления сервер будет правильно обрабатывать поле budget как число. Если пользователь отправит строку, она будет преобразована, а если она невалидна, сервер вернет ошибку с понятным сообщением.

Пример запроса:

json
Копировать код
{
  "name": "John Doe",
  "phone": "123456789",
  "email": "john.doe@example.com",
  "company": "Company Inc.",
  "budget": "1000", 
  "message": "Looking forward to discussing!"
}
Ответ сервера при успешном запросе:
json
Копировать код
{
  "id": 1,
  "name": "John Doe",
  "phone": "123456789",
  "email": "john.doe@example.com",
  "company": "Company Inc.",
  "budget": 1000,
  "message": "Looking forward to discussing!"
}




Вы сказали:
import React, { useEffect, useState } from 'react';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

import CasesMenu from '../../ui/CasesPage/CasesMenu';
import DrPhone from '../../ui/CasesPage/DrPhone/DrPhone';
import VeloMoto from '../../ui/CasesPage/VeloMoto/VeloMoto';
import Advocate from '../../ui/CasesPage/Advocate/Advocate';
import Attraction from '../../ui/CasesPage/Attraction/Attraction';
import Business from '../../ui/CasesPage/Business/Business';
import { useNavigate, useParams } from 'react-router-dom';
import serverConfig from '../../../serverConfig';
import axios from 'axios';
import ShopPageCard from '../../ui/ShopPage/Card/ShopPageCard';

function CasesPage() {
  const { id } = useParams();
  const categoryId = parseInt(id);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Загрузка категорий
        const categoriesResponse = await fetch(${serverConfig}/categories);
        const categoriesData = await categoriesResponse.json();
        console.log('Loaded categories:', categoriesData); // Логируем полученные данные
        setCategories(categoriesData);

        //Загрузка товаров
        const productsResponse = await fetch(${serverConfig}/products);
        const productsData = await productsResponse.json();
        console.log('Loaded products:', productsData); // Логируем полученные данные
        setProducts(productsData);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const getProductsByCategory = (categoryId) => {
  //   return products.filter((product) => product.categoryId === categoryId);
  // };

  const [selectedCategoryId, setSelectedCategoryId] = useState(categoryId);
 // Состояние для порядка сортировки

  // const productsInCategory = getProductsByCategory(selectedCategoryId);

  // const selectedCategory = categories.find(
  //   (category) => category.id === selectedCategoryId
  // );

  // Сортировка продуктов

  const goToProductPage = (productId) => {
    navigate(/cases/${productId});
  };
  return (
    <CenterBlock>
      <WidthBlock>
        <CasesMenu />
        <DrPhone />
        <VeloMoto />
        <Advocate />
        <Attraction />
        <Business />
        {products.map((el) => (
          <ShopPageCard el={el} key={el.id} />
        ))}
      </WidthBlock>
    </CenterBlock>
  );
}

export default CasesPage;


ShopPageCard.jsx:17 Uncaught TypeError: Cannot read properties of undefined (reading 'map')
    at ShopPageCard (ShopPageCard.jsx:17:25)
    at renderWithHooks (chunk-EL3PUDHE.js?v=b1c472a3:12171:26)
    at mountIndeterminateComponent (chunk-EL3PUDHE.js?v=b1c472a3:14921:21)
    at beginWork (chunk-EL3PUDHE.js?v=b1c472a3:15902:22)
    at HTMLUnknownElement.callCallback2 (chunk-EL3PUDHE.js?v=b1c472a3:3674:22)
    at Object.invokeGuardedCallbackDev (chunk-EL3PUDHE.js?v=b1c472a3:3699:24)
    at invokeGuardedCallback (chunk-EL3PUDHE.js?v=b1c472a3:3733:39)
    at beginWork$1 (chunk-EL3PUDHE.js?v=b1c472a3:19761:15)
    at performUnitOfWork (chunk-EL3PUDHE.js?v=b1c472a3:19194:20)
    at workLoopSync (chunk-EL3PUDHE.js?v=b1c472a3:19133:13)
ShopPageCard @ ShopPageCard.jsx:17
renderWithHooks @ chunk-EL3PUDHE.js?v=b1c472a3:12171
mountIndeterminateComponent @ chunk-EL3PUDHE.js?v=b1c472a3:14921
beginWork @ chunk-EL3PUDHE.js?v=b1c472a3:15902
callCallback2 @ chunk-EL3PUDHE.js?v=b1c472a3:3674
invokeGuardedCallbackDev @ chunk-EL3PUDHE.js?v=b1c472a3:3699
invokeGuardedCallback @ chunk-EL3PUDHE.js?v=b1c472a3:3733
beginWork$1 @ chunk-EL3PUDHE.js?v=b1c472a3:19761
performUnitOfWork @ chunk-EL3PUDHE.js?v=b1c472a3:19194
workLoopSync @ chunk-EL3PUDHE.js?v=b1c472a3:19133
renderRootSync @ chunk-EL3PUDHE.js?v=b1c472a3:19112
performConcurrentWorkOnRoot @ chunk-EL3PUDHE.js?v=b1c472a3:18674
workLoop @ chunk-EL3PUDHE.js?v=b1c472a3:197
flushWork @ chunk-EL3PUDHE.js?v=b1c472a3:176
performWorkUntilDeadline @ chunk-EL3PUDHE.js?v=b1c472a3:384
Show 14 more frames
Show less
ShopPageCard.jsx:17 Uncaught TypeError: Cannot read properties of undefined (reading 'map')
    at ShopPageCard (ShopPageCard.jsx:17:25)
    at renderWithHooks (chunk-EL3PUDHE.js?v=b1c472a3:12171:26)
    at mountIndeterminateComponent (chunk-EL3PUDHE.js?v=b1c472a3:14921:21)
    at beginWork (chunk-EL3PUDHE.js?v=b1c472a3:15902:22)
    at HTMLUnknownElement.callCallback2 (chunk-EL3PUDHE.js?v=b1c472a3:3674:22)
    at Object.invokeGuardedCallbackDev (chunk-EL3PUDHE.js?v=b1c472a3:3699:24)
    at invokeGuardedCallback (chunk-EL3PUDHE.js?v=b1c472a3:3733:39)
    at beginWork$1 (chunk-EL3PUDHE.js?v=b1c472a3:19761:15)
    at performUnitOfWork (chunk-EL3PUDHE.js?v=b1c472a3:19194:20)
    at workLoopSync (chunk-EL3PUDHE.js?v=b1c472a3:19133:13)
ShopPageCard @ ShopPageCard.jsx:17
renderWithHooks @ chunk-EL3PUDHE.js?v=b1c472a3:12171
mountIndeterminateComponent @ chunk-EL3PUDHE.js?v=b1c472a3:14921
beginWork @ chunk-EL3PUDHE.js?v=b1c472a3:15902
callCallback2 @ chunk-EL3PUDHE.js?v=b1c472a3:3674
invokeGuardedCallbackDev @ chunk-EL3PUDHE.js?v=b1c472a3:3699
invokeGuardedCallback @ chunk-EL3PUDHE.js?v=b1c472a3:3733
beginWork$1 @ chunk-EL3PUDHE.js?v=b1c472a3:19761
performUnitOfWork @ chunk-EL3PUDHE.js?v=b1c472a3:19194
workLoopSync @ chunk-EL3PUDHE.js?v=b1c472a3:19133
renderRootSync @ chunk-EL3PUDHE.js?v=b1c472a3:19112
recoverFromConcurrentError @ chunk-EL3PUDHE.js?v=b1c472a3:18732
performConcurrentWorkOnRoot @ chunk-EL3PUDHE.js?v=b1c472a3:18680
workLoop @ chunk-EL3PUDHE.js?v=b1c472a3:197
flushWork @ chunk-EL3PUDHE.js?v=b1c472a3:176
performWorkUntilDeadline @ chunk-EL3PUDHE.js?v=b1c472a3:384
Show 15 more frames
Show less
chunk-EL3PUDHE.js?v=b1c472a3:14036 The above error occurred in the <ShopPageCard> component:

    at ShopPageCard (http://127.0.0.1:5173/src/Components/ui/ShopPage/Card/ShopPageCard.jsx:19:25)
    at div
    at WidthBlock (http://127.0.0.1:5173/src/Components/Standart/WidthBlock/WidthBlock.jsx:19:23)
    at div
    at CenterBlock (http://127.0.0.1:5173/src/Components/Standart/CenterBlock/CenterBlock.jsx:19:24)
    at CasesPage (http://127.0.0.1:5173/src/Components/Pages/CasesPage/CasesPage.jsx?t=1735309014016:33:18)
    at RenderedRoute (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-NWE452DY.js?v=b1c472a3:3537:5)
    at Outlet (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-NWE452DY.js?v=b1c472a3:3908:26)
    at Empty (http://127.0.0.1:5173/src/Components/Standart/Layout/Layout.jsx:21:18)
    at RenderedRoute (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-NWE452DY.js?v=b1c472a3:3537:5)
    at Routes (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-NWE452DY.js?v=b1c472a3:3972:5)
    at App
    at Router (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-NWE452DY.js?v=b1c472a3:3915:15)
    at BrowserRouter (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-NWE452DY.js?v=b1c472a3:4655:5)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
logCapturedError @ chunk-EL3PUDHE.js?v=b1c472a3:14036
update.callback @ chunk-EL3PUDHE.js?v=b1c472a3:14056
callCallback @ chunk-EL3PUDHE.js?v=b1c472a3:10511
commitUpdateQueue @ chunk-EL3PUDHE.js?v=b1c472a3:10528
commitLayoutEffectOnFiber @ chunk-EL3PUDHE.js?v=b1c472a3:17083
commitLayoutMountEffects_complete @ chunk-EL3PUDHE.js?v=b1c472a3:17976
commitLayoutEffects_begin @ chunk-EL3PUDHE.js?v=b1c472a3:17965
commitLayoutEffects @ chunk-EL3PUDHE.js?v=b1c472a3:17916
commitRootImpl @ chunk-EL3PUDHE.js?v=b1c472a3:19349
commitRoot @ chunk-EL3PUDHE.js?v=b1c472a3:19273
finishConcurrentRender @ chunk-EL3PUDHE.js?v=b1c472a3:18756
performConcurrentWorkOnRoot @ chunk-EL3PUDHE.js?v=b1c472a3:18714
workLoop @ chunk-EL3PUDHE.js?v=b1c472a3:197
flushWork @ chunk-EL3PUDHE.js?v=b1c472a3:176
performWorkUntilDeadline @ chunk-EL3PUDHE.js?v=b1c472a3:384
Show 15 more frames
Show less
chunk-EL3PUDHE.js?v=b1c472a3:19409 Uncaught TypeError: Cannot read properties of undefined (reading 'map')
    at ShopPageCard (ShopPageCard.jsx:17:25)
    at renderWithHooks (chunk-EL3PUDHE.js?v=b1c472a3:12171:26)
    at mountIndeterminateComponent (chunk-EL3PUDHE.js?v=b1c472a3:14921:21)
    at beginWork (chunk-EL3PUDHE.js?v=b1c472a3:15902:22)
    at beginWork$1 (chunk-EL3PUDHE.js?v=b1c472a3:19749:22)
    at performUnitOfWork (chunk-EL3PUDHE.js?v=b1c472a3:19194:20)
    at workLoopSync (chunk-EL3PUDHE.js?v=b1c472a3:19133:13)
    at renderRootSync (chunk-EL3PUDHE.js?v=b1c472a3:19112:15)
    at recoverFromConcurrentError (chunk-EL3PUDHE.js?v=b1c472a3:18732:28)
    at performConcurrentWorkOnRoot (chunk-EL3PUDHE.js?v=b1c472a3:18680:30)

что не так
ChatGPT сказал:
ChatGPT
Ошибка Cannot read properties of undefined (reading 'map') указывает, что внутри компонента ShopPageCard происходит попытка использовать метод map на undefined. Это означает, что один из ожидаемых массивов в компоненте не передается или передается как undefined.

Шаги для отладки и исправления
Проверьте, что передается в ShopPageCard: Вы передаете объект el в ShopPageCard:

jsx
Копировать код
{products.map((el) => (
  <ShopPageCard el={el} key={el.id} />
))}
Убедитесь, что products — это массив, и каждый объект в нем содержит необходимые поля. Например, в случае отсутствия данных по продуктам products может быть undefined.

Добавьте защиту от undefined в ShopPageCard: В компоненте ShopPageCard проверьте, какие данные обрабатываются. Например, если внутри компонента вы пытаетесь выполнить .map() на одном из полей, убедитесь, что этот массив существует:

jsx
Копировать код
const ShopPageCard = ({ el }) => {
  if (!el) {
    return <div>Invalid product data</div>;
  }

  const { someArray } = el;

  if (!someArray || !Array.isArray(someArray)) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {someArray.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
};
Проверьте данные перед отображением: В CasesPage добавьте проверку, чтобы products был массивом перед вызовом .map():

jsx
Копировать код
{Array.isArray(products) &&
  products.map((el) => (
    <ShopPageCard el={el} key={el.id} />
  ))}
Логируйте данные: Добавьте console.log перед рендерингом, чтобы убедиться, что данные корректны:

jsx
Копировать код
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const productsResponse = await fetch(`${serverConfig}/products`);
      const productsData = await productsResponse.json();
      console.log('Loaded products:', productsData);
      setProducts(productsData);
    } catch (err) {
      console.error('Ошибка загрузки данных:', err);
      setError('Ошибка загрузки данных');
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);
Резервные значения: Если массив products может быть пустым, отобразите сообщение об отсутствии данных:

jsx
Копировать код
{products.length === 0 ? (
  <div>No products available</div>
) : (
  products.map((el) => <ShopPageCard el={el} key={el.id} />)
)}
Возможное исправление ShopPageCard
Если ошибка происходит из-за использования .map() внутри ShopPageCard, исправьте это:

jsx
Копировать код
const ShopPageCard = ({ el }) => {
  if (!el) {
    return <div>Product data is missing</div>;
  }

  const { someArrayField = [] } = el;

  return (
    <div>
      {someArrayField.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
};
Итог
Проблема, скорее всего, связана с тем, что данные из products или их свойства (например, массивы) отсутствуют или имеют undefined. Добавьте проверки и резервные значения, чтобы компонент мог корректно обрабатывать такие случаи.





Вы сказали:
import React, { useEffect, useState } from 'react';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

import CasesMenu from '../../ui/CasesPage/CasesMenu';
import DrPhone from '../../ui/CasesPage/DrPhone/DrPhone';
import VeloMoto from '../../ui/CasesPage/VeloMoto/VeloMoto';
import Advocate from '../../ui/CasesPage/Advocate/Advocate';
import Attraction from '../../ui/CasesPage/Attraction/Attraction';
import Business from '../../ui/CasesPage/Business/Business';
import { useNavigate, useParams } from 'react-router-dom';
import serverConfig from '../../../serverConfig';
import axios from 'axios';
import ShopPageCard from '../../ui/ShopPage/Card/ShopPageCard';

function CasesPage() {
  const { id } = useParams();
  const categoryId = parseInt(id);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Загрузка категорий
        const categoriesResponse = await fetch(${serverConfig}/categories);
        const categoriesData = await categoriesResponse.json();
        console.log('Loaded categories:', categoriesData); // Логируем полученные данные
        setCategories(categoriesData);

        //Загрузка товаров
        const productsResponse = await fetch(${serverConfig}/products);
        const productsData = await productsResponse.json();
        console.log('Loaded products:', productsData); // Логируем полученные данные
        setProducts(productsData);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const getProductsByCategory = (categoryId) => {
  //   return products.filter((product) => product.categoryId === categoryId);
  // };

  // const [selectedCategoryId, setSelectedCategoryId] = useState(categoryId);
  // Состояние для порядка сортировки

  // const productsInCategory = getProductsByCategory(selectedCategoryId);

  // const selectedCategory = categories.find(
  //   (category) => category.id === selectedCategoryId
  // );

  // Сортировка продуктов

  const goToProductPage = (productId) => {
    navigate(/cases/${productId});
  };
  return (
    <CenterBlock>
      <WidthBlock>
        <CasesMenu />
        <DrPhone />
        <VeloMoto />
        <Advocate />
        <Attraction />
        <Business />
        {products.map((el) => (
          <ShopPageCard el={el} key={el.id} />
        ))}
      </WidthBlock>
    </CenterBlock>
  );
}

export default CasesPage;


import React from 'react';
import classes from './ShopPageCard.module.css';

function ShopPageCard({ el }) {
  return (
    <>
      <div key={el.id} className={classes.card}>
        <img src={el.img} />
        <div className={classes.cardBottom}>
          <div className={classes.cardBottomLeft}>
            <span>{el.title}</span>
            <a href={el.website} target="_blank" rel="noopener noreferrer">
              <span>{el.website}</span>
            </a>
          </div>
          <div className={classes.cardBottomRight}>
            {el.service.map((el, index) => (
              <span key={index}>{el}</span>
            ))}
          </div>
        </div>
      </div>
      <div key={el.id} className={classes.cardMedia}>
        <img src={el.img} />
        <div className={classes.cardMediaBottom}>
          <div className={classes.cardMediaBottomLeft}>
            <span>{el.title}</span>
            <a href={el.website} target="_blank" rel="noopener noreferrer">
              <span>{el.website}</span>
            </a>
          </div>
          <div className={classes.cardMediaBottomRight}>
            {el.service.map((el, index) => (
              <span key={index}>{el}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPageCard;

ChatGPT сказал:
ChatGPT
В предоставленном коде ошибка вызвана тем, что компонент ShopPageCard ожидает, что объект el будет содержать массив service. Однако, если el.service равно undefined или не является массивом, это приводит к ошибке.

Исправление
Добавьте проверку существования service перед вызовом метода .map() в компоненте ShopPageCard.

Обновленный ShopPageCard
javascript
Копировать код
import React from 'react';
import classes from './ShopPageCard.module.css';

function ShopPageCard({ el }) {
  if (!el) {
    return <div>Product data is missing</div>;
  }

  return (
    <>
      <div key={el.id} className={classes.card}>
        <img src={el.img} alt={el.title} />
        <div className={classes.cardBottom}>
          <div className={classes.cardBottomLeft}>
            <span>{el.title}</span>
            <a href={el.website} target="_blank" rel="noopener noreferrer">
              <span>{el.website}</span>
            </a>
          </div>
          <div className={classes.cardBottomRight}>
            {Array.isArray(el.service) &&
              el.service.map((service, index) => (
                <span key={index}>{service}</span>
              ))}
          </div>
        </div>
      </div>
      <div key={el.id} className={classes.cardMedia}>
        <img src={el.img} alt={el.title} />
        <div className={classes.cardMediaBottom}>
          <div className={classes.cardMediaBottomLeft}>
            <span>{el.title}</span>
            <a href={el.website} target="_blank" rel="noopener noreferrer">
              <span>{el.website}</span>
            </a>
          </div>
          <div className={classes.cardMediaBottomRight}>
            {Array.isArray(el.service) &&
              el.service.map((service, index) => (
                <span key={index}>{service}</span>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPageCard;
Изменения:
Проверка el.service: Добавлено условие Array.isArray(el.service) перед вызовом .map(). Это предотвращает вызов метода на undefined или значениях, не являющихся массивом.

Проверка данных el: Если объект el не передан, компонент рендерит сообщение Product data is missing.

Добавлен alt для img: Это улучшает доступность и предотвращает предупреждения в консоли.

Дополнительная проверка в CasesPage
Вместо прямого использования .map(), можно добавить проверку, чтобы убедиться, что products является массивом:

javascript
Копировать код
{Array.isArray(products) &&
  products.map((el) => (
    <ShopPageCard el={el} key={el.id} />
  ))}
Итог
С этими изменениями компонент ShopPageCard станет устойчивым к ошибкам, связанным с отсутствующими или некорректными данными. Если массив service отсутствует или не определен, этот код обработает ситуацию без ошибки.





Вы сказали:
chunk-4WA2GI3B.js?v=c09e5ea0:11869 HttpError2: 
Invalid prisma.product.create() invocation:

{
  data: {
    name: "1232",
    img: [
      "/uploads/1736417847246-Ruslan1.webp"
    ],
    price: 123,
    description: "123",
    characteristics: null,
    categoryId: 1,
    subCategoryId: null,
    businessSolutionId: null,
+   Category: {
+     create: CategoryCreateWithoutProductsInput | CategoryUncheckedCreateWithoutProductsInput,
+     connectOrCreate: CategoryCreateOrConnectWithoutProductsInput,
+     connect: CategoryWhereUniqueInput
+   }
  }
}

Argument Category is missing.
    at new HttpError2 (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-4WA2GI3B.js?v=c09e5ea0:10864:21)
    at http://127.0.0.1:5173/node_modules/.vite/deps/chunk-4WA2GI3B.js?v=c09e5ea0:10943:29
    at async fetchJsonWithToken (http://127.0.0.1:5173/src/Components/Pages/AdminPage/JS/fetchJsonWithToken.js:13:20)

что за ошибка
ChatGPT сказал:
ChatGPT
Ошибка указывает на проблему с полем Category в запросе prisma.product.create. Ваша схема Prisma ожидает, что вы передадите данные для связи с Category через create, connectOrCreate, или connect, но это поле отсутствует в запросе.

Причина ошибки
Скорее всего:

В модели Prisma для Product определено отношение к Category как Category или CategoryId, но вы передаете только categoryId, не устанавливая связь через Category.
Вы пытаетесь создать продукт без указания, как он связан с категорией в базе данных.
Решение
Нужно правильно настроить связь между Product и Category в запросе prisma.product.create.

1. Проверьте модель Prisma
Убедитесь, что ваша модель для Product и Category настроена корректно. Например:

prisma
Копировать код
model Product {
  id                 Int       @id @default(autoincrement())
  name               String
  img                String[]
  price              Int
  description        String
  characteristics    Json?
  categoryId         Int
  subCategoryId      Int?
  businessSolutionId Int?
  Category           Category  @relation(fields: [categoryId], references: [id])
}

model Category {
  id       Int       @id @default(autoincrement())
  title    String
  Products Product[]
}
2. Исправьте запрос prisma.product.create
Если categoryId передается, но Prisma требует Category, используйте connect для связывания существующей категории.

Пример исправленного контроллера:
javascript
Копировать код
const productData = {
  name,
  img: images,
  price: parseInt(price, 10),
  description,
  characteristics: characteristics || null,
  categoryId: categoryId || null,
  subCategoryId: subCategoryId || null,
  businessSolutionId: businessSolutionId || null,
  Category: {
    connect: { id: categoryId }, // Устанавливаем связь с категорией через её ID
  },
};

try {
  const product = await prisma.product.create({
    data: productData,
  });

  res.status(201).json(product);
} catch (error) {
  console.error('Error creating product:', error);
  res.status(500).json({ error: 'Failed to create product', details: error });
}
3. Если вы создаете новую категорию
Если вы хотите создать новую категорию вместе с продуктом, используйте create:

javascript
Копировать код
const productData = {
  name,
  img: images,
  price: parseInt(price, 10),
  description,
  characteristics: characteristics || null,
  subCategoryId: subCategoryId || null,
  businessSolutionId: businessSolutionId || null,
  Category: {
    create: { title: 'New Category Title' }, // Создаем новую категорию
  },
};

try {
  const product = await prisma.product.create({
    data: productData,
  });

  res.status(201).json(product);
} catch (error) {
  console.error('Error creating product:', error);
  res.status(500).json({ error: 'Failed to create product', details: error });
}
4. Убедитесь, что categoryId передается корректно
Добавьте проверку перед вызовом Prisma:

javascript
Копировать код
if (!categoryId) {
  res.status(400).json({ error: 'Category ID is required' });
  return;
}
Итог
Ошибка возникает из-за отсутствия явного указания, как продукт должен быть связан с категорией. Вы можете исправить это, добавив:

connect для связи с существующей категорией.
create для создания новой категории.
Проверку наличия categoryId перед выполнением запроса.




Вы сказали:
chunk-4WA2GI3B.js?v=c09e5ea0:11869 HttpError2: 
Invalid prisma.product.create() invocation:

{
  data: {
    name: "1232",
    img: [
      "/uploads/1736418068701-Ruslan1.webp"
    ],
    price: 123,
    description: "123",
    characteristics: "123",
                     ~~~~~
    categoryId: 1,
    subCategoryId: null,
    businessSolutionId: null
  }
}

Argument characteristics: Invalid value provided. Expected ProductCharacteristicUncheckedCreateNestedManyWithoutProductInput, provided String.
    at new HttpError2 (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-4WA2GI3B.js?v=c09e5ea0:10864:21)
    at http://127.0.0.1:5173/node_modules/.vite/deps/chunk-4WA2GI3B.js?v=c09e5ea0:10943:29
    at async fetchJsonWithToken (http://127.0.0.1:5173/src/Components/Pages/AdminPage/JS/fetchJsonWithToken.js:13:20)
ChatGPT сказал:
ChatGPT
Ошибка указывает на то, что поле characteristics в запросе prisma.product.create() ожидает не строку, а структуру данных, соответствующую типу ProductCharacteristicUncheckedCreateNestedManyWithoutProductInput. Это связано с настройками вашей модели Prisma.

Причина ошибки
В вашей модели Prisma для поля characteristics определена связь One-to-Many или Many-to-Many с другой моделью, и Prisma ожидает объект или массив объектов для создания или связывания этих данных. Однако вы передаете строку ("123"), что вызывает конфликт.

Решение
Проверьте модель Prisma Убедитесь, что структура вашей модели Product корректно настроена. Например:

prisma
Копировать код
model Product {
  id                 Int                      @id @default(autoincrement())
  name               String
  img                String[]
  price              Int
  description        String
  characteristics    ProductCharacteristic[] // Связь с моделью характеристик
  categoryId         Int
  subCategoryId      Int?
  businessSolutionId Int?
}

model ProductCharacteristic {
  id        Int     @id @default(autoincrement())
  name      String
  value     String
  productId Int
  Product   Product @relation(fields: [productId], references: [id])
}
Здесь поле characteristics связано с моделью ProductCharacteristic.

Измените запрос prisma.product.create Если вы хотите добавить характеристики вместе с продуктом, передавайте их в виде массива объектов, используя ключ create.

Пример:

javascript
Копировать код
const productData = {
  name,
  img: images,
  price: parseInt(price, 10),
  description,
  characteristics: {
    create: [
      { name: 'Color', value: 'Red' },
      { name: 'Size', value: 'Large' },
    ],
  },
  categoryId,
  subCategoryId: subCategoryId || null,
  businessSolutionId: businessSolutionId || null,
};

try {
  const product = await prisma.product.create({
    data: productData,
  });

  res.status(201).json(product);
} catch (error) {
  console.error('Error creating product:', error);
  res.status(500).json({ error: 'Failed to create product', details: error });
}
Обработка данных из клиента Убедитесь, что клиент передает characteristics в корректном формате (например, массив объектов). Пример корректного JSON-запроса:

json
Копировать код
{
 




Вы сказали:
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
}

model User {
    id        Int      @id @default(autoincrement())
    createdAt DateTime @default(now()) @map("created_at")
    updatedAt DateTime @updatedAt @map("updated_at")

    email    String     @unique
    login    String     @unique
    name     String
    password String
    role     Role       @default(USER) // Поле для роли пользователя
    Basket   Basket[]
    Order    Order[]
    FeedBack FeedBack[]
}

enum Role {
    USER
    ADMIN
}

model Category {
    id          Int           @id @default(autoincrement())
    title       String
    img         String[]
    products    Product[]
    SubCategory SubCategory[]
    createdAt   DateTime      @default(now()) @map("created_at")
    updatedAt   DateTime      @updatedAt @map("updated_at")
}

model SubCategory {
    id        Int      @id @default(autoincrement())
    createdAt DateTime @default(now()) @map("created_at")
    updatedAt DateTime @updatedAt @map("updated_at")

    title      String
    product    Product[]
    Category   Category  @relation(fields: [categoryId], references: [id])
    categoryId Int
}

model BusinessSolution {
    id        Int      @id @default(autoincrement())
    createdAt DateTime @default(now()) @map("created_at")
    updatedAt DateTime @updatedAt @map("updated_at")

    name         String
    price        Int
    img          String[]
    availability Boolean
    product      Product[]
}

model Product {
    id                 Int               @id @default(autoincrement())
    name               String
    price              Float
    description        String?
    img                String[]
    Category           Category          @relation(fields: [categoryId], references: [id])
    categoryId         Int
    SubCategory        SubCategory?      @relation(fields: [subCategoryId], references: [id])
    subCategoryId      Int?
    BusinessSolution   BusinessSolution? @relation(fields: [businessSolutionId], references: [id])
    businessSolutionId Int?
    BasketItem         BasketItem[]
    OrderItem          OrderItem[]
    createdAt          DateTime          @default(now()) @map("created_at")
    updatedAt          DateTime          @updatedAt @map("updated_at")

    // связь с характеристиками
    characteristics ProductCharacteristic[]
}

model ProductCharacteristic {
    id        Int    @id @default(autoincrement())
    productId Int // Ссылка на продукт
    name      String // Название характеристики (например, "Мощность", "Размер")
    value     String // Значение характеристики (например, "9.5 кВт", "840x840x775 мм")

    product Product @relation(fields: [productId], references: [id])
}

model News {
    id        Int      @id @default(autoincrement())
    createdAt DateTime @default(now()) @map("created_at")
    updatedAt DateTime @updatedAt @map("updated_at")

    title       String
    date        String
    img         String[]
    description String   @db.Text
}

model Basket {
    id          Int          @id @default(autoincrement())
    userId      Int          @unique
    createdAt   DateTime     @default(now())
    updatedAt   DateTime     @updatedAt
    User        User         @relation(fields: [userId], references: [id])
    basketItems BasketItem[]
}

model BasketItem {
    id        Int      @id @default(autoincrement())
    createdAt DateTime @default(now()) @map("created_at")
    updatedAt DateTime @updatedAt @map("updated_at")

    Basket   Basket? @relation(fields: [basketId], references: [id])
    basketId Int?

    productId Int
    product   Product @relation(fields: [productId], references: [id])

    quantity Int
    price    Int
}

// model Order {
//     id        Int      @id @default(autoincrement())
//     createdAt DateTime @default(now()) @map("created_at")
//     updatedAt DateTime @updatedAt @map("updated_at")

//     user   User @relation(fields: [userId], references: [id])
//     userId Int

//     orderItems OrderItem[]
//     adress     String
//     total      Int
//     // status     OrderStatus @default(NEW)
// }

model Order {
    id            Int         @id @default(autoincrement())
    createdAt     DateTime    @default(now()) @map("created_at")
    updatedAt     DateTime    @updatedAt @map("updated_at")
    userId        Int
    user          User        @relation(fields: [userId], references: [id])
    total         Int
    adress        String
    paymentMethod String
    email         String
    phone         String
    name          String
    orderItems    OrderItem[]
}

model OrderItem {
    id        Int      @id @default(autoincrement())
    createdAt DateTime @default(now()) @map("created_at")
    updatedAt DateTime @updatedAt @map("updated_at")

    Order   Order? @relation(fields: [orderId], references: [id])
    orderId Int?

    product   Product @relation(fields: [productId], references: [id])
    productId Int

    quantity Int
    price    Int
}

model FeedBack {
    id        Int      @id @default(autoincrement())
    createdAt DateTime @default(now()) @map("created_at")
    updatedAt DateTime @updatedAt @map("updated_at")
    userId    Int
    User      User     @relation(fields: [userId], references: [id])
    comment   String // исправлено
    phone     String
}

// enum OrderStatus {
//     NEW
//     PAID
//     SHIPPED
//     COMPLETED
//     CANCELED
// }
ChatGPT сказал:
ChatGPT
В вашей схеме Prisma возникшая проблема связана с тем, что при создании продукта characteristics должно быть массивом объектов, а вы передаете строку. Согласно вашей модели, characteristics связано с моделью ProductCharacteristic, что требует создания или связывания связанных объектов.

Исправление
Для работы с characteristics при создании продукта необходимо передавать массив объектов через create.

Пример корректного запроса prisma.product.create
Если вы хотите создать продукт вместе с характеристиками:

javascript
Копировать код
const productData = {
  name: "Sample Product",
  price: 123.45,
  description: "This is a sample product",
  img: ["/uploads/sample-image.jpg"],
  categoryId: 1, // Укажите существующий ID категории
  characteristics: {
    create: [
      { name: "Color", value: "Red" },
      { name: "Size", value: "Large" },
    ],
  },
};

try {
  const product = await prisma.product.create({
    data: productData,
  });
  console.log("Product created:", product);
} catch (error) {
  console.error("Error creating product:", error);
}
Обработка данных на клиенте
Убедитесь, что данные, передаваемые с клиента, содержат массив объектов для characteristics. Например:

json
Копировать код
{
  "name": "Sample Product",
  "price": 123.45,
  "description": "This is a sample product",
  "img": ["/uploads/sample-image.jpg"],
  "categoryId": 1,
  "characteristics": [
    { "name": "Color", "value": "Red" },
    { "name": "Size", "value": "Large" }
  ]
}
На сервере это можно обработать следующим образом:

javascript
Копировать код
const { name, price, description, img, categoryId, characteristics } = req.body;

const productData = {
  name,
  price: parseFloat(price),
  description,
  img,
  categoryId,
  characteristics: {
    create: characteristics.map((char) => ({
      name: char.name,
      value: char.value,
    })),
  },
};

try {
  const product = await prisma.product.create({
    data: productData,
  });
  res.status(201).json(product);
} catch (error) {
  console.error("Error creating product:", error);
  res.status(500).json({ error: "Failed to create product" });
}
Валидация данных
Добавьте проверку данных на сервере перед их использованием:

javascript
Копировать код
if (!Array.isArray(characteristics)) {
  return res.status(400).json({ error: "Characteristics must be an array" });
}
Итог
Поле characteristics должно быть массивом объектов, а не строкой.
Используйте create для передачи массива характеристик.
Убедитесь, что данные на клиенте передаются в правильном формате.




Вы сказали:
export const ProductsCreate = (props) => (
  <Create {...props} transform={handleSave}>
    <SimpleForm>
      <TextInput source="name" label="Название товара" />
      <NumberInput source="price" label="Цена" />
      <ImageInput source="img" label="Загрузить изображения" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="description" label="Описание товара" />
      <TextInput source="characteristics" label="Характеристики" />
      <CategorySelectInput source="categoryId" label="Категория" />
      <SubCategorySelectInput source="subCategoryId" label="Подкатегория" />
      <NumberInput
        source="businessSolutionId"
        label="Готовое решение для бизнеса"
      />
    </SimpleForm>
  </Create>
);
ChatGPT сказал:
ChatGPT
Ваш компонент ProductsCreate имеет проблему с полем characteristics. В вашей модели Prisma это поле связано с другой таблицей (ProductCharacteristic), и оно должно быть массивом объектов, а не строкой. Следовательно, необходимо изменить способ ввода и обработки данных для этого поля.

Исправление
Вместо использования обычного TextInput для ввода характеристик, лучше использовать компонент, позволяющий вводить массив объектов, например, с парами ключ-значение (название и значение характеристики).

Обновленный компонент ProductsCreate
javascript
Копировать код
import React, { useState } from 'react';
import { Create, SimpleForm, TextInput, NumberInput, ImageInput, ImageField } from 'react-admin';
import CategorySelectInput from './CategorySelectInput';
import SubCategorySelectInput from './SubCategorySelectInput';

const CharacteristicsInput = ({ onChange, value = [] }) => {
  const [characteristics, setCharacteristics] = useState(value);

  const handleAddCharacteristic = () => {
    setCharacteristics([...characteristics, { name: '', value: '' }]);
  };

  const handleChange = (index, field, newValue) => {
    const updatedCharacteristics = characteristics.map((char, i) =>
      i === index ? { ...char, [field]: newValue } : char
    );
    setCharacteristics(updatedCharacteristics);
    onChange(updatedCharacteristics);
  };

  const handleRemove = (index) => {
    const updatedCharacteristics = characteristics.filter((_, i) => i !== index);
    setCharacteristics(updatedCharacteristics);
    onChange(updatedCharacteristics);
  };

  return (
    <div>
      {characteristics.map((char, index) => (
        <div key={index} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          <TextInput
            label="Название"
            value={char.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
            style={{ flex: 1 }}
          />
          <TextInput
            label="Значение"
            value={char.value}
            onChange={(e) => handleChange(index, 'value', e.target.value)}
            style={{ flex: 1 }}
          />
          <button type="button" onClick={() => handleRemove(index)}>
            Удалить
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddCharacteristic}>
        Добавить характеристику
      </button>
    </div>
  );
};

export const ProductsCreate = (props) => (
  <Create {...props} transform={handleSave}>
    <SimpleForm>
      <TextInput source="name" label="Название товара" />
      <NumberInput source="price" label="Цена" />
      <ImageInput source="img" label="Загрузить изображения" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="description" label="Описание товара" />
      <CharacteristicsInput source="characteristics" label="Характеристики" />
      <CategorySelectInput source="categoryId" label="Категория" />
      <SubCategorySelectInput source="subCategoryId" label="Подкатегория" />
      <NumberInput
        source="businessSolutionId"
        label="Готовое решение для бизнеса"
      />
    </SimpleForm>
  </Create>
);
Изменения:
Компонент CharacteristicsInput:

Позволяет вводить характеристики в виде массива объектов { name, value }.
Добавляет кнопки для добавления и удаления характеристик.
Обновление состояния:

Использует onChange для обновления данных в родительском компоненте.




Вы сказали:
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
  EditButton,
  DeleteButton,
  SelectInput,
  FileInput,
  FileField,
  SimpleFormIterator,
  ImageInput,
  ImageField,
} from 'react-admin';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  useGetList,
} from 'react-admin';
import { Edit } from 'react-admin';
import { handleSave, handleSaveWithImages } from '../JS/fileUploadUtils';
import uploadsConfig from '../../../../uploadsConfig';

// Компонент для выбора категории
const CategorySelectInput = ({ source, label }) => {
  const { data, isLoading, error } = useGetList('categories', {
    pagination: { page: 1, perPage: 100 },
    sort: { field: 'title', order: 'ASC' },
  });

  if (isLoading) {
    return <SelectInput source={source} label={label} choices={[]} disabled />;
  }

  if (error) {
    console.error('Ошибка загрузки категорий:', error);
    return null;
  }

  const choices = data.map((category) => ({
    id: category.id,
    name: category.title,
  }));

  return <SelectInput source={source} label={label} choices={choices} />;
};

// Компонент для выбора подкатегории
const SubCategorySelectInput = ({ source, label }) => {
  const { data, isLoading, error } = useGetList('subcategories', {
    pagination: { page: 1, perPage: 100 },
    sort: { field: 'title', order: 'ASC' },
  });

  if (isLoading) {
    return <SelectInput source={source} label={label} choices={[]} disabled />;
  }

  if (error) {
    console.error('Ошибка загрузки подкатегорий:', error);
    return null;
  }

  const choices = data.map((subcategory) => ({
    id: subcategory.id,
    name: ${subcategory.title} (Категория: ${
      subcategory.categoryTitle || 'N/A'
    }),
  }));

  return <SelectInput source={source} label={label} choices={choices} />;
};

// Список продуктов
export const ProductsList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="name" label="Название товара" />
      <NumberField source="price" label="Price" />
      <FileField source="img" label="Images" title="Image" />
      <TextField source="categoryId" label="Category ID" />
      <TextField source="subCategoryId" label="Subcategory ID" />
      <TextField source="businessSolutionsId" label="Business Solution ID" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);



// Создание продукта
export const ProductsCreate = (props) => (
  <Create {...props} transform={handleSave}>
    <SimpleForm>
      <TextInput source="name" label="Название товара" />
      <NumberInput source="price" label="Цена" />
      <ImageInput source="img" label="Загрузить изображения" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="description" label="Описание товара" />
      <TextInput source="characteristics" label="Характеристики" />
      <CategorySelectInput source="categoryId" label="Категория" />
      <SubCategorySelectInput source="subCategoryId" label="Подкатегория" />
      <NumberInput
        source="businessSolutionId"
        label="Готовое решение для бизнеса"
      />
    </SimpleForm>
  </Create>
);



// Редактирование продукта
export const ProductsEdit = (props) => (
  <Edit {...props} transform={handleSaveWithImages}>
    <SimpleForm>
      <TextInput source="name" label="Name" />
      <NumberInput source="price" label="Price" />
      <ImageInput 
        source='imagesRaw' 
        label='Загрузить новые изображения' 
        multiple
        accept='image/*' 
      >
        <ImageField source='src' title='title' />
      </ImageInput>
            {/* Поле для отображения старых изображений, если они есть */}
            <ImageInput 
        source='img' 
        label='Старые изображения' 
        multiple 
        accept='image/*' 
        format={value => 
          value && value.length 
            ? value.map(image => ({ 
                src: image.includes('http') 
                  ? image 
                  : ${uploadsConfig}${image}, 
                title: image 
              })) 
            : [] 
        }
        parse={value => 
          value.map(file => { 
            // Если это новый файл (имеет rawFile), вернем только его имя 
            if (file.rawFile) { 
              return file.rawFile;
            } 
            // Если это старое изображение (имеет только src), извлекаем имя файла
            return file.src.replace(${uploadsConfig}, '');
          })
        }
      >
        <ImageField source='src' title='title' />
      </ImageInput>
      <TextInput source="description" label="Description" />
      
      <TextInput source="characteristics" label="Характеристики" />
      <CategorySelectInput source="categoryId" label="Category" />
      <SubCategorySelectInput source="subCategoryId" label="Subcategory" />
    </SimpleForm>
  </Edit>
);
ChatGPT сказал:
ChatGPT
Ваш код выглядит довольно хорошо структурированным, но есть несколько моментов, которые можно улучшить или исправить для корректной работы.

Проблемы и решения
1. Поле characteristics
Поле characteristics ожидает массив объектов (в вашей модели Prisma), но в коде оно представлено как TextInput, что является некорректным. Это может вызвать ошибки при сохранении данных.

Решение: Замените TextInput для characteristics на компонент, который позволяет добавлять массив объектов. Пример реализации:

jsx
Копировать код
import React, { useState } from 'react';
import { TextInput } from 'react-admin';

const CharacteristicsInput = ({ source, value = [], onChange }) => {
  const [characteristics, setCharacteristics] = useState(value);

  const handleAdd = () => {
    const updated = [...characteristics, { name: '', value: '' }];
    setCharacteristics(updated);
    onChange(updated);
  };

  const handleRemove = (index) => {
    const updated = characteristics.filter((_, i) => i !== index);
    setCharacteristics(updated);
    onChange(updated);
  };

  const handleChange = (index, field, newValue) => {
    const updated = characteristics.map((char, i) =>
      i === index ? { ...char, [field]: newValue } : char
    );
    setCharacteristics(updated);
    onChange(updated);
  };

  return (
    <div>
      {characteristics.map((char, index) => (
        <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <TextInput
            label="Название"
            value={char.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
          />
          <TextInput
            label="Значение"
            value={char.value}
            onChange={(e) => handleChange(index, 'value', e.target.value)}
          />
          <button type="button" onClick={() => handleRemove(index)}>Удалить</button>
        </div>
      ))}
      <button type="button" onClick={handleAdd}>Добавить характеристику</button>
    </div>
  );
};

export default CharacteristicsInput;
Использование в ProductsCreate и ProductsEdit:

jsx
Копировать код
<CharacteristicsInput source="characteristics" label="Характеристики" />
2. Изображения в ProductsEdit
Ваш код для работы с изображениями выглядит неплохо, но важно убедиться, что данные правильно обрабатываются на клиенте и сервере. Вот некоторые улучшения:

Проверьте format и parse для корректной работы.
Убедитесь, что удаленные изображения исключаются из списка.
3. Подкатегории
Для SubCategorySelectInput вы добавляете название категории в выборку подкатегорий. Если поле categoryTitle недоступно в API, это может вызвать ошибки.

Решение: Добавьте это поле в выборку на сервере, если оно отсутствует, или уберите из текста в клиенте:

javascript
Копировать код
const choices = data.map((subcategory) => ({
  id: subcategory.id,
  name: subcategory.title, // Удалите (Категория: ...) если поле недоступно
}));
4. Проблема с полем businessSolutionId
Для NumberInput проверьте, используется ли оно как nullable. Если поле может быть пустым, добавьте валидацию:

jsx
Копировать код
<NumberInput
  source="businessSolutionId"
  label="Готовое решение для бизнеса"
  parse={(value) => (value ? parseInt(value, 10) : null)}
/>
Итоговый компонент ProductsCreate
jsx
Копировать код
export const ProductsCreate = (props) => (
  <Create {...props} transform={handleSave}>
    <SimpleForm>
      <TextInput source="name" label="Название товара" />
      <NumberInput source="price" label="Цена" />
      <ImageInput source="img" label="Загрузить изображения" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="description" label="Описание товара" />
      <CharacteristicsInput source="characteristics" label="Характеристики" />
      <CategorySelectInput source="categoryId" label="Категория" />
      <SubCategorySelectInput source="subCategoryId" label="Подкатегория" />
      <NumberInput
        source="businessSolutionId"
        label="Готовое решение для бизнеса"
        parse={(value) => (value ? parseInt(value, 10) : null)}
      />
    </SimpleForm>
  </Create>
);
Итог
Поле characteristics теперь обрабатывает массив объектов.
Исправлена работа с подкатегориями.
Обеспечена корректная обработка изображений.
Добавлена обработка businessSolutionId для nullable значений.
Эти улучшения сделают компонент более устойчивым и функциональным.





Вы сказали:
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './OneProductPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useParams } from 'react-router-dom';
import ProductCard from '../ui/productCard/ProductCard';
import serverConfig from '../../../../serverConfig';
import uploadsConfig from '../../../uploadsConfig';
import { shuffle } from 'lodash';

function OneProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); // Товар по ID
  const [products, setProducts] = useState([]); // Все товары
  const [mainImg, setMainImg] = useState(''); // Изображение товара
  const [mainDescription, setMainDescription] = useState(''); // Здесь будет описание или характеристики
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Получение данных с сервера
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Запрос на один товар
        const productResponse = await axios.get(
          ${serverConfig}/products/${productId}
        );
        const fetchedProduct = productResponse.data;

        // Запрос на все товары
        const allProductsResponse = await axios.get(${serverConfig}/products);
        const allProducts = allProductsResponse.data;

        // Установка состояний
        setProduct(fetchedProduct);
        setProducts(allProducts);

        // Если у товара только одно изображение, показываем его сразу
        if (fetchedProduct.img && fetchedProduct.img.length > 0) {
          setMainImg(
            fetchedProduct.img.length === 1
              ? fetchedProduct.img[0]
              : fetchedProduct.img[1]
          );
        }

        setMainDescription(fetchedProduct.description); // По умолчанию показываем описание
      } catch (err) {
        console.error('Ошибка при загрузке данных:', err);
        setError('Не удалось загрузить данные.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  const changeImg = (imageSrc) => {
    setMainImg(imageSrc); // Переключаем изображение
  };

  const changeDescription = (text) => {
    setMainDescription(text); // Обновляем описание или характеристики
  };

  const displayCharacteristics = (characteristics) => {
    return characteristics.map((el, index) => (
      <li key={index}>
        <strong>{el.name}:</strong> {el.value}
      </li>
    ));
  };

  if (loading) {
    return (
      <CenterBlock>
        <WidthBlock>
          <h1>Загрузка...</h1>
        </WidthBlock>
      </CenterBlock>
    );
  }

  if (error) {
    return (
      <CenterBlock>
        <WidthBlock>
          <h1>{error}</h1>
        </WidthBlock>
      </CenterBlock>
    );
  }

  if (!product) {
    return (
      <CenterBlock>
        <WidthBlock>
          <h1>Продукт не найден</h1>
        </WidthBlock>
      </CenterBlock>
    );
  }

  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.prodName}>
          <span>{product.name}</span>
          <span>Код товара: {product.code}</span>
        </div>
        <div className={classes.container1}>
          <img src={mainImg} alt={product.name} />
          <img src={${uploadsConfig}${product.img[0]}} />
          <div className={classes.container1Characteristics}>
            <p>Характеристики</p>
            <ul>
              {product.characteristics &&
                product.characteristics
                  .filter((el) => el.name !== 'Описание в характеристиках') // Фильтруем поле 'Описание в характеристиках'
                  .map((el, index) => (
                    <li key={index}>
                      <h5>{el.name}:</h5> {el.value}
                    </li>
                  ))}
            </ul>
          </div>
          <div className={classes.container1Summ}>
            <span>Цена без скидки (с НДС)</span>
            <span>{product.price} ₽</span>
            <button className={classes.container1SummButton}>В корзину</button>
          </div>
        </div>
        <div className={classes.twoImg}>
          {product.img &&
            product.img.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={Image ${index + 1}}
                onClick={() => changeImg(img)} // Переключаем на выбранное изображение
              />
            ))}
        </div>
        <div className={classes.descriptionButton}>
          <button
            className={classes.descriptionButtonBut}
            onClick={() => changeDescription(product.description)} // Переключаем на описание
          >
            Описание
          </button>
          <button
            className={classes.descriptionButtonBut}
            onClick={() =>
              changeDescription(
                product.characteristics &&
                  displayCharacteristics(product.characteristics)
              )
            } // Переключаем на характеристики
          >
            Характеристики
          </button>
        </div>
        <div className={classes.descriptionText}>
          <span>{mainDescription}</span>{' '}
          {/* Отображаем текущее описание или характеристики */}
        </div>
        <span className={classes.view}>Смотрели недавно</span>
        <div className={classes.viewedProduct}>
  {shuffleArray(products).slice(0, 4).map((viewedProduct) => (
    <div key={viewedProduct.id} className={classes.viewedProductCard}>
      <ProductCard product={viewedProduct} />
    </div>
  ))}
</div>
        <span className={classes.view}>Похожие товары</span>
        <div className={classes.viewedProduct}>
          {products.slice(0, 4).map((similarProduct) => (
            <div key={similarProduct.id} className={classes.viewedProductCard}>
              <ProductCard product={similarProduct} />
            </div>
          ))}
        </div>
      </WidthBlock>
    </CenterBlock>
  );
}

export default OneProductPage;

вот код

          <img src={mainImg} alt={product.name} />
          <img src={${uploadsConfig}${product.img[0]}} />

надо чтоб показывало первое, если его нет второе
ChatGPT сказал:
ChatGPT
Чтобы отображать первое изображение (mainImg), а если его нет — второе изображение (product.img[0]), можно добавить проверку. В вашем коде это можно сделать следующим образом:

Исправленный код
Замените блок кода:

jsx
Копировать код
<img src={mainImg} alt={product.name} />
<img src={`${uploadsConfig}${product.img[0]}`} />
на:

jsx
Копировать код
<img
  src={mainImg || `${uploadsConfig}${product.img[0]}`}
  alt={product.name}
/>
Объяснение
mainImg || ...:

Если mainImg имеет значение (не пустая строка, не null, не undefined), оно будет использоваться.
Если mainImg отсутствует, будет использоваться второй вариант: ${uploadsConfig}${product.img[0]}.
Универсальность: Этот подход гарантирует, что даже если mainImg не задано, всегда будет отображаться product.img[0] (если оно существует).

Улучшение кода для проверки на наличие product.img
Если вы хотите дополнительно защитить себя от ситуации, когда массив product.img отсутствует или пуст, добавьте проверку:

jsx
Копировать код
<img
  src={
    mainImg ||
    (product.img && product.img[0] ? `${uploadsConfig}${product.img[0]}` : '/placeholder.png')
  }
  alt={product.name}
/>
Здесь:

Если mainImg отсутствует, проверяется наличие product.img и хотя бы одного элемента в массиве.
Если нет изображений, используется запасное изображение /placeholder.png.
Теперь компонент будет корректно обрабатывать ситуации, когда mainImg или product.img отсутствуют.





Вы сказали:
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './OneProductPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useParams } from 'react-router-dom';
import ProductCard from '../ui/productCard/ProductCard';
import serverConfig from '../../../../serverConfig';
import uploadsConfig from '../../../uploadsConfig';
import { shuffle } from 'lodash';

function OneProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); // Товар по ID
  const [products, setProducts] = useState([]); // Все товары
  const [mainImg, setMainImg] = useState(''); // Изображение товара
  const [mainDescription, setMainDescription] = useState(''); // Здесь будет описание или характеристики
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Получение данных с сервера
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Запрос на один товар
        const productResponse = await axios.get(
          ${serverConfig}/products/${productId}
        );
        const fetchedProduct = productResponse.data;

        // Запрос на все товары
        const allProductsResponse = await axios.get(${serverConfig}/products);
        const allProducts = allProductsResponse.data;

        // Установка состояний
        setProduct(fetchedProduct);
        setProducts(allProducts);

        // Если у товара только одно изображение, показываем его сразу
        if (fetchedProduct.img && fetchedProduct.img.length > 0) {
          setMainImg(
            fetchedProduct.img.length === 1
              ? fetchedProduct.img[0]
              : fetchedProduct.img[1]
          );
        }

        setMainDescription(fetchedProduct.description); // По умолчанию показываем описание
      } catch (err) {
        console.error('Ошибка при загрузке данных:', err);
        setError('Не удалось загрузить данные.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  const changeImg = (imageSrc) => {
    setMainImg(imageSrc); // Переключаем изображение
  };

  const changeDescription = (text) => {
    setMainDescription(text); // Обновляем описание или характеристики
  };

  const displayCharacteristics = (characteristics) => {
    return characteristics.map((el, index) => (
      <li key={index}>
        <strong>{el.name}:</strong> {el.value}
      </li>
    ));
  };

  if (loading) {
    return (
      <CenterBlock>
        <WidthBlock>
          <h1>Загрузка...</h1>
        </WidthBlock>
      </CenterBlock>
    );
  }

  if (error) {
    return (
      <CenterBlock>
        <WidthBlock>
          <h1>{error}</h1>
        </WidthBlock>
      </CenterBlock>
    );
  }

  if (!product) {
    return (
      <CenterBlock>
        <WidthBlock>
          <h1>Продукт не найден</h1>
        </WidthBlock>
      </CenterBlock>
    );
  }

  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.prodName}>
          <span>{product.name}</span>
          <span>Код товара: {product.code}</span>
        </div>
        <div className={classes.container1}>
          <img src={mainImg} alt={product.name} />
          <div className={classes.container1Characteristics}>
            <p>Характеристики</p>
            <ul>
              {product.characteristics &&
                product.characteristics
                  .filter((el) => el.name !== 'Описание в характеристиках') // Фильтруем поле 'Описание в характеристиках'
                  .map((el, index) => (
                    <li key={index}>
                      <h5>{el.name}:</h5> {el.value}
                    </li>
                  ))}
            </ul>
          </div>
          <div className={classes.container1Summ}>
            <span>Цена без скидки (с НДС)</span>
            <span>{product.price} ₽</span>
            <button className={classes.container1SummButton}>В корзину</button>
          </div>
        </div>
        <div className={classes.twoImg}>
          {product.img &&
            product.img.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={Image ${index + 1}}
                onClick={() => changeImg(img)} // Переключаем на выбранное изображение
              />
            ))}
        </div>
        <div className={classes.descriptionButton}>
          <button
            className={classes.descriptionButtonBut}
            onClick={() => changeDescription(product.description)} // Переключаем на описание
          >
            Описание
          </button>
          <button
            className={classes.descriptionButtonBut}
            onClick={() =>
              changeDescription(
                product.characteristics &&
                  displayCharacteristics(product.characteristics)
              )
            } // Переключаем на характеристики
          >
            Характеристики
          </button>
        </div>
        <div className={classes.descriptionText}>
          <span>{mainDescription}</span>{' '}
          {/* Отображаем текущее описание или характеристики */}
        </div>
        <span className={classes.view}>Смотрели недавно</span>
        <div className={classes.viewedProduct}>
  {shuffleArray(products).slice(0, 4).map((viewedProduct) => (
    <div key={viewedProduct.id} className={classes.viewedProductCard}>
      <ProductCard product={viewedProduct} />
    </div>
  ))}
</div>
        <span className={classes.view}>Похожие товары</span>
        <div className={classes.viewedProduct}>
          {products.slice(0, 4).map((similarProduct) => (
            <div key={similarProduct.id} className={classes.viewedProductCard}>
              <ProductCard product={similarProduct} />
            </div>
          ))}
        </div>
      </WidthBlock>
    </CenterBlock>
  );
}

export default OneProductPage;

в этом коде показывает изображения из xml файла где они хранятся как ссылки. но когда я добавляю товары через реакт админ там они хранятся как пути к файлам на сервере. как сделать чтоб это вместе работало
ChatGPT сказал:
ChatGPT
Чтобы обрабатывать оба типа изображений (ссылки из XML и пути к файлам на сервере), можно добавить проверку в вашем коде. Если изображение является абсолютной ссылкой (начинается с http:// или https://), то его можно использовать напрямую. Если это относительный путь, необходимо добавить базовый путь к файлам (например, из uploadsConfig).

Решение
Добавить функцию для обработки пути изображения Добавьте функцию, которая определяет, является ли путь абсолютной ссылкой или относительным путем, и возвращает корректный URL.

javascript
Копировать код
const resolveImagePath = (imgPath) => {
  if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
    return imgPath; // Это абсолютная ссылка, возвращаем как есть
  }
  return `${uploadsConfig}${imgPath}`; // Это относительный путь, добавляем базовый путь
};
Использовать resolveImagePath для отображения изображений Обновите код так, чтобы использовать эту функцию при работе с изображениями.

Обновленный Код
Изменение mainImg
Вместо:

jsx
Копировать код
<img src={mainImg} alt={product.name} />
Используйте:

jsx
Копировать код
<img src={resolveImagePath(mainImg)} alt={product.name} />
Обновление галереи изображений
Вместо:

jsx
Копировать код
{product.img &&
  product.img.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Image ${index + 1}`}
      onClick={() => changeImg(img)} // Переключаем на выбранное изображение
    />
  ))}
Используйте:

jsx
Копировать код
{product.img &&
  product.img.map((img, index) => (
    <img
      key={index}
      src={resolveImagePath(img)}
      alt={`Image ${index + 1}`}
      onClick={() => changeImg(resolveImagePath(img))} // Переключаем на выбранное изображение
    />
  ))}
Обновление "Смотрели недавно" и "Похожие товары"
Вместо:

jsx
Копировать код
<img src={mainImg} alt={product.name} />
Используйте:

jsx
Копировать код
<ProductCard product={{ ...viewedProduct, img: resolveImagePath(viewedProduct.img) }} />
Итоговый Код Функции OneProductPage
Вот как будет выглядеть итоговый код с учетом изменений:

javascript
Копировать код
const resolveImagePath = (imgPath) => {
  if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
    return imgPath; // Абсолютная ссылка
  }
  return `${uploadsConfig}${imgPath}`; // Относительный путь
};

// Вставьте эту функцию в компонент `OneProductPage` и используйте ее для всех изображений
Преимущества
Ваш компонент будет корректно работать как с абсолютными ссылками из XML, так и с относительными путями из React Admin.
Код станет универсальным и легко поддерживаемым.




Вы сказали:
дй полный рабочий кад
ChatGPT сказал:
ChatGPT
Вот полный рабочий код компонента OneProductPage, который учитывает абсолютные ссылки на изображения из XML и относительные пути, создаваемые через React Admin:

One Product Page
Теперь код корректно работает как с абсолютными ссылками из XML, так и с относительными путями, создаваемыми React Admin. Если у вас возникнут дополнительные вопросы или потребуется помощь, дайте знать!





Вы сказали:
import React, { useEffect, useState } from 'react';
import classes from './CategoryPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import serverConfig from '../../../../serverConfig';
import axios from 'axios'; // Добавьте импорт axios

const itemsPerPage = 12; // Количество продуктов на странице

function CategoryPage({ children, ...props }) {
  const { id } = useParams();
  const categoryId = parseInt(id);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Загрузка категорий
        const categoriesResponse = await fetch(${serverConfig}/categories);
        const categoriesData = await categoriesResponse.json();
        console.log('Loaded categories:', categoriesData); // Логируем полученные данные
        setCategories(categoriesData);

        //Загрузка товаров
        const productsResponse = await fetch(${serverConfig}/products);
        const productsData = await productsResponse.json();
        console.log('Loaded products:', productsData); // Логируем полученные данные
        setProducts(productsData);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getProductsByCategory = (categoryId) => {
    return products.filter((product) => product.categoryId === categoryId);
  };

  const [selectedCategoryId, setSelectedCategoryId] = useState(categoryId);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOrder, setSortOrder] = useState('asc'); // Состояние для порядка сортировки

  const productsInCategory = getProductsByCategory(selectedCategoryId);

  const selectedCategory = categories.find(
    (category) => category.id === selectedCategoryId
  );

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleCategoryClick = (id) => {
    setSelectedCategoryId(id);
    setCurrentPage(0);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    setCurrentPage(0); // Сбрасываем страницу при изменении сортировки
  };

  const offset = currentPage * itemsPerPage;

  // Сортировка продуктов
  const sortedProducts = [...productsInCategory].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price; // По возрастанию цены
    } else {
      return b.price - a.price; // По убыванию цены
    }
  });

  const currentProducts = sortedProducts.slice(offset, offset + itemsPerPage);

  const addToCart = async (product) => {
    try {
      const token = document.cookie
        .split('; ')
        .find((cookie) => cookie.startsWith('authToken='))
        ?.split('=')[1];

      if (!token) {
        console.error('Токен не найден в куки');
        navigate('/login');
        return;
      }

      const response = await axios.post(
        ${serverConfig}/cart,
        { productId: product.id, quantity: 1 },
        {
          headers: {
            Authorization: Bearer ${token},
          },
          withCredentials: true,
        }
      );

      console.log('Товар успешно добавлен в корзину:', response.data);
    } catch (error) {
      if (error.response?.status === 401) {
        console.error('Пользователь не авторизован');
        navigate('/login');
      } else {
        console.error(
          'Ошибка при добавлении товара в корзину:',
          error.response?.data?.message || error.message
        );
      }
    }
  };

  const goToProductPage = (productId) => {
    navigate(/product/${productId});
  };

  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.categoryName}>
          <span>
            {selectedCategory ? selectedCategory.title : 'Категория не найдена'}
          </span>
        </div>
        <div className={classes.container}>
          <div className={classes.leftBlock}>
            <span className={classes.leftBlockName}>Каталог</span>
            {categories.map((category) => (
              <div
                key={category.id}
                className={classes.leftBlockCategory}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span>{category.title}</span>
              </div>
            ))}
          </div>
          <div className={classes.rightBlock}>
            <div className={classes.rightBlockFilter}>
              <button onClick={() => handleSortChange('asc')}>
                По возрастанию цены
              </button>
              <button onClick={() => handleSortChange('desc')}>
                По убыванию цены
              </button>
            </div>
            <div className={classes.rightBlockProducts}>
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className={classes.container2Card}
                  
                >
                  <img src={product.img[0]} alt={product.name}  onClick={() => goToProductPage(product.id)}/>
                  <div className={classes.container2CardSpan} onClick={() => goToProductPage(product.id)}>
                    <span className={classes.productName}>
                      {product.name}
                    </span>
                    <span>{product.price} ₽</span>
                  </div>
                  <button onClick={() => addToCart(product)}>В корзину</button>
                </div>
              ))}
            </div>
            <ReactPaginate
              previousLabel={<span className={classes.arrow}>← Предыдущая</span>}
              nextLabel={<span className={classes.arrow}>Следующая →</span>}
              breakLabel={'...'}
              pageCount={Math.ceil(sortedProducts.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={classes.pagination}
              activeClassName={classes.active}
              previousClassName={classes.previous}
              nextClassName={classes.next}
              pageClassName={classes.page}
            />
          </div>
        </div>
      </WidthBlock>
    </CenterBlock>
  );
}

export default CategoryPage;

тут тоже
ChatGPT сказал:
ChatGPT
Category Page
Код обновлен для работы с категориями и продуктами, обеспечивая корректное отображение данных, сортировку и пагинацию. Если у вас возникнут дополнительные вопросы или потребуется помощь с интеграцией, дайте знать!





Вы сказали:
import React, { useEffect, useState } from 'react';
import classes from './CategoryPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import serverConfig from '../../../../serverConfig';
import axios from 'axios'; // Добавьте импорт axios

const itemsPerPage = 12; // Количество продуктов на странице

function CategoryPage({ children, ...props }) {
  const { id } = useParams();
  const categoryId = parseInt(id);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Загрузка категорий
        const categoriesResponse = await fetch(${serverConfig}/categories);
        const categoriesData = await categoriesResponse.json();
        console.log('Loaded categories:', categoriesData); // Логируем полученные данные
        setCategories(categoriesData);

        //Загрузка товаров
        const productsResponse = await fetch(${serverConfig}/products);
        const productsData = await productsResponse.json();
        console.log('Loaded products:', productsData); // Логируем полученные данные
        setProducts(productsData);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getProductsByCategory = (categoryId) => {
    return products.filter((product) => product.categoryId === categoryId);
  };

  const [selectedCategoryId, setSelectedCategoryId] = useState(categoryId);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOrder, setSortOrder] = useState('asc'); // Состояние для порядка сортировки

  const productsInCategory = getProductsByCategory(selectedCategoryId);

  const selectedCategory = categories.find(
    (category) => category.id === selectedCategoryId
  );

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleCategoryClick = (id) => {
    setSelectedCategoryId(id);
    setCurrentPage(0);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    setCurrentPage(0); // Сбрасываем страницу при изменении сортировки
  };

  const offset = currentPage * itemsPerPage;

  // Сортировка продуктов
  const sortedProducts = [...productsInCategory].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price; // По возрастанию цены
    } else {
      return b.price - a.price; // По убыванию цены
    }
  });

  const currentProducts = sortedProducts.slice(offset, offset + itemsPerPage);

  const addToCart = async (product) => {
    try {
      const token = document.cookie
        .split('; ')
        .find((cookie) => cookie.startsWith('authToken='))
        ?.split('=')[1];

      if (!token) {
        console.error('Токен не найден в куки');
        navigate('/login');
        return;
      }

      const response = await axios.post(
        ${serverConfig}/cart,
        { productId: product.id, quantity: 1 },
        {
          headers: {
            Authorization: Bearer ${token},
          },
          withCredentials: true,
        }
      );

      console.log('Товар успешно добавлен в корзину:', response.data);
    } catch (error) {
      if (error.response?.status === 401) {
        console.error('Пользователь не авторизован');
        navigate('/login');
      } else {
        console.error(
          'Ошибка при добавлении товара в корзину:',
          error.response?.data?.message || error.message
        );
      }
    }
  };

  const goToProductPage = (productId) => {
    navigate(/product/${productId});
  };

  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.categoryName}>
          <span>
            {selectedCategory ? selectedCategory.title : 'Категория не найдена'}
          </span>
        </div>
        <div className={classes.container}>
          <div className={classes.leftBlock}>
            <span className={classes.leftBlockName}>Каталог</span>
            {categories.map((category) => (
              <div
                key={category.id}
                className={classes.leftBlockCategory}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span>{category.title}</span>
              </div>
            ))}
          </div>
          <div className={classes.rightBlock}>
            <div className={classes.rightBlockFilter}>
              <button onClick={() => handleSortChange('asc')}>
                По возрастанию цены
              </button>
              <button onClick={() => handleSortChange('desc')}>
                По убыванию цены
              </button>
            </div>
            <div className={classes.rightBlockProducts}>
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className={classes.container2Card}
                  
                >
                  <img src={product.img[0]} alt={product.name}  onClick={() => goToProductPage(product.id)}/>
                  <div className={classes.container2CardSpan} onClick={() => goToProductPage(product.id)}>
                    <span className={classes.productName}>
                      {product.name}
                    </span>
                    <span>{product.price} ₽</span>
                  </div>
                  <button onClick={() => addToCart(product)}>В корзину</button>
                </div>
              ))}
            </div>
            <ReactPaginate
              previousLabel={<span className={classes.arrow}>← Предыдущая</span>}
              nextLabel={<span className={classes.arrow}>Следующая →</span>}
              breakLabel={'...'}
              pageCount={Math.ceil(sortedProducts.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={classes.pagination}
              activeClassName={classes.active}
              previousClassName={classes.previous}
              nextClassName={classes.next}
              pageClassName={classes.page}
            />
          </div>
        </div>
      </WidthBlock>
    </CenterBlock>
  );
}

export default CategoryPage;

тут проблема в том что изображение идет из xml , а когда товар добавлен через реакт админ его изображение не показывается
ChatGPT сказал:
ChatGPT
Отредактировал Category Page
Я обновил код, добавив обработку путей изображений для работы как с локальными путями, так и с внешними ссылками. Если изображение отсутствует, используется изображение по умолчанию. Дайте знать, если потребуется помощь с тестированием или другими доработками!





Вы сказали:
import React, { useEffect, useRef, useState } from 'react';
import classes from './Header.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Header({ children, ...props }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Закрытие меню при клике вне
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]);
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerLeft}>
              <img
                src="/images/logo.png"
                className={classes.containerLeftLogo}
              />
              <button>
                <img src="/images/burger.png" />
                Меню
              </button>
            </div>
            
            <div className={classes.containerRight}>
              <img
                src="/images/ok.png"
                onClick={() =>
                  window.open('https://ok.ru/group/70000000007896', '_blank')
                }
              />
              <img
                src="/images/tg.png"
                onClick={() =>
                  window.open('https://t.me/moibiz_kchr', '_blank')
                }
              />
              <img
                src="/images/vk.png"
                onClick={() =>
                  window.open('https://vk.com/moibiz_kchr', '_blank')
                }
              />
              <span>Горячая линия 8(800)201-32-99</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Header;

мне надо чтоб при нажатии на кнопу меню появлялась модалка с навигацией по сайту через Link

ChatGPT сказал:
ChatGPT
Вот обновленный код для компонента Header, в котором при нажатии на кнопку меню отображается модальное окно с навигацией по сайту. Для навигации используется компонент Link из react-router-dom:

Header With Modal Nav

Вместо этого ответить в чате






ChatGPT может допускать ошибки. Рекомендуем проверять важную информацию.
?
ChatGPT все еще генерирует ответ…

Header With Modal Nav



1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Header({ children, ...props }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Закрытие меню при клике вне
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerLeft}>
              <img
                src="/images/logo.png"
                className={classes.containerLeftLogo}
                alt="Logo"
              />
              <button onClick={toggleMenu} className={classes.menuButton}>
                <img src="/images/burger.png" alt="Menu" />
                Меню
              </button>
            </div>

            <div className={classes.containerRight}>
              <img
                src="/images/ok.png"
                alt="OK"
                onClick={() =>
                  window.open('https://ok.ru/group/70000000007896', '_blank')
                }
              />
              <img
                src="/images/tg.png"
                alt="Telegram"
                onClick={() =>
                  window.open('https://t.me/moibiz_kchr', '_blank')
                }
              />
              <img
                src="/images/vk.png"
                alt="VK"
                onClick={() =>
                  window.open('https://vk.com/moibiz_kchr', '_blank')
                }
              />
              <span>Горячая линия 8(800)201-32-99</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>

      {isMenuOpen && (
        <div className={classes.modalOverlay}>
          <div className={classes.modal} ref={menuRef}>
            <button className={classes.closeButton} onClick={toggleMenu}>
              ×
            </button>
            <nav className={classes.modalNav}>
              <ul>
                <li>
                  <Link to="/" onClick={toggleMenu}>
                    Главная
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={toggleMenu}>
                    О нас
                  </Link>
                </li>
                <li>
                  <Link to="/services" onClick={toggleMenu}>
                    Услуги
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={toggleMenu}>
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
