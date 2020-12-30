<template>
  <div class="pagination">
    <button :class="{disable:myCurrentPage===1}" :disabled="myCurrentPage===1" @click="setCurrentPage(myCurrentPage-1)">上一页</button>

    <button v-if="startEnd.start !==1" @click="setCurrentPage(1)">1</button>

    <button v-if="startEnd.start >2" class="disable">...</button>



    <button v-for="item in startEnd.end" v-if="item>=startEnd.start" :key="item" @click="setCurrentPage(item)" :class="{active:myCurrentPage===item}">{{item}}</button>

    <button v-if="startEnd.end <totalPage-1" class="disable">...</button>

    <button v-if="startEnd.end !==totalPage" @click="setCurrentPage(totalPage)">{{totalPage}}</button>

    <button :class="{disable:myCurrentPage===totalPage}" :disabled="myCurrentPage===totalPage" @click="setCurrentPage(myCurrentPage+1)">下一页</button>


    <button class="disable">共{{total}}页</button>


  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props:{
    currentPage:{
      type:Number,
      default:1
    },
    total:{
      type:Number,
      default:0
    },
    pageSize:{
      type:Number,
      default:10
    },
    showPageNo:{
      type:Number,
      default:5,
      validator:function(value){
        return value%2===1
      }
    }
  },
  data(){
    return{
      myCurrentPage:this.currentPage
    }
  },
  computed:{
    totalPage(){
      const {total,pageSize}=this;
      return Math.ceil(total/pageSize)
    },
    startEnd(){
      const {showPageNo,currentPage,totalPage}=this
      let start,end
      start=currentPage-Math.floor(showPageNo/2);
      if(start<1){
        start=1
      }
      end=start+showPageNo-1;
      if(end>totalPage){
        end=totalPage;
        start=end-showPageNo+1;
        if(start<1){
          start=1
        }
      }
      return {start,end}
    }
  },
  methods:{
    setCurrentPage(page){

      if(this.myCurrentPage===page) return
      this.myCurrentPage=page;
      this.$emit('currentChange',page)
    }
  },
  watch:{
    currentPage(value){
       this.myCurrentPage=value
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &.disable {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>

