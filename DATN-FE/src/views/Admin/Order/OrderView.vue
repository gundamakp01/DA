<template>
  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Status</th>
      <th scope="col">Address</th>
      <th scope="col">Payment Method</th>
      <th scope="col">Order Date</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(order, index) in orders" :key="index" class="align-middle">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ order.user.name }}</td>
      <td>{{ order.user.email }}</td>
      <td>
        <select v-model="order.status" @change="changeStatusOrder(order.status, order.id)" class="form-select" aria-label="Default select example">
          <option v-for="status in statuses" :value="status.value">{{ status.text }}</option>
        </select>
      </td>
      <td>{{ customerAddress(order) }}</td>
      <td>{{ order.payment?.payment_method_text }}</td>
      <td>{{ order.order_date }}</td>
      <td>
        <button class="btn btn-secondary me-2" @click="showDetailOrder(order.id)">Detail</button>
        <button class="btn btn-danger" @click="destroy(order.id)">Delete</button>
      </td>
    </tr>
    </tbody>
    <div v-if="show" class="modal" tabindex="-1">
      <div class="modal-dialog modal-xl" style="width: 800px">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Chi tiết đơn hàng</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="show = false"></button>
          </div>
          <div class="modal-body">
            <table class="table table-striped">
              <thead>
              <tr>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Size</td>
                <td>Color</td>
                <td>Quantity</td>
                <td>Total</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="cart in carts" :key="cart.id" class="align-middle">
                <td>
                  <img width="100" height="100" :src="cart.image.url"  alt=""/>
                </td>
                <td>
                  <h5>{{ cart.product_name }}</h5>
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
                <td>{{ cart.size?.toUpperCase() }}</td>
                <td>{{ cart.color?.toUpperCase() }}</td>
                <td>{{ cart.quantity }}</td>
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
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="show = false">Close</button>
          </div>
        </div>
      </div>
    </div>
  </table>
</template>

<script>
import {OrderService, CartService} from "@/services";
import Button from "@/components/Button.vue";
import {useToast} from "vue-toastification";

export default {
  components: {Button},
  data() {
    return {
      orders: [],
      show: false,
      carts: [],
      statuses: []
    }
  },
  mounted() {
    this.fetchOrders()
    this.fetchStatuses()
  },
  methods: {
    async fetchOrders() {
      const resp = await OrderService.getOrder()
      if (resp) {
        this.orders = resp.data.data.orders
      }
    },
    fetchStatuses () {
      this.statuses = [
        { text: 'PENDING', value: 1 },
        { text: 'CONFIRMED', value: 2 },
        { text: 'COMPLETED', value: 3 },
      ]
    },
    formatPrice(cart) {
      return cart?.discount
          ? Math.floor(
          (Number(cart?.price.replace(/,/g, "")) * (100 - cart?.discount)) /
          100 /
          1000
      ) * 1000
          : Number(cart?.price.replace(/,/g, ""));
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
          await OrderService.deleteOrder(id)
          await this.fetchOrders()
        }
      });
    },
    async showDetailOrder(id) {
      this.show = true
      const resp = await CartService.getCartByOrderID(id)
      if (resp) {
        this.carts = resp.data.data
      }
    },
    async changeStatusOrder(status, id) {
      const $toast = useToast();
      const resp = await OrderService.changeStatus({
        status: status,
        id: id
      })
      if (resp) {
        $toast.success('Thay đổi trạng thái thành công!')
      }
    },
    customerAddress(order) {
      // `this` points to the vm instance
      let address = "";
      if (order?.address?.address) {
        address += order?.address?.address + ", ";
      }
      if (order?.address?.ward) {
        address += order?.address?.ward + ", ";
      }
      if (order?.address?.district) {
        address += order?.address?.district + ", ";
      }
      if (order?.address?.province) {
        address += order?.address?.province;
      }
      return address;
    },
  }
}

</script>

<style scoped>
/* Style cho modal, có thể điều chỉnh tùy ý */
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>