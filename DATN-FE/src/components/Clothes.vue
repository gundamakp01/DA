<template>
  <section id="clothes">
    <div class="container text-center mt-5 pt-5">
      <h3>Dresses & Jumpsuits</h3>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div class="row mx-auto content-fluid">
        <Product :products="products" />
      </div>
    </div>
  </section>
</template>

<script>
import Product from "@/components/Product.vue";
import { ProductService } from "@/services";

export default {
  name: "Clothes",
  components: { Product },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      const resp = await ProductService.getProductByCategoryId(5);
      if (resp) {
        this.products = resp.data.data.products;
      }
    },
  },
  mounted() {
    this.getProducts();
    console.log(this.products.value);
  },
};
</script>
