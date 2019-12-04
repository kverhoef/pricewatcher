<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <button @click="createNewTodo">Add Todo</button>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

import API, {  graphqlOperation } from '@aws-amplify/api';
// eslint-disable-next-line
import { createBlog } from "./graphql/mutations";

@Component({
  components: {
    HelloWorld,
  },
  methods :{
      async createNewTodo(){
          const todo = { name: "Use AppSync" }
          await API.graphql(graphqlOperation(createBlog, { input: todo }))
      }
  }
})
export default class App extends Vue {}
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
