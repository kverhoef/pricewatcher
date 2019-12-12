<template>
    <div>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-12">
                    <h1 class="heading m-0 mt-2 mb-2">Details</h1>
                </div>
            </div>
        </div>
        <div class="container">
            Name: <input v-model="name">
            Url: <input v-model="url">
            Xpath: <input v-model="xpath">

            <button @click="createNewPriceWatch" :disabled="isSaving" >Add</button>
        </div>
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
    isSaving = false;

    async createNewPriceWatch() {
        this.isSaving = true;
        const todo: Pricewatch = { name: this.name, url: this.url, xpath: this.xpath };

        await API.graphql(graphqlOperation(createPricewatch, { input: todo }));
        this.emptyForm();
        this.isSaving = false;
    }

    emptyForm() {
        this.name = '';
        this.xpath = '';
        this.url = '';
    }

}
</script>

<style>

</style>
