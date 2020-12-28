import Mock from 'mockjs';

import recommend from './recommend.json';
import floor from './floor.json'

Mock.mock('/mock/recommend',{
    code:200,
    data:recommend
});
Mock.mock('/mock/floor',{
    code:200,
    data:floor
})