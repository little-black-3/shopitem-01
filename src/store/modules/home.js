import {
    reqCategoryList,
    reqBannerList,
    reqRecommendList,
    reqFloorList
} from '@/api'

const state={
    categoryList:[],
    bannerList:[],
    recommendList:[],
    floorList:[]
};
const mutations={
     CATEGORY_LIST(state,categoryList){
         state.categoryList=categoryList.splice(0,15)
     },
     BANNER_LIST(state,bannerList){
         state.bannerList=bannerList
     },
     RECOMMEND_LIST(state,recommendList){
         state.recommendList=recommendList
     },
     FLOOR_LIST(state,floorList){
         state.floorList=floorList
     }
};
const actions={
   async categoryList({commit}){
       const result=await reqCategoryList();
       if(result.code===200){
           const categoryList=result.data;
          commit('CATEGORY_LIST',categoryList)
       }
   },
   async bannerList({commit}){
       const result=await reqBannerList();
       if(result.code===200){
           const bannerList=result.data;
           commit('BANNER_LIST',bannerList)
       }
   },
   async recommendList({commit}){
       const result=await reqRecommendList();
       if(result.code===200){
        //    console.log(result)
           const recommentList=result.data;
           commit('RECOMMEND_LIST',recommentList)
       }
   },
   async floorList({commit}){
       const result=await reqFloorList()
       if(result.code===200){
           commit('FLOOR_LIST',result.data)
       }
   }
};
const getters={

}




export default {
    state,
    mutations,
    actions,
    getters
}