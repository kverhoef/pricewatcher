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
                <pricewatch-header :pricewatch="pricewatch"></pricewatch-header>

                <div>Initial price: {{pricewatch.initialValue}}</div>
                <div>Lowest price: {{pricewatch.lowestValue}}</div>

                <div v-if="pricewatch.config">
                    <div v-for="config in pricewatch.config.items" :key="config.id">
                        <a :href="config.url">{{config.url}}</a>
                    </div>
                </div>
                <router-link :to="{ path: '/detail/' + pricewatch.id + '/edit', params: {id: pricewatch.id } }">
                    <i class="fa fa-cog"></i>
                </router-link>

                <div>
                    <chart v-if="pricewatch.values !== undefined && pricewatch.values.items.length" :chart-data="pricewatch.values.items"></chart>
                </div>

            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import API, {graphqlOperation} from '@aws-amplify/api';

    import {getPricewatch} from '@/graphql/queries';
    import {GraphQLResult} from "@aws-amplify/api/lib/types";
    import Chart from './Chart.vue';
    import PricewatchHeader from "@/components/PricewatchHeader.vue";

    @Component({
    components: {
        Chart,
        PricewatchHeader
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

  getData(){
    (API.graphql(graphqlOperation(getPricewatch, { id: this.$route.params.id })) as Promise<GraphQLResult>).then((result: any) => {
        this.pricewatch = result.data.getPricewatch;
    });
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
