<template>
  <div id="app">
      <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
     <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import footer from './components/footer.vue';
export default {
  components:{
    "app-header":Header,
    "app-footer":footer
  }
}
</script>

<style>

</style>