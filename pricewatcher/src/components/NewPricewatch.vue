<template>
    <div>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-12">
                    <h1 class="heading m-0 mt-2 mb-2">New</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="mb-2 col-md-12 p-3 border bg-white d-flex flex-column">
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
    </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator';
import API, {  graphqlOperation } from '@aws-amplify/api';

import { listPricewatchs } from '@/graphql/queries';
import {createPricewatch} from "../graphql/mutations";
import {Pricewatch} from "../models/models";
import {BvToast} from "bootstrap-vue";

@Component({

})
export default class NewPricewatch extends Vue {

    @Inject() public readonly $bvToast!: BvToast;


    pricewatch: Pricewatch = {
        name: '',
        xpath: '',
        url: ''
    };

    isSaving = false;

    async createNewPriceWatch(evt) {
        evt.preventDefault()
        this.isSaving = true;

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
        this.pricewatch = {};
    }

}
</script>

<style>

</style>
