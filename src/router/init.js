export default  [
    {
        path: '/',
        component: () => import('../components/Login')
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('../components/Login')
    },
    {
        path: '/servers',
        component: () => import('../components/ServerList')
    },
    {
        path: '/mainPage',
        component: () => import('../components/MainPage')
    }
]