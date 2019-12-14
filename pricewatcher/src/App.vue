<template>
  <div id="app">
    <div v-if="userInfo">
      <span > Welcome {{userInfo.username}}</span><amplify-sign-out></amplify-sign-out>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <div class="container">
        <router-link to="/" class="navbar-brand">Pricewatcher</router-link>
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

    <router-view class="view"></router-view>

  </div>
</template>

<script lang="ts">
import {Component, Inject} from 'vue-property-decorator';
import PricewatchList from './components/PricewatchList.vue';
import NewPricewatch from './components/NewPricewatch.vue';
import PricewatchDetails from './components/PricewatchDetails.vue';
import Login from './components/Login.vue';
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import path from 'path';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue'
import {Amplify, AmplifyEventBus} from 'aws-amplify-vue'

const __dirname = path.resolve();

Vue.use(VueRouter);
Vue.use(BootstrapVue)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Login},
    { path: '/pricewatchList', component: PricewatchList },
    { path: '/new', component: NewPricewatch },
    { path: '/detail/:id', component: PricewatchDetails }
  ]
});



@Component({
  router
})
export default class App extends Vue {
  @Inject() public readonly $Amplify!: Amplify;

  userInfo = {};

  created() {
    this.userInfo = this.getUserInfo();
    this.registerAuthWatches();
  }

  registerAuthWatches() {
    AmplifyEventBus.$on('authState', info => {
      this.userInfo = this.getUserInfo();
      if(info === 'signedIn') {
        this.$router.push({path: 'pricewatchList'});
      } else if(info === 'signedOut') {
        this.$router.push({path: '/'});
      }
    });
  }

  async getUserInfo() {
    try {
      this.userInfo = await this.$Amplify.Auth.currentUserInfo();
      if(!this.userInfo) {
        this.$router.push({path: '/'})
      }
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style>
  body {
    background-color: #f2f4f9;
    color: #444;
    background: linear-gradient(45deg,#665fee 0%,#27c2de 100%);
    min-height: 100vh;
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
