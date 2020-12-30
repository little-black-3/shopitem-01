import ajax from './ajax';
import mockAjax from './mockAjax'

export function reqCategoryList(){
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'GET'
    })
}
// export const reqBannerList=()=>ajax({url:'/cms/banner'})
export const reqBannerList=()=>mockAjax({url:'/banners'})

export const reqRecommendList=()=>mockAjax('/recommend');
export const reqFloorList=()=>mockAjax('/floor');

export const reqSearchList=(options)=>ajax.post('/list',options)