<template>
  <div class="row mt-5 ProductDetails">
    <div class="col-lg-5 col-12">
      <!-- <img class="img-fluid w-100 mb-md-3" id="main_img" :src="get_main_img(Product_main_image)" alt=""> -->
      <img
        v-for="image in product?.image"
        :key="image.id"
        :src="image.url"
        :hidden="isVisible != image.id"
        class="img-fluid w-100 mb-md-3"
        id="main_img"
        alt=""
      />
      <div class="small-img-group">
        <div
          class="small-img-col"
          v-for="image in product?.image"
          :key="image.id"
          @click="isVisible = image.id"
        >
          <img :src="image.url" class="small-img" alt="" />
        </div>
      </div>
    </div>
    <div class="col-lg-7 col-12 px-3 mb-5">
      <h6 class="mb-4">Category / cc</h6>
      <div class="info-header">
        <div class="product-name mb-3">
          <span>{{ product?.name }}</span>
        </div>
        <div class="product-sku mb-3">
          <span id="pro_sku"
            >Mã sản phẩm: <strong>{{ product?.code }}</strong></span
          >

          <span class="pro-state">
            Tình trạng: <strong>Còn hàng </strong>
          </span>
          <span class="pro-vendor"
            >Thương hiệu: <strong>{{ product.vendor }}</strong></span
          >
        </div>
      </div>
      <div class="product-price">
        <span class="pro-title">Giá:</span>
        <span class="pro-price"
          >{{
            product.discount
              ? (
                  Math.floor(
                    (Number(product.price.replace(/,/g, "")) *
                      (100 - product.discount)) /
                      100 /
                      1000
                  ) * 1000
                )
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : product.price
          }}đ</span
        >
        <del class="" v-if="product.discount">{{ product.price }}đ</del>
        <span class="pro-percent">-{{ product.discount }}%</span>
      </div>
      <div
        id="variant-swatch-0"
        class="swatch clearfix is-color"
        data-option="option1"
        data-option-index="0"
      >
        <div class="d-flex flex-column pro-title">
          <span>Màu sắc: </span>
        </div>
        <div class="select-swap" v-for="color in product.color" :key="color">
          <div @click="cart.color = color" :class="{ 'bg-info': cart.color == color }" :data-value="color" class="py-2 px-3 border">
            <label class="nau sd" for="swatch-0-nau">
              <span>{{ color }}</span>
            </label>
          </div>
        </div>
      </div>
      <div
        id="variant-swatch-0"
        class="swatch clearfix is-color"
        data-option="option1"
        data-option-index="0"
      >
        <div class="d-flex align-items-center pro-title">
          <span>Kích thước : </span>
        </div>
        <div class="list-group">
          <label :class="{ 'bg-info': cart.size == 's' }" class="list-group-item">
            <input type="radio" name="radioOption" v-model="cart.size" value="s" class="form-check-input d-none">
            Size S
          </label>
          <label :class="{ 'bg-info': cart.size == 'm' }" class="list-group-item">
            <input type="radio" name="radioOption" v-model="cart.size" value="m" class="form-check-input d-none">
            Size M
          </label>
          <label :class="{ 'bg-info': cart.size == 'l' }" class="list-group-item">
            <input type="radio" name="radioOption" v-model="cart.size" value="l" class="form-check-input d-none">
            Size L
          </label>
          <label :class="{ 'bg-info': cart.size == 'xl' }" class="list-group-item">
            <input type="radio" name="radioOption" v-model="cart.size" value="xl" class="form-check-input d-none">
            Size XL
          </label>
        </div>
      </div>
      <div class="d-flex align-items-baseline mt-5">
        <input type="number" v-model="cart.quantity" max="5" min="1" />
        <Buttton
          class="mb-5 button_1"
          :button_text="button_text"
          :btnLoader="loader"
          @click="addToCart"
        />
      </div>
      <h4>Product Details</h4>
      <div class="details" v-html="product?.description"></div>
    </div>
  </div>
</template>

<script>
import Buttton from "./Button.vue";
import { ProductService } from "@/services";
import { CartService } from "@/services";
export default {
  name: "ProductDetails",
  data() {
    return {
      product: {
        color: [],
      },
      cart: {
        product_id: this.$route.params.id,
        quantity: 1,
        size: 's',
        color: ''
      },
      button_text: "Add To Cart",
      isVisible: 0,
      loader: false,
    };
  },
  components: { Buttton },
  methods: {
    async fetchProduct() {
      const resp = await ProductService.getProductById(this.$route.params.id);
      if (resp) {
        this.product = resp.data.data;
        this.isVisible = this.product?.image[0]?.id;
      }
    },
    async addToCart() {
      const resp = await CartService.createCart(this.cart);
      if (resp) {
        this.$router.push({ name: "Cart" });
      }
    },
  },
  async mounted() {
    await this.fetchProduct();
    this.cart.color = this.product.color[0];
  }
};
</script>
<style lang="css">
.swatch {
  margin-top: 15px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.swatch.is-color .pro-title {
  min-height: 38px;
}
.pro-title {
  min-width: 120px;
  font-size: 14px;
  font-weight: 600;
  margin-right: 15px;
}
.swatch .swatch-element label {
  position: relative;
  display: block;
  margin: 0;
  padding: 7px 10px;
  min-width: 66px;
  font-size: 12px;
  font-weight: 500;
  color: var(--shop-color-title);
  background-color: #fff;
  border: 1px solid #bdbfbe;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}
.select-swatch .swatch .swatch-element {
  display: inline-block;
  margin: 0 8px 8px 0;
  border-radius: 3px;
  position: relative;
  vertical-align: bottom;
}
.select-swatch .swatch .swatch-element label.sd:after {
  position: absolute;
  content: "";
  width: 19px;
  height: 19px;
  right: -1px;
  top: -1px;
  background-image: url(
    '%3Csvgxmlns="http://www.w3.org/2000/svg"width="20"height="20"viewBox="0 0 20 20"%3E%3Cgfill="none"fill-rule="evenodd"%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpathfill="%23fffff"d="M0 0h16c2.21 0 4 1.79 4 4v16L0 0z"transform="translate(-804 -366) translate(180 144) translate(484 114) translate(16 80) translate(0 28) translate(124)"/%3E%3Cgfill="%23FFF"%3E%3Cpathd="M4.654 7.571L8.88 3.176c.22-.228.582-.235.81-.016.229.22.236.582.017.81L5.04 8.825c-.108.113-.258.176-.413.176-.176 0-.33-.076-.438-.203L2.136 6.37c-.205-.241-.175-.603.067-.808.242-.204.603-.174.808.068L4.654 7.57z"transform="translate(-804 -366) translate(180 144) translate(484 114) translate(16 80) translate(0 28) translate(124) translate(7.5)"/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E'
  );
}
</style>
