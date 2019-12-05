<template>
    <div>
        Name: <input v-model="name">
        Url: <input v-model="url">
        Xpath: <input v-model="xpath">

        <button @click="createNewPriceWatch">Add</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import API, {  graphqlOperation } from '@aws-amplify/api';

import { listPricewatchs } from '@/graphql/queries';
import {createPricewatch} from "../graphql/mutations";
import {Pricewatch} from "../models/models";

@Component({

})
export default class NewPricewatch extends Vue {

    name = '';
    xpath = '';
    url = '';

    async createNewPriceWatch() {
        const todo: Pricewatch = { name: this.name, url: this.url, xpath: this.xpath };
        await API.graphql(graphqlOperation(createPricewatch, { input: todo }))
    }

}
</script>

<style>

</style>
