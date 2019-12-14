import Vue from 'vue'
import App from './App.vue'

import API from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import awsconfig from '../aws-exports';
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'


API.configure(awsconfig);
PubSub.configure(awsconfig);
Amplify.configure(awsconfig);

Vue.config.productionTip = false

Vue.use(AmplifyPlugin, AmplifyModules)

new Vue({
  render: h => h(App),
}).$mount('#app')
