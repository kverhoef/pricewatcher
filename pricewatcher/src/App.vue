<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-dark ">
      <div class="container">
        <a class="navbar-brand" href="index.html">Pricewatcher</a>
        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#probootstrap-navbar" aria-controls="probootstrap-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span><i class="fas fa-bars"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="probootstrap-navbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/new" class="nav-link">New</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-12">
          <h1 class="heading m-0 mt-2 mb-2">Active watches</h1>
        </div>
      </div>
    </div>

    <router-view class="view"></router-view>

  </div>

</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import PricewatchList from './components/PricewatchList.vue';
import NewPricewatch from './components/NewPricewatch.vue';
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import VueRouter from 'vue-router'
import path from 'path';
const __dirname = path.resolve();

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: PricewatchList },
        { path: '/new', component: NewPricewatch },
    ]
});

@Component({
  router
})
export default class App extends Vue {

}
</script>

<style>


  body {
    background-color: #f2f4f9;
    color: #444;
    background: linear-gradient(45deg,#665fee 0%,#27c2de 100%);
  }

  .title {
    font-weight: bold;
    font-size: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price {
    font-size: 40px;
    white-space: nowrap;
  }

  .url {
    font-size: 14px;
    position: relative;
    top: -0.2em;
  }

  .price sup {
    font-size: 16px;
    top: -1em;
  }

  .fa-cog {
    color: #ccc;
  }

  .fa-cog:hover {
    color: #444;
  }

  .border {
    border-radius: .25rem;
  }

  .border:hover {
    cursor: pointer;
    border-color: #1d82ff!important;
  }

  h1 {
    color: white;
  }

  .btn {
    font-weight: bold;
  }

</style>
