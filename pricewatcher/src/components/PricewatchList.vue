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
                <div class="mb-2 col-md-12 pr-1 pb-1 pt-1 border bg-white d-flex">
                    <div class="pl-0 pr-2 d-flex justify-content-center align-items-center">
                        <img style="width: 4.4em; height:4.4em;" :src="pricewatch.img"></div>
                    <div class="flex-grow-1 flex-schrink-1 d-flex align-items-center title mr-2">
                        <div class="d-flex flex-column">
                            <span><router-link :to="{ path: '/detail/' + pricewatch.id, params: {id: pricewatch.id } }" class="nav-link pl-0">{{pricewatch.name}}</router-link></span>
                            <a class="url" :href="pricewatch.url" target="_blank">{{pricewatch.url}}</a>
                        </div>
                    </div>
                    <div class="flex-grow-1 flex-schrink-0 text-right pr-3">
                      <span class="price text-primary">
                          <!--<sup class="text-danger">+12.12</sup>-->
                          <!--{{pricewatch.values}}-->
                          {{pricewatch.currentValue}}
                      </span>
                    </div>

                </div>

            </div>
            <!--<div>-->
                <!--<button type="button" class="btn btn-light">Add watch</button>-->
            <!--</div>-->
        </div>

        <!--<button @click="testLambda()">Test lamda</button>-->
        <!--<div class="d-flex">-->
            <!--<span class="wrap">ID</span>-->
            <!--<span class="wrap">name</span>-->
            <!--<span class="wrap">url</span>-->
            <!--<span class="wrap">xpath</span>-->
        <!--</div>-->
      <!--<div class="d-flex" v-for="pricewatch in pricewatchList" :key="pricewatch.id">-->
          <!--<span class="wrap">{{pricewatch.id}}</span>-->
          <!--<span class="wrap">{{pricewatch.name}}</span>-->
          <!--<span class="wrap">{{pricewatch.url}}</span>-->
          <!--<span class="wrap">{{pricewatch.xpath}}</span>-->
          <!--<span class="wrap">-->
            <!--<div class="d-flex" v-for="value in pricewatch.values.items" :key="value.id">-->
                <!--{{value.value}}-->
            <!--</div>-->
          <!--</span>-->
          <!--<button @click="removePricewatch(pricewatch.id)">Remove</button>-->
      <!--</div>-->
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

@Component({

})
export default class PricewatchList extends Vue {
    pricewatchList: Pricewatch[] = [];

    created() {
        this.getData();
    }

    async testLambda() {
        const model: EchoQueryVariables = {msg: 'testmessage'};
        await API.graphql(graphqlOperation(echo, model ))
    }

    async getData(){
        try {
            const result = await API.graphql(graphqlOperation(listPricewatchs));
            this.pricewatchList = result.data.listPricewatchs.items;
        } catch (e) {
            console.log(e);
        }
     }
}
</script>

<style scoped>

</style>
