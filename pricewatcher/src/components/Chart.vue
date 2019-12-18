<template>
  <div id="chart">
    <apexchart type=line height=350 :options="chartOptions" :series="series" />
  </div>
</template>

<script lang="ts">
import VueApexCharts from 'vue-apexcharts'
import { Component, Vue, Prop } from 'vue-property-decorator';

/**
 * Data Input: [{
 *     date: new Date(),
 *     price: 12.1
 * }]
 */
@Component({
    components: {
        apexchart: VueApexCharts,
    }

})
export default class Chart extends Vue {
    @Prop({default: [] })
    chartData;

    chartOptions;
    series;

    data() {
        return {
            chartOptions: undefined,
            series: undefined
        }
    }

    created() {
        this.getData();
    }

    getData() {

        const uniqueSeries = [...new Set(this.chartData.map((d) => d.label))]

        this.series = uniqueSeries.map((serie) => {
          return {
            name: serie,
            data: this.chartData.filter((d) => d.label === serie).sort((a, b) => a.date - b.date ).map((d) => d.value),
          }
        });
        this.chartOptions = {
            chart: {
                shadow: {
                    enabled: false,
                },
                toolbar: {
                    show: false
                }
            },
            colors: ['#77B6EA', '#545454'],
                dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                align: 'left'
            },
            tooltip: {
                enabled: true,
            },
            markers: {
                size: 6,
                    hover: {
                    size: 8
                }
            },
            grid: {
                borderColor: '#e7e7e7',
                    row: {
                    colors: ['#f3f3f3', 'transparent'],
                        opacity: 0.5
                },
            },
            xaxis: {
                categories: this.chartData.map((d) => new Date(Number.parseInt(d.date))).map((d) => d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()),
                    title: {
                    // text: 'Date'
                }
            },
            yaxis: {
                title: {
                    text: 'Price'
                },
            },
        }
    }

}
</script>

<style scoped>

</style>
