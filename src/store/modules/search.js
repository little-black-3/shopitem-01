import {reqSearchList} from '@/api'

const state={
   searchList:{}
};
const mutations={
    SEARCH_LIST(state,searchList){
        state.searchList=searchList
    }

};
const actions={
    async searchList({commit},options){
        const result=await reqSearchList(options);
        if(result.code===200){
           commit('SEARCH_LIST',result.data)
        }
    }
}
const getters={
    goodsList(state){
        return state.searchList.goodsList ||[]
    },
    attrsList(state){
        return state.searchList.attrsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList ||[]
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
