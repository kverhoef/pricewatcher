<template>
    <div>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-12">
                    <h1 class="heading m-0 mt-2 mb-2">Active watches</h1>
                </div>
            </div>
        </div>

        <div class="container">

            <div class="row d-flex" v-for="pricewatch in pricewatchList" :key="pricewatch.id">
                <div class="mb-2 col-md-12 pr-1 pb-1 pt-1 border bg-white">
                    <pricewatch-header :pricewatch="pricewatch"></pricewatch-header>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import API, {  graphqlOperation } from '@aws-amplify/api';

import { listPricewatchs, echo } from '@/graphql/queries';
import { deletePricewatch } from '@/graphql/mutations';
import {Pricewatch} from "../models/models";
import {DeletePricewatchInput, EchoQueryVariables} from "../API";
import {GraphQLResult} from "@aws-amplify/api/lib/types";
import Chart from "@/components/Chart.vue";
import PricewatchHeader from "@/components/PricewatchHeader.vue";

@Component({
    components: {
        PricewatchHeader
    }
})
export default class PricewatchList extends Vue {
    pricewatchList: Pricewatch[] = [];

    created() {
        this.getData();
    }

    async getData(){
        try {
            const result: any = await API.graphql(graphqlOperation(listPricewatchs));
            this.pricewatchList = result.data.listPricewatchs.items;
        } catch (e) {
            console.log(e);
        }
     }
}
</script>

<style scoped>

</style>
