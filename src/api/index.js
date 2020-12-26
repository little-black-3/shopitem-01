import ajax from './ajax';

export function reqCategoryList(){
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'GET'
    })
}
export const reqBannerList=()=>ajax({url:'/cms/banner'})