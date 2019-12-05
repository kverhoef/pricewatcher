<template>
  <div id="app">
    <pricewatch-list></pricewatch-list>
    <new-pricewatch></new-pricewatch>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PricewatchList from './components/PricewatchList.vue';
import NewPricewatch from './components/NewPricewatch.vue';

@Component({
  components: {
      NewPricewatch,
      PricewatchList,
  }
})
export default class App extends Vue {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
