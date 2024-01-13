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
      <div class="row mb-4">
        <div class="coupon col-md-7 col-12">
          <div>
            <h5>THONG TIN GIAO HANG</h5>
            <!-- <label class="d-block" for="coupon_code">
              <p>Enter your coupon code if you have one. (#CODE30)</p>
            </label>
            <div class="d-flex flex-column flex-lg-row justify-content-between">
              <input type="text" placeholder="Coupon Code" id="coupon_code" />
              <Button class="me-3" :button_text="'Apply_coupon'" />
            </div> -->
            <div class="d-flex flex-column mt-4 mb-5">
              <div class="d-flex flex-column mb-4">
                <input type="text" v-model="v$.name.$model" id="name" placeholder="Họ và tên">
                <div class="input-errors" v-for="(error, index) of v$.name.$errors" :key="index">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>

              <div class="d-flex flex-column mb-4">
                <input type="text" v-model="v$.address.$model" id="address" placeholder="Địa chỉ">
                <div class="input-errors" v-for="(error, index) of v$.address.$errors" :key="index">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>

              <div class="d-flex mb-4">
                <div class="d-flex flex-column" style="flex:4">
                  <input type="email" v-model="v$.email.$model" id="email" placeholder="Email Address">
                  <div class="input-errors" v-for="(error, index) of v$.email.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>

                <div class="d-flex flex-column" style="flex:3">
                  <input type="text" v-model="v$.phone_number.$model" id="phone-number" placeholder="Phone Number">
                  <div class="input-errors" v-for="(error, index) of v$.phone_number.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <div class="d-flex flex-column" style="flex:1">
                  <label class="address-lable" for="province">Tỉnh/ Thành phố</label>
                  <select class="form-select" v-model="provinceId">
                    <option :value="province.id" v-for="province in provinces">{{ province.name }}</option>
                  </select>
                  <div class="input-errors" v-for="(error, index) of v$.provinceId.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
                <div class="d-flex flex-column" style="flex:1">
                  <label class="address-lable" for="district">Quận/ Huyện</label>
                  <select class="form-select" v-model="districtId">
                    <option :value="district.id" v-for="district in districts">{{ district.name }}</option>
                  </select>
                  <div class="input-errors" v-for="(error, index) of v$.districtId.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
                <div class="d-flex flex-column" style="flex:1">
                  <label class="address-lable" for="ward">Xã/ Phường</label>
                  <select class="form-select" v-model="wardId" placeholder="Xã Phường">
                    <option :value="ward.id" v-for="ward in wards">{{ ward.name }}</option>
                  </select>
                  <div class="input-errors" v-for="(error, index) of v$.wardId.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
            </div>
            <tr class="total-line total-line-gift">
              <td colspan="2">
                <p>Sau khi "Đặt hàng" thành công, EVA DE EVA sẽ kiểm tra sản phẩm và đóng gói ngay để giao hàng cho bạn.
                  Trong quá trình kiểm tra sản phẩm nếu có phát sinh EVA DE EVA sẽ liên hệ trực tiếp với quý khách để xin
                  xác nhận. EVA DE EVA Xin chân thành cảm ơn!</p>
              </td>
            </tr>

          </div>
        </div>
        <div class="total col-md-5 col-12 mb-4">
          <div>
            <h5>CART TOTAL</h5>
            <div class="d-flex justify-content-between">
              <h6>Subtotal</h6>
              <p>
                {{
                  totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <h6>Shipping</h6>
              <p>35,000</p>
            </div>
            <hr class="second-hr" />
            <div class="d-flex justify-content-between">
              <h6>Total</h6>
              <p>
                {{
                  (totalPrice + 35000)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}
              </p>
            </div>
            <div class="m-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="paymentMethod" value="1"
                  id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                  Tiền mặt
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="paymentMethod" value="2"
                  id="flexRadioDefault2" />
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
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'
import { UserService, ProvinceService, WardService, DistrictService } from '../services'
const pass = helpers.regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)
import axios from "axios";
export default {
  name: "Cartview",
  components: { Button, Navbar, Footer },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      name: "",
      email: "",
      address: "",
      phone_number: "",
      errorCode: "",
      provider: "",
      carts: [],
      paymentMethod: 1,
      provinceId: null,
      provinces: [],
      districtId: null,
      districts: [],
      wardId: null,
      wards: []
    };
  },
  validations() {
    return {
      name: {
        required: helpers.withMessage('* Please type Your User Name.', required),
        minLength: minLength(3),
        maxLength: maxLength(20)
      },
      email: {
        required: helpers.withMessage('* Please type Your Email Address.', required),
        email
      },
      address: {
        required: helpers.withMessage('* Please type Your Address.', required),
      },
      phone_number: {
        required: helpers.withMessage('* Please type Your Phone Number.', required),
      },
      provinceId: {
        required: helpers.withMessage('* Please select your province.', required),
      },
      districtId: {
        required: helpers.withMessage('* Please select your district.', required),
      },
      wardId: {
        required: helpers.withMessage('* Please select your ward.', required),
      },
    }
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
        ? (Number(cart?.price.replace(/,/g, "")) * (100 - cart?.discount)) / 100
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
        console.log(this.formatPrice(this.carts[i]));
        count += this.formatPrice(this.carts[i]?.price);
      }
      return count;
    },
    async order() {
      var toast = useToast();
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) {
        const order = await OrderService.createOrder({
          address: {
            name: this.name,
            address: this.address,
            phone_number: this.phone_number,
            ward: this.wardId,
            district: this.districtId,
            city: this.provinceId,
            email: this.email,
          }
        });
        if (order) {
          toast.success("Đặt hàng thành công!", {
            timeout: 2000,
          });
          if (this.paymentMethod == 1) {
            this.$router.push("/");
          } else {
            const payment = await UserService.payment(order?.data?.data?.id);
            if (payment) {
              window.location.href = payment.data.data;
            }
          }
        }
      }
    },
    async fetchProvices() {
      const response = await ProvinceService.getProvinces();
      this.provinces = response.data.data
    },
    async fetchDistricts() {
      const response = await DistrictService.getDistrictByProvince(this.provinceId);
      this.districts = response.data.data
    },
    async fetchWards() {
      const response = await WardService.getWardByDistrictId(this.districtId);
      this.wards = response.data.data
    },
  },
  async created() {
    await this.fetchCarts();
    await this.fetchProvices();
  },

  watch: {
    provinceId: function (val) {
      this.fetchDistricts();
    },
    districtId: function (val) {
      this.fetchWards();
    }
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
<style scoped>
img {
  width: 220px !important;
  height: auto;
}

.form-select {
  margin: 15px auto;
  border: 1px solid black;
  border-radius: 3px;
}

input {
  border-radius: 6px;
}

.form-select {
  width: 85%;
}

.total-line td {
  padding: 5px 50px;
}

.total-line td::before {
  background-color: #e1e1e1;
  content: '';
  position: absolute;
  top: 1.5em;
  left: 0;
  width: 100%;
  height: 1px;
}

.total-line-gift p {
  border: 2px dashed #f00;
  padding: 10px;
  text-align: left;
  margin-top: 15px;
  margin-bottom: 15px;
  white-space: break-spaces;
}

.address-lable {
  margin-left: 15px;
}

#cart #card-bottom .coupon input {
  margin-bottom: 0px;
}

.input-errors {
  margin-left: 15px;
  color: #f00
}
</style>
