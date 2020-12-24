import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Search from '@/pages/Search';
import Register from '@/pages/Register';

export default[
   {
       path:'/',
       component:Home
   },
   {
       path:'/login',
       component:Login,
       meta:{
           isHideFooter:true
       }
   },
   {
       path:'/search/:keyword?',
       component:Search,
       name:'search'
   },
   {
       path:'/register',
       component:Register,
       meta:{
           isHideFooter:true
       }
   }
]