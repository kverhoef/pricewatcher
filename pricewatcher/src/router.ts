import VueRouter from "vue-router";
import Login from "@/components/Login.vue";
import PricewatchList from "@/components/PricewatchList.vue";
import NewPricewatch from "@/components/NewPricewatch.vue";
import PricewatchEdit from "@/components/PricewatchEdit.vue";
import PricewatchDetails from "@/components/PricewatchDetails.vue";
import path from "path";

const __dirname = path.resolve();

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: PricewatchList },
        { path: '/login', component: Login},
        { path: '/new', component: NewPricewatch },
        { path: '/detail/:id', component: PricewatchDetails },
        { path: '/detail/:id/edit', component: PricewatchEdit }
    ]
});
