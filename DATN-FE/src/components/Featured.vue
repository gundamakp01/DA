<template>
  <section id="featured">
    <div class="container text-center mt-5 pt-5">
      <h3>Our Featured</h3>
      <hr>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <div class="row mx-auto content-fluid">
        <Product :products="products" />
      </div>
    </div>
  </section>
</template>

<script>
import Product from "./Product.vue";
import { ProductService } from "@/services";
import product from "@/components/Product.vue";

export default {
  name: "Featured",
  components: { Product },
  data() {
    return {
      products: []
    };
  },
  methods: {
    async getProducts() {
      const resp = await ProductService.getProduct();
      if (resp) {
        console.log(resp.data.data.products);
        this.products = resp.data.data.products;
      }
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>