<template>
  <button class="btn btn-success" @click="$router.push({name : 'createProducts'})">Create</button>
  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(product, index) in products" :key="index" class="align-middle">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ product.name }}</td>
      <td><img width="100" height="80" :src="product.image?.url" alt=""></td>
      <td>{{ product.price }}</td>
      <td>
        <button class="btn btn-secondary me-2" @click="$router.push(`Products/${product.id}/update`)">Edit</button>
        <button class="btn btn-danger" @click="destroy(product.id)">Delete</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {ProductService} from "@/services";
import Button from "@/components/Button.vue";

export default {
  components: {Button},
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      const resp = await ProductService.getProduct()
      if (resp) {
        this.products = resp.data.data.products
      }
    },
    destroy(id) {
      this.$swal({
        title: "Delete this order status?",
        text: "Are you sure? You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, Delete it!",
      }).then(async (result) => {
        if (result.value) {
          await ProductService.deleteProduct(id)
          await this.fetchProducts()
        }
      });
    }
  }
}

</script>

<style scoped>
</style>