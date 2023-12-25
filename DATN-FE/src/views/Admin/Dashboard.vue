<template>
  <div>
    <div class="row mb-4" style="margin: 0 120px">
      <div class="col-3 text-center">
        <font-awesome-icon class="mb-2 " :icon="['fas', 'user']" style="font-size: 2em;" />
        <h5>Users : {{ list?.count_users }}</h5>
      </div>
      <div class="col-3 text-center">
        <font-awesome-icon class="mb-2" :icon="['fas', 'list']" style="font-size: 2em;" />
        <h5>Products : {{ list?.count_products }}</h5>
      </div>
      <div class="col-3 text-center">
        <font-awesome-icon class="mb-2" :icon="['fas', 'cart-shopping']" style="font-size: 2em;" />
        <h5>Orders : {{ list?.count_orders }}</h5>
      </div>
      <div class="col-3 text-center">
        <font-awesome-icon class="mb-2" :icon="['fas', 'hand-holding-dollar']" style="font-size: 2em;" />
        <h5>Revenue : {{ list?.sum_revenue }}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <Doughnut ref="pie" :data="chartData" :options="options" />
      </div>
      <div class="col-8">
        <Bar :data="chartData1" :options="options1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
} from 'chart.js'
import { Bar, Doughnut } from 'vue-chartjs'
import {HomeService} from "@/services";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

export default {
  name: 'App',
  components: {
    Bar,
    Doughnut
  },
  data() {
    return {
      list: null,
      data: {},
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Tống kê đơn hàng'
          },
        },
        responsive: true
      },
      data1: {},
      options1: {
        plugins: {
          title: {
            display: true,
            text: 'Doanh thu'
          },
        },
        responsive: true
      }
    }
  },
  computed: {
    chartData() {
      return {
        labels: this.list?.data_chart?.months.map(x => 'Tháng '+ x) || [],
        datasets: [
          {
            data: this.list?.data_chart?.total_orders || [],
            label: 'Đơn hàng',
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(255,86,100)',
            ],
            hoverOffset: 4
          },
        ],
      }
    },
    chartData1() {
      return {
        labels: this.list?.data_chart?.months.map(x => 'Tháng '+ x) || [],
        datasets: [{
          data: this.list?.data_chart?.total_revenues || [],
          label: 'VNĐ',
          backgroundColor: [
            'green',
            'green',
            'green',
            'green'
          ]
        }],
      }
    }
  },
  methods: {
    async fetchData() {
      const resp = await HomeService.getData();
      if (resp) {
        this.list = resp.data.data
      }
    },
  },
  mounted() {
    this.fetchData()
  }
}
</script>