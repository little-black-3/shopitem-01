import {reqCategoryList,reqBannerList} from '@/api'

const state={
    categoryList:[],
    bannerList:[]
    
};
const mutations={
     CATEGORY_LIST(state,categoryList){
         state.categoryList=categoryList.splice(0,15)
     },
     BANNER_LIST(state,bannerList){
         state.bannerList=bannerList
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