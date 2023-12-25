<script>
import {OrderService} from "@/services";

export default {
  data() {
    return {
      order: {},
      statuses: []
    }
  },
  methods: {
    async submit() {
      if (!this.$route.params.id) {
        const resp = await OrderService.createOrder(this.order)
      } else {
        const resp = await OrderService.updateOrder(this.$route.params.id, this.order)
      }
      this.$router.push({name: 'customers'})
    },
    async fetchOrder() {
      const resp = await OrderService.getOrderById(this.$route.params.id)
      if (resp) {
        this.order = resp.data.data
      }
    },
    fetchStatuses () {
      this.statuses = [
        { text: 'PENDING', value: 1 },
        { text: 'CONFIRMED', value: 2 },
        { text: 'COMPLETED', value: 3 },
      ]
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.fetchOrder()
    }
    this.fetchStatuses()
  }
}

</script>

<template>
  <form @submit.prevent="submit()">
    <div class="mb-3">
      <label>Name</label>
      <input type="text" class="form-control" v-model="order.name">
    </div>
    <div class="mb-3">
      <label>Email</label>
      <input type="text" class="form-control" v-model="order.email">
    </div>
    <div class="mb-3">
      <label>Phone</label>
      <input type="text" class="form-control" v-model="order.phone_number">
    </div>
    <div class="mb-3">
      <label>Address</label>
      <input type="text" class="form-control" v-model="order.address">
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary me-2">Submit</button>
      <button type="button" class="btn btn-secondary" @click="$router.back()">Back</button>
    </div>
  </form>
</template>

<style scoped>

</style>