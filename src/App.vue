<template>
  <div class="outer">
    <Header/>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer'
export default {
  name: '',
  components:{
    Header,
    Footer
  },
  mounted(){
    this.$store.dispatch('categoryList')
  }
}
</script>

<style lang="less" scoped>

</style>
