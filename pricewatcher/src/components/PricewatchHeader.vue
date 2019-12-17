<template>
    <div class="d-flex">
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
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {Pricewatch} from "../models/models";

    @Component({

})
export default class PricewatchHeader extends Vue {
    @Prop()
    pricewatch!: Pricewatch;


}
</script>

<style scoped>

</style>
