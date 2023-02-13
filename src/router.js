import Home from  './pages/Home/Home'
import NewUser from  './pages/NewUser/NewUser'
import Products from  './pages/Products/Products'
import UserList from  './pages/UserList/UserList'
import Product from './pages/Product/Product'




let routes=[
    {path:'/',element:<Home /> },
    {path:'/newUser',element:<NewUser /> },
    {path:'/products',element:<Products /> },
    {path:'/product/:Id',element:<Product /> },
    {path:'/userList',element:<UserList /> },
]

export {routes}