<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Address</th>
        <th scope="col">Phone Number</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in users" :key="index" class="align-middle">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ customerAddress(user) }}</td>
        <td>{{ user.phone_number }}</td>
        <td>
          <button
            class="btn btn-secondary me-2"
            @click="$router.push(`customers/${user.id}/update`)"
          >
            Edit
          </button>
          <button class="btn btn-danger" @click="destroy(user.id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { UserService } from "@/services";
import Button from "@/components/Button.vue";

export default {
  components: { Button },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      const resp = await UserService.getUser();
      if (resp) {
        this.users = resp.data.data.users;
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
          await UserService.deleteUser(id);
          await this.fetchUsers();
        }
      });
    },
    customerAddress(user) {
      // `this` points to the vm instance
      let address = "";
      if (user?.ward) {
        address += user.ward + ", ";
      }
      if (user?.district) {
        address += user.district + ", ";
      }
      if (user?.province) {
        address += user.province;
      }
      return address;
    },
  },
  computed: {
    // a computed getter
  },
};
</script>

<style scoped></style>
