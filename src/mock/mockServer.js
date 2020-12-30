import Mock from 'mockjs';

import recommend from './recommend.json';
import floor from './floor.json';
import banners from './banners'

Mock.mock('/mock/recommend',{
    code:200,
    data:recommend
});
Mock.mock('/mock/floor',{
    code:200,
    data:floor
});
Mock.mock('/mock/banners',{
    code:200,
    data:banners
})