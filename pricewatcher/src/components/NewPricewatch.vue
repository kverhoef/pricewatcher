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
                                v-model="inputModel.name"
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
                                v-model="inputModel.url"
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
                                v-model="inputModel.xpath"
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
import {createPricewatch, createWatchConfig} from "../graphql/mutations";
import {Pricewatch, WatchConfig} from "../models/models";
import {BvToast} from "bootstrap-vue";

@Component({

})
export default class NewPricewatch extends Vue {

    @Inject() public readonly $bvToast!: BvToast;


    inputModel: any = {
        name: '',
        xpath: '',
        url: ''
    };

    isSaving = false;

    async createNewPriceWatch(evt) {
        evt.preventDefault()
        this.isSaving = true;

        const pricewatch: Pricewatch = {
            name: this.inputModel.name
        };
        const labelMatch = this.inputModel.url.match(/^(?:\/\/|[^\\/]+)*/g);

        const result: any = await API.graphql(graphqlOperation(createPricewatch, { input: pricewatch }));

        const watchConfig: WatchConfig = {
            url: this.inputModel.url,
            xpath: this.inputModel.xpath,
            label: labelMatch[0],
            watchConfigPricewatchId: result.data.createPricewatch.id,
        };

        await API.graphql(graphqlOperation(createWatchConfig, { input: watchConfig }));

        this.$bvToast.toast('New entry saved', {
            title: 'Save successful',
            autoHideDelay: 2000,
            toaster: 'b-toaster-top-center'
        });
        this.emptyForm();
        this.isSaving = false;
    }

    emptyForm() {
        this.inputModel = {};
    }

}
</script>

<style>

</style>
