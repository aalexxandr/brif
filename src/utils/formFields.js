import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    companyName: Yup.string()
        .max(100, 'Максимум 100 символов')
        .required('Поле является обязательным'),
    aboutCompany: Yup.string()
        .max(400, 'Максимум 400 символов')
        .required('Поле является обязательным'),
    currentDomain: Yup.string()
        .max(200, 'Максимум 200 символов'),
    fio: Yup.string()
        .max(100, 'Максимум 100 символов')
        .required('Поле является обязательным'),
    email: Yup.string()
        .email('Неправильный Email')
        .max(100, 'Максимум 100 символов')
        .required('Поле является обязательным'),
    phone: Yup.string()
        .max(20, 'Максимум 20 символов'),
    advantages: Yup.string()
        .max(200, 'Максимум 200 символов'),
    interactionScheme: Yup.string()
        .max(200, 'Максимум 200 символов'),
    exampleSites: Yup.string()
        .max(200, 'Максимум 200 символов'),
    tagline: Yup.string()
        .max(50, 'Максимум 50 символов'),
    colors: Yup.string()
        .max(50, 'Максимум 50 символов'),
    badColors: Yup.string()
        .max(50, 'Максимум 50 символов'),
    menuItems: Yup.string()
        .max(100, 'Максимум 100 символов'),
    aboutSlider: Yup.string()
        .max(200, 'Максимум 200 символов')

})

export const fields = [
    {
        code: 'companyName',
        name: 'Название комании',
        required: true
    },
    {
        code: 'aboutCompany',
        name: 'О компании',
        required: true
    },
    {
        code: 'currentDomain',
        name: 'Адрес текущего сайта'
    },
    {
        code: 'fio',
        name: 'ФИО контактного лица',
        required: true
    },
    {
        code: 'email',
        name: 'Почта',
        required: true
    },
    {
        code: 'phone',
        name: 'Номер телефона'
    },
    {
        code: 'advantages',
        name: '5 преимуществ компании'
    },
    {
        code: 'interactionScheme',
        name: 'Схема взаимодействия с клиентом'
    },
    {
        code: 'exampleSites',
        name: 'Примеры сайтов'
    },
    {
        code: 'tagline',
        name: 'Слоган'
    },
    {
        code: 'colors',
        name: 'Общая цветовая гамма'
    },
    {
        code: 'badColors',
        name: 'Нежелательные цвета'
    },
    {
        code: 'menuItems',
        name: 'Пункты меню'
    },
    {
        code: 'aboutSlider',
        name: 'Предпочтения для главного слайдера'
    },
]