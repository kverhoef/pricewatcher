<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <button @click="createNewTodo">Add Todo</button>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        {{blog.name}} - {{blog.id}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

import API, {  graphqlOperation } from '@aws-amplify/api';
// eslint-disable-next-line
import { createBlog } from "./graphql/mutations";
import { listBlogs } from '@/graphql/queries';

@Component({
  components: {
    HelloWorld,
  }
})
export default class App extends Vue {
  blogs: any = [];

  created() {
    this.getData()
  }

  async createNewTodo(){
    const todo = { name: "Use AppSync" }
    await API.graphql(graphqlOperation(createBlog, { input: todo }))
  }

  async getData(){
    const todoData = await API.graphql(graphqlOperation(listBlogs));
    // eslint-disable-next-line
      console.log(todoData);
    this.blogs.push(...this.blogs, ...todoData.data.listBlogs.items);
  }
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
