<template>
    <div>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-12">
                    <h1 class="heading m-0 mt-2 mb-2">Details</h1>
                </div>
            </div>
        </div>

        <div class="container" v-if="pricewatch !== undefined">
            <div class="mb-2 col-md-12 pr-1 pb-1 pt-1 pl-3 border bg-white d-flex flex-column">
                <div class="title">
                    {{pricewatch.name}}
                </div>
                <div >
                    <!--{{$route.params}}-->

                    <chart v-if="pricewatch.values !== undefined && pricewatch.values.items.length" :chart-data="pricewatch.values.items"></chart>
                </div>

                <button @click="deletePricewatch()" class="btn btn-danger">Remove</button>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import API, {  graphqlOperation } from '@aws-amplify/api';

import { getPricewatch } from '@/graphql/queries';
import { deletePricewatch } from '@/graphql/mutations';
import {DeletePricewatchInput} from "../API";
import {GraphQLResult} from "@aws-amplify/api/lib/types";
import Chart  from './Chart.vue';

@Component({
    components: {
        Chart
    }
})
export default class PricewatchList extends Vue {
    pricewatch;

    created() {
        this.getData();
    }

    data() {
        return {
            pricewatch: 'Pricewatch'
        }
    }

    async deletePricewatch() {
      const model: DeletePricewatchInput = {id: this.$route.params.id};
      await API.graphql(graphqlOperation(deletePricewatch, { input: model } ))
        this.getData();
    }

  getData(){
    (API.graphql(graphqlOperation(getPricewatch, { id: this.$route.params.id })) as Promise<GraphQLResult>).then((result: any) => {
        this.pricewatch = result.data.getPricewatch;
    });
  }

}
</script>

<style scoped>

</style>
