<template>
    <div>
        <div class="d-flex">
            <!--<span class="wrap">ID</span>-->
            <span class="wrap">name</span>
            <span class="wrap">url</span>
            <span class="wrap">xpath</span>
        </div>
      <div class="d-flex" v-for="pricewatch in pricewatchList" :key="pricewatch.id">
          <!--<span class="wrap">{{pricewatch.id}}</span>-->
          <span class="wrap">{{pricewatch.name}}</span>
          <span class="wrap">{{pricewatch.url}}</span>
          <span class="wrap">{{pricewatch.xpath}}</span>
          <button @click="removePricewatch(pricewatch.id)">Remove</button>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import API, {  graphqlOperation } from '@aws-amplify/api';

import { listPricewatchs } from '@/graphql/queries';
import { deletePricewatch } from '@/graphql/mutations';
import {Pricewatch} from "../models/models";
import {DeletePricewatchInput} from "../API";
import {GraphQLResult} from "@aws-amplify/api/lib/types";

@Component({})
export default class PricewatchList extends Vue {
  pricewatchList: Pricewatch[] = [];

  created() {
    this.getData();
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
