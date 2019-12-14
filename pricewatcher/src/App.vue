<template>
  <div id="app">
    <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
    <span v-if="userInfo"> Welcome {{userInfo.username}}</span><amplify-sign-out></amplify-sign-out>
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
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import path from 'path';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue'

const __dirname = path.resolve();

Vue.use(VueRouter);
Vue.use(BootstrapVue)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: PricewatchList },
        { path: '/new', component: NewPricewatch },
        { path: '/detail/:id', component: PricewatchDetails }
    ]
});

@Component({
  router
})
export default class App extends Vue {
  authConfig = {
    signUpConfig: {
      signUpFields: [
        {
          label: 'Username',
          key: 'username',
          required: true,
          displayOrder: 1,
          type: 'string',
        },
        {
          label: 'Email',
          key: 'email',
          required: true,
          displayOrder: 2,
          type: 'string',
          signUpWith: true
        },
        {
          label: 'Password',
          key: 'password',
          required: true,
          displayOrder: 3,
          type: 'password'
        },
        {
          label: 'PhoneNumber',
          key: 'phone_number',
          required: true,
          displayOrder: 4,
          type: 'string'
        }
      ]
    }
  }

  userInfo = {};

  created() {
    this.getUsername();
  }

  async getUsername() {
    try {
      this.userInfo = await this.$Amplify.Auth.currentUserInfo();  
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
