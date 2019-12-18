<template>
    <div>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-12">
                    <h1 class="heading m-0 mt-2 mb-2">Settings</h1>
                </div>
            </div>
        </div>

        <div class="container" v-if="pricewatch !== undefined">

            <div class="mb-2 col-md-12 pr-1 pb-1 pt-1 pl-3 border bg-white d-flex flex-column">
                <pricewatch-header :pricewatch="pricewatch"></pricewatch-header>

                <div>
                    <h2>Price Alert</h2>
                    <b-form @submit="saveAlert" >

                        <b-form-group
                                id="alert"
                                label="AlertValue:"
                                label-for="alertValue"
                        >
                            <b-form-input
                                    id="alertValue"
                                    v-model="pricewatch.alertValue"
                                    type="number"
                                    required
                                    placeholder="AlertValue"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                                id="alertActive"
                                label="AlertActive:"
                                label-for="alertActive"
                        >
                            <b-form-checkbox v-model="pricewatch.alertActive" name="check-button" switch>

                            </b-form-checkbox>
                        </b-form-group>

                        <b-button type="submit" variant="success" class="btn btn-primary">Save</b-button>
                    </b-form>
                </div>

                <div>
                    <h2>Watch Configurations</h2>
                    <div v-if="pricewatch.config">
                        <div v-for="config in pricewatch.config.items" :key="config.id">
                            <a :href="config.url">{{config.url}}</a>
                            <button @click="deleteWatchConfig(config)" class="btn btn-danger">Remove</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Add Watch Configurations</h2>
                    <b-form @submit="addConfig" >

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

                        <b-button type="submit" variant="success" class="btn btn-primary">Add</b-button>
                    </b-form>
                </div>

                <div>
                    <h2>Actions</h2>
                    <button @click="deletePricewatch()" class="btn btn-danger">Remove</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import API, {  graphqlOperation } from '@aws-amplify/api';

import { getPricewatch } from '@/graphql/queries';
import {createWatchConfig, deletePricewatch, deleteWatchConfig, updatePricewatch} from '@/graphql/mutations';
import {DeletePricewatchInput, DeleteWatchConfigInput} from "../API";
import {GraphQLResult} from "@aws-amplify/api/lib/types";
import Chart  from './Chart.vue';
import PricewatchHeader from "@/components/PricewatchHeader.vue";
import {Pricewatch, WatchConfig} from "@/models/models";

@Component({
    components: {
        PricewatchHeader
    }
})
export default class PricewatchList extends Vue {
    pricewatch;

    inputModel: any = {
        xpath: '',
        url: ''
    };

    data() {
        return {
            pricewatch: 'Pricewatch'
        }
    }

    created() {
        this.getData();
    }

    async addConfig(evt) {
        evt.preventDefault();
        const watchConfig: WatchConfig = {
            url: this.inputModel.url,
            xpath: this.inputModel.xpath,
            label: this.inputModel.url,
            watchConfigPricewatchId: this.pricewatch.id,
        };
        await API.graphql(graphqlOperation(createWatchConfig, { input: watchConfig }));
        this.inputModel = {};
        this.getData();
    }

    saveAlert(event) {
        event.preventDefault();
        const input = {
            id: this.pricewatch.id,
            alertActive: this.pricewatch.alertActive,
            alertValue: this.pricewatch.alertValue,
        };
        (API.graphql(graphqlOperation(updatePricewatch, { input:input })) as Promise<GraphQLResult>).then((result: any) => {
            // this.pricewatch = result.data.updatePricewatch;
            console.log(result)
        });
    }

    getData(){
        (API.graphql(graphqlOperation(getPricewatch, { id: this.$route.params.id })) as Promise<GraphQLResult>).then((result: any) => {
            this.pricewatch = result.data.getPricewatch;
        });
    }

    async deleteWatchConfig(watchConfig) {
        const model: DeleteWatchConfigInput = {id: watchConfig.id};
        await API.graphql(graphqlOperation(deleteWatchConfig, { input: model } ))
        this.getData();
    }

    async deletePricewatch() {
        const model: DeletePricewatchInput = {id: this.$route.params.id};
        await API.graphql(graphqlOperation(deletePricewatch, { input: model } ))
        this.$router.push({path: '/'});
    }

}
</script>

<style scoped>
    .fa-cog {
        position: absolute;
        right: 0.3em;
        top: 0.3em;
    }
</style>
