<template>
    <div>
        <button @click="testLambda()">Test lamda</button>
        <div class="d-flex">
            <span class="wrap">ID</span>
            <span class="wrap">name</span>
            <span class="wrap">url</span>
            <span class="wrap">xpath</span>
        </div>
      <div class="d-flex" v-for="pricewatch in pricewatchList" :key="pricewatch.id">
          <span class="wrap">{{pricewatch.id}}</span>
          <span class="wrap">{{pricewatch.name}}</span>
          <span class="wrap">{{pricewatch.url}}</span>
          <span class="wrap">{{pricewatch.xpath}}</span>
          <span class="wrap">
            <div class="d-flex" v-for="value in pricewatch.values.items" :key="value.id">
                {{value.value}}
            </div>
          </span>
          <button @click="removePricewatch(pricewatch.id)">Remove</button>
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

@Component({})
export default class PricewatchList extends Vue {
  pricewatchList: Pricewatch[] = [];

  created() {
    this.getData();
  }

    async testLambda() {
        const model: EchoQueryVariables = {msg: 'testmessage'};
        await API.graphql(graphqlOperation(echo, model ))
    }

  async removePricewatch(id: string) {
      const model: DeletePricewatchInput = {id: id};
      await API.graphql(graphqlOperation(deletePricewatch, { input: model } ))
      this.getData();
  }

  getData(){
    (API.graphql(graphqlOperation(listPricewatchs)) as Promise<GraphQLResult>).then((result: any) => {
        this.pricewatchList = result.data.listPricewatchs.items;
    });

  }
}
</script>

<style>
    .d-flex {
        display: flex;
    }

    .wrap {
        margin: 0 1em;
        text-align: left;
        width: 100%;
        flex-grow: 1;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
