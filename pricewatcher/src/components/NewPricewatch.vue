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
            <b-form @submit="createNewPriceWatch" >
                <b-form-group
                        id="name"
                        label="Name:"
                        label-for="nameInput"
                >
                    <b-form-input
                            id="nameInput"
                            v-model="pricewatch.name"
                            type="text"
                            required
                            placeholder="Name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="url"
                        label="Url:"
                        label-for="urlInput"
                >
                    <b-form-input
                            id="urlInput"
                            v-model="pricewatch.url"
                            type="text"
                            required
                            placeholder="Url"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="xpath"
                        label="Xpath:"
                        label-for="xpathInput"
                >
                    <b-form-input
                            id="xpathInput"
                            v-model="pricewatch.xpath"
                            type="text"
                            required
                            placeholder="Xpath"
                    ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="success" :disabled="isSaving">Save</b-button>
            </b-form>
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

    pricewatch: Pricewatch = {
        name: '',
        xpath: '',
        url: ''
    };


    isSaving = false;

    async createNewPriceWatch(evt) {
        evt.preventDefault()
        this.isSaving = true;
        // const pricewatch: Pricewatch = { name: this.name, url: this.url, xpath: this.xpath };

        await API.graphql(graphqlOperation(createPricewatch, { input: this.pricewatch }));
        this.$bvToast.toast('New entry saved', {
            title: 'Save successful',
            autoHideDelay: 2000,
            toaster: 'b-toaster-top-center'
        });
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
