<template>
  <div
    v-for="product in products"
    class="product text-center col-lg-4 col-md-6"
  >
    <img class="img-fluid mb-md-3" :src="product?.image?.url" alt="cc" />
    <div class="star py-3">
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <font-awesome-icon :icon="['fas', 'star-half-stroke']" />
    </div>
    <h5 class="p-name">{{ product.name }}</h5>
    <h4 class="p-price">{{ product.price }}đ</h4>
    <div class="d-flex justify-content-center">
      <Button
        class="me-2"
        :class="button_1"
        :button_text="Details"
        @click="goToDetail(product?.id)"
      />
      <Button :button_text="Buy_now" :btnLoader="loader" />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Product",
  data() {
    return {
      button_1: "button_1",
      Buy_now: "Buy Now",
      Details: "Details",
      loader: false,
    };
  },
  components: { Button },
  props: ["products"],
  methods: {
    goToDetail(id) {
      this.$router.push({ name: "productDetail", params: { id: id } });
    },
  },
};
</script>
<style lang="css">
.p-name {
  min-height: 40px;
}
</style>
