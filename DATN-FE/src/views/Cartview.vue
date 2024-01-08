<template>
  <Navbar />
  <section id="cart" class="pt-5">
    <div class="container pt-5 mt-5">
      <h3>Shopping Cart</h3>
      <hr class="hr" />
    </div>
    <div id="cart-container" class="container pb-3 my-5">
      <table>
        <thead>
          <tr>
            <td>Remove</td>
            <td>Image</td>
            <td>Product</td>
            <td>Size</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cart in carts" :key="cart.id" class="background-none">
            <td>
              <a @click="removeCart(cart.id)">
                <i class="fa fa-trash" style="font-size: 24px"></i>
              </a>
            </td>
            <td>
              <img :src="cart.image.url" />
            </td>
            <td>
              <h5>{{ cart.product_name }}</h5>
            </td>
            <td>
              <h5>{{ cart.size }}</h5>
            </td>
            <td>
              <h5>
                {{
                  formatPrice(cart)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}đ
              </h5>
            </td>
            <td>
              <select v-model="cart.quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <h5>
                {{
                  (formatPrice(cart) * cart.quantity)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}
              </h5>
            </td>
          </tr>
          <tr v-if="carts.length < 1">
            <td colspan="6">
              please purchase the product <br />
              <router-link to="/categories/1">Shop</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="card-bottom" class="container">
      <div class="row">
        <div class="coupon col-md-6 col-12 mb-4">
          <div>
            <h5>COUPON</h5>
            <label class="d-block" for="coupon_code">
              <p>Enter your coupon code if you have one. (#CODE30)</p>
            </label>
            <div class="d-flex flex-column flex-lg-row justify-content-between">
              <input type="text" placeholder="Coupon Code" id="coupon_code" />
              <Button class="me-3" :button_text="'Apply_coupon'" />
            </div>
          </div>
        </div>
        <div class="total col-md-6 col-12 mb-4">
          <div>
            <h5>CART TOTAL</h5>
            <div class="d-flex justify-content-between">
              <h6>Subtotal</h6>
              <p>{{ totalPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <h6>Shipping</h6>
              <p>35,000</p>
            </div>
            <hr class="second-hr" />
            <div class="d-flex justify-content-between">
              <h6>Total</h6>
              <p>{{ (totalPrice + 35000).toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
            </div>
            <div class="m-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="paymentMethod" value="1"
                  id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                  Tiền mặt
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="paymentMethod" value="2"
                  id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">
                  Thanh toán VNPay
                </label>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <Button class="me-3" :button_text="'process_to_checkout'" @click="order" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Button from "@/components/Button.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { useToast } from "vue-toastification";
import { CartService, OrderService } from "../services";
import { UserService } from "@/services";
import axios from "axios";
export default {
  name: "Cartview",
  components: { Button, Navbar, Footer },
  data() {
    return {
      carts: [],
      paymentMethod: 1,
    };
  },
  methods: {
    async fetchCarts() {
      const resp = await CartService.getCart();
      if (resp) {
        this.carts = resp.data.data;
      }
    },
    formatPrice(cart) {
      return cart?.discount
        ? 
        (Number(cart?.price.replace(/,/g, "")) * (100 - cart?.discount)) / 100 
        : Number(cart?.price.replace(/,/g, ""));
    },
    async removeCart(id) {
      var toast = useToast();
      const resp = await CartService.deleteCart(id);
      if (resp) {
        toast.success("Delete Cart Successfully!", {
          timeout: 2000,
        });
      } else {
        toast.error("Delete Cart Successfully!", {
          timeout: 2000,
        });
      }
      this.fetchCarts();
    },
    getTotalPrice() {
      var count = 0;
      for (let i = 1; i <= this.carts.length; i++) {
        console.log(this.formatPrice(this.carts[i]))
        count += this.formatPrice(this.carts[i]?.price);
      }
      return count;
    },
    async order() {
      var toast = useToast();
      const order = await OrderService.createOrder();
      if (order) {
        toast.success("Đặt hàng thành công!", {
          timeout: 2000,
        });
        if (this.paymentMethod == 1) {
          this.$router.push('/')
        } else {
          const payment = await UserService.payment(order?.data?.data?.id);
          if (payment) {
            window.location.href = payment.data.data
          }
        }
      }
    }
  },
  async created() {
    await this.fetchCarts();
  },
  computed: {
    // a computed getter
    totalPrice: function () {
      var count = 0;
      for (let i = 0; i < this.carts.length; i++) {
        count += this.formatPrice(this.carts[i]) * this.carts[i].quantity;
      }
      return count;
    },
  },
};
</script>
