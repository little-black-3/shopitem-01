import {reqCategoryList} from '@/api'

const state={
    categoryList:[]
};
const mutations={
     CATEGORYLIST(state,categoryList){
         state.categoryList=categoryList.splice(0,15)
     }
};
const actions={
   async categoryList({commit}){
       const result=await reqCategoryList();
       if(result.code===200){
           const categoryList=result.data;
          commit('CATEGORYLIST',categoryList)
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