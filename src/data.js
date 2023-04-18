export let dataHomeChart = [
    { "name": 'فروردین', "تومان": 4200000 },
    { "name": 'اردیبهشت', "تومان": 8500000 },
    { "name": 'خرداد', "تومان": 900000 },
    { "name": 'تیر', "تومان": 2300000 },
    { "name": 'مرداد', "تومان": 5100000 },
    { "name": 'شهریور', "تومان": 900000 },
    { "name": 'مهر', "تومان": 2100000 },
    { "name": 'آبان', "تومان": 5300000 },
    { "name": 'آذر', "تومان": 3400000 },
    { "name": 'دی', "تومان": 7300000 },
    { "name": 'بهمن', "تومان": 800000 },
    { "name": 'اسفند', "تومان": 6500000 },
]

export let LastNewUser = [
    { img: '/image/per1.jfif', name: 'ایلان ماسک', job: 'web developer' },
    { img: '/image/per6.jfif', name: 'علی حاجی صوفه', job: 'php developer' },
    { img: '/image/per7.jpg', name: 'بیتا گل عنبری', job: 'pyton developer' },
    { img: '/image/per4.jfif', name: 'علی شاماری', job: 'js developer' },
    { img: '/image/per5.jfif', name: 'نشمین عزیزی', job: 'react developer' },
    { img: '/image/per2.jpg', name: 'آرمین ولیزاده', job: 'php developer' },

]
export let LastTransactionDate = [
    { img: '/image/per1.jfif', id: 1, customer: 'ایلان ماسک', date: "فروردین 1402", amount: "۲,۴۷۵,۰۰۰", status: 'Approved', statusName: 'انجام شده' },
    { img: '/image/per2.jpg', id: 2, customer: 'مسعود محمد غریب', date: "فروردین 1402", amount: "۷۵۰,۰۰۰", status: 'Declined', statusName: 'لغو شده' },
    { img: '/image/per7.jpg', id: 3, customer: 'مهسا مرادی', date: "فروردین 1402", amount: "۹۹۰,۰۰۰", status: 'Pending', statusName: 'درحال انتضار' },
    { img: '/image/per4.jfif', id: 4, customer: ' عباس قاضی زاده', date: 'اسفند 1401', amount: "۲,۵۰۰,۰۰۰", status: 'Approved', statusName: 'انجام شده' },
    { img: '/image/per5.jfif', id: 5, customer: 'شنیان برزگر', date: ' اسفند 1401', amount: "۲,۲۸۱,۶۰۰", status: 'Declined', statusName: 'لغو شده' },
    { img: '/image/per6.jfif', id: 6, customer: 'حسام پسندی', date: ' اسفند 1401', amount: "۲,۲۰۰,۰۰۰ ", status: 'Approved', statusName: 'انجام شده' },
]
export let AllUsers = [
    {
        id: 1,
        userName: 'دانا حسینی',
        email: 'Dana@gmail.com',
        status: 'فعال',
        transeAction: "۲,۴۷۵,۰۰۰",
        avatar: '/image/dana.jpg'
    },
    {
        id: 2,
        userName: 'ایلان ماسک',
        email: 'elan@gmail.com',
        status: "غیر فعال",
        transeAction: "۷۵,۰۰۰,۰۰۰",
        avatar: '/image/per1.jfif'
    },
    {
        id: 3,
        userName: ' علی احمدی',
        email: 'Ali@gmail.com',
        status: "غیر فعال",
        transeAction: "۹۹۰,۰۰۰",
        avatar: '/image/per2.jpg'
    },
    {
        id: 4,
        userName: 'یاسی پسندی',
        email: 'Yasi@gmail.com',
        status: 'فعال',
        transeAction: "۲,۵۰۰,۰۰۰",
        avatar: '/image/per3.jpg'
    },
    {
        id: 5,
        userName: 'سیروس عقیمی',
        email: 'siros@gmail.com',
        status: 'فعال',
        transeAction: "۷۵۰,۰۰۰",
        avatar: '/image/per4.jfif'
    },
    {
        id: 6,
        userName: 'میثم عظیمی',
        email: 'maisam@gmail.com',
        status: 'فعال',
        transeAction: "۲۱,۸۲۰,۶۰۰",
        avatar: '/image/per5.jfif'
    },
    {
        id: 7,
        userName: 'محمد عبدی',
        email: 'mohamad@gmail.com',
        status: 'فعال',
        transeAction: "۲,۲۰۰,۰۰۰",
        avatar: '/image/per6.jfif'
    },
    {
        id: 8,
        userName: 'تینا مرادی',
        email: 'tina@gmail.com',
        status: 'فعال',
        transeAction: "۵,۲۰۰,۰۰۰",
        avatar: '/image/per7.jpg'
    },
    {
        id: 9,
        userName: 'سارا صابری',
        email: 'sara@gmail.com',
        status: 'فعال',
        transeAction: "۲,۲۰۰,۰۰۰ ",
        avatar: '/image/per9.jfif'
    },
]
export let Allproduct = [
    { id: 1, name: 'aser مدل 201', isStock: 'خیر', active: 13, avatar: '/image/lap1.jpg', price: "۲,۴۷۵,۰۰۰" },
    { id: 2, name: 'lonovo || لنوو شرکتی', isStock: 'بله', active: 3, avatar: '/image/lap2.jpg', price: "۷۵۰,۰۰۰" },
    { id: 3, name: 'Dell صفحه لمسی', isStock: 'خیر', active: 8, avatar: '/image/lap3.jpg', price: "۹۹۰,۰۰۰" },
    { id: 4, name: 'Hp : مدل 2080', isStock: 'بله', active: 31, avatar: '/image/lap2.jpg', price: "۲,۵۰۰,۰۰۰" },
    { id: 5, name: 'Apple : مک بوک', isStock: 'خیر', active: 14, avatar: '/image/lap1.jpg', price: "۲,۲۸۱,۶۰۰" },
    { id: 6, name: 'lenovo :مدل 3420', isStock: 'خیر', active: 17, avatar: '/image/lap3.jpg', price: "۲,۲۰۰,۰۰۰ " },
]
export let Sale = [
    { "name": 'فروردین', "تومان": 4200000 },
    { "name": 'اردیبهشت', "تومان": 6500000 },
    { "name": 'خرداد', "تومان": 4900000 },
]