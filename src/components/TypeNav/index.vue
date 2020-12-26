<template>
  <div class="type-nav">
            <div class="container">
                <div @mouseenter="showItems" @mouseleave='hideItems'>
                <h2 class="all">全部商品分类</h2>
                <transition name='slide'>
                    
                <div class="sort" v-show="isShowItem">
                    <div class="all-sort-list2" @click="toSearch">
                        
                        <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" :class="{active:currentIndex===index}" @mouseenter="showNextItem(index)">
                            <h3>
                                <a href="javascript:" :data-categoryName='c1.categoryName' :data-categoryId1="c1.categoryId">{{c1.categoryName}}</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                        <dt>
                                            <a href="javascript:" :data-categoryName="c2.categoryName" :data-categoryId2='c2.categoryId'>{{c2.categoryName}}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                <a href="javascript:" :data-categoryName="c3.categoryName" :data-catagoryId3="c3.catagoryId">{{c3.categoryName}}</a>
                                            </em>
                                            
                                        </dd>
                                    </dl>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </transition>
                </div><nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
            </div>
        </div>
</template>

<script>
import {mapState} from 'vuex';
import throttle from 'lodash/throttle'
export default {
  name: 'TypeNav',
  data(){
      const path=this.$route.path
      return{
          isShowItem:path==='/',
         currentIndex:-2
      }
  },
  computed:{
      ...mapState({
          categoryList:state=>state.home.categoryList
      })
  },
  methods:{
      toSearch(event){
          const target=event.target;
          const{categoryname,categoryid1,categoryid2,categoryid3}=target.dataset;
          if(categoryname){
              const query={
               categoryName:categoryname

              }
              if(categoryid1){
                  query.categoryId1=categoryid1
              } else if(categoryid2){
                  query.categoryId2=categoryid2
              } else if(categoryid3){
                  query.categoryId3=categoryid3
              }
              this.$router.push({
                  name:'search',
                  query
              })
          } 
          
      },
      showNextItem:throttle(function(index){
          if(this.currentIndex!==-2){
             this.currentIndex=index
          }
      },200),
      showItems(){
          this.currentIndex=-1;
          this.isShowItem=true
      },
      hideItems(){
          this.currentIndex=-2
          if(this.$route.path !=='/'){
              this.isShowItem=false
          }
      }
  }
}
</script>

<style lang="less" scoped>
.type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;
                &.slide-enter-active,&.slide-leave-active{
                    transition: all .3s;
                }
                &.slide-enter,&.slide-leave-to{
                    height:0;
                    opacity: 0;
                }
                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &.active {
                            background: skyblue;
                            .item-list {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
