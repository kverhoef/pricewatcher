<template>
  <div id="app">

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
            <li class="nav-item" v-if="userInfo">
              <router-link to="/new" class="nav-link">New</router-link>
            </li>

            <li class="nav-item" v-if="userInfo">
              <span class="nav-link"><i class="fa fa-user"></i> {{userInfo.username}}</span>
            </li>
            <li class="nav-item" v-if="userInfo">
              <a class="nav-link" href="#" v-on:click="signOut">(Sign Out)</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view class="view"></router-view>

  </div>
</template>

<script lang="ts">
  import {Component, Watch} from 'vue-property-decorator';
  import Vue from 'vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'font-awesome/css/font-awesome.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import VueRouter from 'vue-router'
  import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue'
  import {Amplify, AmplifyEventBus} from 'aws-amplify-vue'
  import router from './router'

  Vue.use(VueRouter);
  Vue.use(BootstrapVue)

@Component({
  router
})
export default class App extends Vue {

   public static LOGIN_URL = '/login';

  constructor(private $Amplify: Amplify) {
    super();
  }

  userInfo;

  data() {
    return {
      userInfo: undefined
    }
  }

  created() {
    this.getUserInfo();
    this.registerAuthWatches();
  }

  @Watch('$route', { immediate: true, deep: true })
  onUrlChange(route: any) {
    if (route.path !== App.LOGIN_URL && !this.userInfo) {
      this.$router.push({path: App.LOGIN_URL});
    }
  }

  registerAuthWatches() {
    AmplifyEventBus.$on('authState', info => {
      this.getUserInfo();
      if(info === 'signedIn') {
        this.$router.push({path: 'pricewatchList'});
      } else if(info === 'signedOut') {
        this.$router.push({path: App.LOGIN_URL});
      }
    });
  }

  signOut() {
    this.$Amplify.Auth.signOut().then(() => {
      this.userInfo = undefined;
      this.$router.push({path: App.LOGIN_URL});
    });
  }

  async getUserInfo() {
    this.$Amplify.Auth.currentUserInfo().then(userInfo => {
      if (userInfo) {
        this.userInfo = userInfo;
        this.$router.push({path: '/'});
      } else {
        this.$router.push({path: App.LOGIN_URL});
      }
    });

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
